const express = require('express');
const axios = require('axios');
const { load } = require('cheerio');
const https = require('https');

const app = express()
const agent = new https.Agent({
    rejectUnauthorized: false
})

app.use(express.json())

const baseUrl = 'https://catalogo-colaboragov.sistema.gov.br'

const createSearchUrl = (body, separator) => {
    const searchQuery = encodeURIComponent(body).replace(/%20/g, separator).toLowerCase()
    const searchUrl = `${baseUrl}/resultado?search=${searchQuery}`
    return searchUrl
}

const getHtmlFromPage = async (url) => {
    const response = await axios.get(url, { httpsAgent: agent })
    const html = response.data
    return html
}

const loadHtml = (html) => {
    const $ = load(html)
    return $
}

const isLinkPartOfBreadcrumb = ($, aElement) => {
    return $(aElement).closest('.breadcrumb').length
}

const createServicesList = ($) => {
    const services = []
    $('a').each((index, element) => {
        if (!isLinkPartOfBreadcrumb($, element)) {
            const link = $(element).attr('href');
            const name = $(element).text()
            const service = {
                name,
                link,
            }
            services.push(service);
        }
    })
    return services
}

app.post('/api/search', async (req, res) => {
    const userMessage = req.body.message

    const searchUrl = createSearchUrl(userMessage, "+")

    try {
        const html = await getHtmlFromPage(searchUrl)

        const $ = loadHtml(html)

        const services = createServicesList($)

        return res.json({ services })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Erro ao buscar dados' })
    }
})

app.post('/api/profile/services', async (req, res) => {
    
})





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
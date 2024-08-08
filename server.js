const express = require('express');
const axios = require('axios');
const { load } = require('cheerio');
const https = require('https');

const app = express()
const agent = new https.Agent({
    rejectUnauthorized: false
})

app.use(express.json())

app.post('/api/search', async (req, res) => {
    const userMessage = req.body.message

    const search = encodeURIComponent(userMessage).replace(/%20/g, "+")

    const baseUrl = 'https://catalogo-colaboragov.sistema.gov.br'
    const searchUrl = `${baseUrl}/resultado?search=${search}`

    try {
        const response = await axios.get(searchUrl, { httpsAgent: agent })
        const html = response.data
        
        const $ = load(html)

        const services = []
        const lastUl = $('ul').last()
        lastUl.find('a').each((index, element) => {
            const link = $(element).attr('href');
            const name = $(element).text()
            const service = {
                name,
                link,
            }
            services.push(service);
        });

        return res.json({ services })

    } catch (error) {
        console.error('Erro ao buscar dados');
        return res.status(500).json({ error: 'Erro ao buscar dados' })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
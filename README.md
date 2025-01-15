# 📄 Documentação da API

### 🌐 URL Base  
`https://services-links.vercel.app/`

### Endpoints
### **Busca de Serviços**

`POST` `/api/search`

**Descrição:** Executa uma busca no catálogo usando uma mensagem.

#### **Requisição**

```json
{
  "message": "Férias"
}
```

#### **Resposta**

```json
{
  "services": [
    {
      "name": "Cancelar férias",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/cancelar-ferias"
    },
    {
      "name": "Consultar férias",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/consultar-ferias"
    },
    {
      "name": "Homologar férias do servidor",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/homologar-ferias-do-servidor"
    },
    {
      "name": "Interromper Férias",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/interromper-ferias"
    },
    {
      "name": "Programar Férias",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/programar-ferias"
    },
    {
      "name": "Programar férias para servidores e empregados cedidos",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/programar-ferias-para-servidores-e-empregados-cedidos"
    },
    {
      "name": "Reprogramar férias",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/reprogramar-ferias"
    }
  ]
}
```

---

### **Serviços por Perfil**

`POST` `/api/profile/services`

**Descrição:** Retorna a lista de serviços disponíveis para um perfil específico.

#### **Perfis:**

- Aposentado e Pensionista
- Chefe de Unidade
- Líder
- Ministério Solicitante

#### Requisição

```json
{
  "profile": "Aposentado"
}
```

#### **Resposta**

```json
{
  "services": [
    {
      "name": "Averbar tempo de serviço",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/averbar-tempo-de-servico"
    },
    {
      "name": "Comprovar pagamento das despesas de plano de saúde",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/comprovar-pagamento-das-despesas-de-plano-de-saude"
    },
    {
      "name": "Comprovar renda extra-SIAPE",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/comprovar-renda-extra-siape"
    },
    {
      "name": "Emitir declaração de aposentadoria e fundamento legal",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/emitir-declaracao-de-aposentadoria-e-fundamento-legal"
    },
    {
      "name": "Gerenciar Vínculos no SOUGOV.BR e Sigepe",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/gerenciar-vinculos-no-sougovbr-e-sigepe"
    },
    {
      "name": "Simular aposentadoria",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/simular-aposentadoria"
    },
    {
      "name": "Solicitar abono de permanência",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/solicitar-abono-de-permanencia"
    },
    {
      "name": "Solicitar aposentadoria",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/solicitar-aposentadoria"
    },
    {
      "name": "Solicitar Certidão de Tempo de Contribuição",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/solicitar-certidao-de-tempo-de-contribuicao"
    },
    {
      "name": "Solicitar isenção de imposto de renda para aposentados, pensionistas e anistiados pela DECIPEX",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/solicitar-isencao-de-imposto-de-renda-para-aposentados-pensionistas-e-anistiados-pela-decipex"
    },
    {
      "name": "Solicitar ressarcimento de plano de saúde",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/solicitar-ressarcimento-de-plano-de-saude"
    }
  ]
}
```



### **Serviços por Categoria**

`POST` `/api/category/services`

**Descrição:** Retorna a lista de serviços disponíveis para uma categoria específica.

#### **Categorias:**

- Aposentadoria e Saúde
- Assessoria em Gestão Colaborativa
- Avaliação de Desempenho e Força de Trabalho
- Bens, Espaços de Trabalho e Transportes
- Certificado e Identificação Funcional
- Comunicação, Divulgação e Eventos
- Contratos, Compras e Contratações
- E-mail e Rede local
- Frequência, Jornada de Trabalho e Férias
- Internet
- Orçamento, Custos e CNPJ
- Posse, Licenças e Afastamentos
- Remuneração e IRPF
- Serviços gráficos, de arquivo e de biblioteca
- Sistemas e Softwares

#### **Requisição**

```json
{
  "category": "Internet"
}
```

#### **Resposta**

```json
{
  "services": [
    {
      "name": "Relatar indisponibilidade ou lentidão de conexão de Internet",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/relatar-indisponibilidade-ou-lentidao-de-conexao-de-internet"
    },
    {
      "name": "Bloquear ou desbloquear endereço de Internet",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/bloquear-ou-desbloquear-endereco-de-internet"
    },
    {
      "name": "Criar ou alterar página no Portal ColaboraGov",
      "link": "https://catalogo-colaboragov.sistema.gov.br/servico/criar-ou-alterar-pagina-no-portal-colaboragov"
    }
  ]
}
```

### 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- JavaScript
- Express.js
- Axios
- Cheerio
- Webpack
- Git
- Github

### ⚖ Licença
<p> Este projeto está licenciado sob <a href="https://opensource.org/license/mit/" target="_blank">a Licença MIT</a> </p>

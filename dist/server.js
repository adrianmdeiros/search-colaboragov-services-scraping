(()=>{var e={938:e=>{"use strict";e.exports=require("axios")},217:e=>{"use strict";e.exports=require("cheerio")},252:e=>{"use strict";e.exports=require("express")},692:e=>{"use strict";e.exports=require("https")}},r={};function s(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,s),a.exports}const t=s(252),o=s(938),{load:a}=s(217),n=s(692),c=t(),i=new n.Agent({rejectUnauthorized:!1});c.use(t.json()),c.post("/api/search",(async(e,r)=>{const s=e.body.message,t=`https://catalogo-colaboragov.sistema.gov.br/resultado?search=${encodeURIComponent(s).replace(/%20/g,"+")}`;try{const e=(await o.get(t,{httpsAgent:i})).data,s=a(e),n=[];return s("ul").last().find("a").each(((e,r)=>{const t=s(r).attr("href"),o={name:s(r).text(),link:t};n.push(o)})),r.json({services:n})}catch(e){return console.error("Erro ao buscar dados"),r.status(500).json({error:"Erro ao buscar dados"})}}));const u=process.env.PORT||3e3;c.listen(u,(()=>{console.log(`Servidor rodando na porta ${u}`)}))})();
# The Braid Map — app de membros (EN)

Entrega do produto **The Braid Map: 50 Braid Styles, Step by Step** (EUA). App TODO EM INGLÊS, com a identidade do
guia e da página de vendas (thebraidmap.vercel.app): chocolate, terracota e mostarda sobre creme, Newsreader + Inter.

    node servidor.cjs     # http://localhost:4270

**Ainda não publicado** (a primeira publicação precisa do ok do Heitor; sem repo e sem projeto na Vercel).

**Login:** QUALQUER e-mail com formato válido entra (sem gateway, sem Supabase).
**Plano:** todo mundo recebe TUDO (guia + 6 bônus). A regra fica desligada em `REGRA_PLANO` no topo do script do
`referencia/modelo.html` (função `PLANO_DO_EMAIL`).
**Suporte:** support@htguias.com (assunto "The Braid Map – Support"; o corpo leva o e-mail de login e a dúvida).

## Como é montado

O `index.html` **não se edita à mão**: ele é gerado do `referencia/modelo.html`.

    node scripts/braid-app-arquivos.cjs            # tudo: fontes, PDF, 166 páginas webp, capas, ícones, bônus
    node scripts/braid-app-arquivos.cjs bonus      # só os bônus (puxa os PDFs novos do Downloads)
    node scripts/braid-app-montar.cjs              # referencia/modelo.html + dados -> index.html
    node scripts/braid-app-capturas.cjs            # 21 capturas 390 px em capturas/ e erros de console

**Bônus novo saiu?** `node scripts/braid-app-arquivos.cjs bonus && node scripts/braid-app-montar.cjs`
(lê `Downloads/Tranças EUA/Entregável/Bônus/Bonus N - <nome>.pdf` e `Bônus/Capas/bonus-N.png`; sem PDF = "Coming soon").

| no app | origem |
|---|---|
| `assets/livros/guide/pag-001…166.webp` | `entregaveis/trancas-trancista-eua/producao/paginas/` na ordem do `scripts/tr-pdf.cjs` (capa `capas/final/cover-en.png`) |
| `pdf/The-Braid-Map.pdf` (31 MB) | `Downloads/Tranças EUA/Entregável/The Braid Map (compressed).pdf` |
| índice, níveis, horas, pacotes | `entregaveis/trancas-trancista-eua/projetos.json` + `producao/conteudo/prep.json` |
| `assets/livros/bN/` + `pdf/Bonus-N-*.pdf` | PDF do bônus (páginas tiradas com o pdftoppm); índice do bônus = `bonus/conteudo/bN.json` |
| capas dos bônus | `Bônus/Capas/bonus-N.png`; enquanto não existe, a da página de vendas (`funis/trancas-trancista-eua/assets/bonus-N.webp`) |
| garantia (7 dias) e textos dos bônus | `funis/trancas-trancista-eua/textos/en.json` |

- A numeração impressa nas páginas = página do app (capa = 1). Estilo N = págs. 17+3(N−1) (Profile), +1 (Map), +2 (Steps).
- Abas: Home (4 passos + 6 bônus), Guide (busca, filtros por nível/tempo/kids/men/favoritos), Support (contato + FAQ), Get the app.
- Leitor: páginas uma embaixo da outra, zoom (botão ou toque duplo), índice com busca, favorito do estilo, PDF.
  Favoritos e a página onde parou ficam no `localStorage`, por e-mail.

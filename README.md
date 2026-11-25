# Trabalho 4 - Integração e Entrega Contínua

Este projeto contém uma página estática publicada por uma esteira do GitHub Actions.

## Pipeline

- **Test:** instala as dependências e executa o HTMLHint.
- **Build:** gera o diretório `dist/` e envia o artefato do GitHub Pages.
- **Deploy:** recupera o artefato e publica no GitHub Pages.

Durante o troubleshooting, o script foi ajustado para gerar `dist/`, que é o mesmo
diretório utilizado pelo build e pelo deploy.

## Comandos locais

```sh
npm ci
npm run lint
npm run build
```

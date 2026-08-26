---
title: "Construindo este Blog Minimalista do Zero com Astro, i18n e GitHub Pages"
date: 2026-08-26
threads: ["projetos", "aprendizado"]
summary: "Uma visão detalhada de como este blog foi planejado, arquitetado e construído sem backend, com validação de threads e i18n transparente."
---

Este blog foi concebido com uma premissa clara: **autoria simples em Markdown, zero atrito na publicação e visualização estática impecável.**

## Escolhas Arquiteturais

1. **Astro 4 Estático**: Saída de compilação 100% estática (`output: 'static'`) ideal para hospedagem gratuita no **GitHub Pages**.
2. **Modelo de Conteúdo Co-localizado**: Cada post em sua própria pasta contendo `banner.jpg`, `pt.md` e `en.md`. Os arquivos de imagem permanecem compartilhados entre os idiomas sem duplicação de ativos.
3. **Validação Automática no Build**: O sistema garante que a lista de `threads` no front matter seja rigorosamente idêntica entre a versão em português e inglês.

## Componentes da Interface

- **Sidebar por Threads**: Filtro dinâmico por categoria de post com contadores automáticos e gaveta colapsável em telas mobile.
- **Busca Estática**: Um arquivo `search-index.json` gerado no build permite busca textual instantânea no cliente por título, resumo e corpo.
- **Alternador de Tema**: Suporte completo a Dark/Light Mode com persistência via `localStorage` e suporte nativo ao esquema de cores do sistema.
- **Navegação de Idiomas**: Troca fluida entre PT e EN preservando a URL do post ativo e injetando tags SEO `hreflang` e atributo HTML `lang`.

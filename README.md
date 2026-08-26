# Blog Pessoal Estático com Astro 4

Um blog estático de alta performance e apelo visual moderno para autor único, hospedado no **GitHub Pages**, construído com **Astro**, **Content Collections (MDX)**, suporte nativo a **i18n (Português/Inglês)**, **busca client-side leve**, **tema claro/escuro persistente** e **validação de metadados de threads no build**.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18.x ou superior)
- npm ou pnpm

### Passos

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o Servidor de Desenvolvimento (Hot-reload)**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:4321](http://localhost:4321) no seu navegador. As alterações nos arquivos Markdown ou no código serão refletidas instantaneamente.

3. **Testar Build Estático e Preview**:
   ```bash
   npm run build
   npm run preview
   ```

---

## 📝 Como Criar um Novo Post

Cada post fica dentro de sua própria pasta em `src/content/posts/<slug-do-post>/`.

### Estrutura de Pastas do Post

```text
src/content/posts/meu-novo-post/
├── banner.jpg      # Imagem de banner (ou banner.png/svg/webp) — compartilhada pelas duas línguas
├── pt.md           # Conteúdo em Português
└── en.md           # Conteúdo em Inglês
```

### Front Matter Obrigatório (`pt.md` e `en.md`)

```yaml
---
title: "Título do Novo Post"
date: 2026-08-26
threads: ["aprendizado", "projetos"]
summary: "Resumo curto e conciso do post para exibição nas listagens e SEO."
---

Corpo do post em Markdown aqui...
```

> ⚠️ **Regra Importante de Validação**:
> - O banner **não** é declarado no front matter. O blog detecta automaticamente a imagem `banner.*` presente na pasta do post.
> - O campo `threads` em `pt.md` e `en.md` deve ser **estritamente idêntico**. Caso haja divergência, o build falhará com uma mensagem de erro clara.
> - Se o post ainda não possuir tradução em um dos idiomas (ex.: apenas `pt.md`), o site exibirá o conteúdo disponível acompanhado de um aviso discreto de tradução ausente.

---

## 🏷️ Como Adicionar uma Nova Thread (Tópico)

As threads são geradas dinamicamente a partir dos posts. Para criar uma nova thread:

1. Adicione a nova tag no campo `threads` do front matter do seu post (ex: `threads: ["carreira", "tecnologia"]`).
2. A sidebar à esquerda listará a nova thread automaticamente, contabilizando a quantidade de posts associados a ela.

---

## 🌐 Deploy Automático no GitHub Pages

O projeto inclui um workflow de publicação automática via **GitHub Actions** em `.github/workflows/deploy.yml`.

### Configuração Inicial:

1. Edite o arquivo [`astro.config.mjs`](file:///C:/Users/Windows%2010/.gemini/antigravity/scratch/astro-blog/astro.config.mjs):
   ```javascript
   export default defineConfig({
     site: 'https://SEU-USUARIO.github.io',
     base: '/SEU-REPOSITORIO/',
     output: 'static',
   });
   ```
   Substitua `SEU-USUARIO` e `SEU-REPOSITORIO` pelos dados reais do seu repositório GitHub.

2. No repositório do GitHub:
   - Vá em **Settings** > **Pages**.
   - Em **Source**, selecione **GitHub Actions**.

3. Sempre que fizer um `git push` na branch `main` ou `master`, o GitHub Actions irá buildar a aplicação e publicar no GitHub Pages automaticamente!

---

## 🛠️ Tecnologias Utilizadas

- **Astro 4** (`output: 'static'`)
- **Content Collections & Zod Schema Validation**
- **Vanilla CSS3** (CSS Custom Properties & Design System inspirados em paletas escuro/ardósia)
- **Client Search Island** (Índice JSON gerado no build sem consumo de APIs pagas)

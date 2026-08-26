import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Substitua 'SEU-USUARIO' e 'SEU-REPOSITORIO' com o seu nome de usuário e repositório do GitHub
  site: 'https://ThiagoBaruffaldi.github.io',
  base: '/ThiagoBaruffaldi.github.io/',
  output: 'static',
  integrations: [mdx()]
});

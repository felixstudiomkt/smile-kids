# Smile Kids Odontologia — versão para Vercel

Esta pasta contém uma cópia independente do site preparada para Next.js e Vercel. O site atualmente publicado no ChatGPT Sites não é alterado por esta versão.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar a produção

```bash
npm run build
npm start
```

## Publicar pela Vercel

### Opção 1 — GitHub

1. Crie um repositório no GitHub e envie todo o conteúdo desta pasta.
2. Na Vercel, clique em **New Project**.
3. Importe o repositório.
4. Confirme o preset **Next.js**.
5. Clique em **Deploy**.

### Opção 2 — Vercel CLI

Dentro desta pasta, execute:

```bash
npx vercel --prod
```

O projeto não exige variáveis de ambiente. Depois da publicação, o domínio pode ser configurado em **Project Settings → Domains** na Vercel.

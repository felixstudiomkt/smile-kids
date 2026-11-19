# Smile Kids Odontologia

Site em Next.js com exportação estática para **Cloudflare Pages** e conteúdo editável via `content/felix-site.json` (integrado ao portal FELIX Base).

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar a produção (exportação estática)

```bash
npm run build
```

Os arquivos estáticos são gerados em `out/`.

## Publicar no Cloudflare Pages

- **Integração Git (recomendado):** conectar o repositório `felixstudiomkt/smile-kids`, branch de produção `main`, comando de build `npm run build` e diretório de saída `out` (Node 22 definido em `.node-version`).
- **Deploy manual (CLI):** `npx wrangler pages deploy out --project-name smile-kids`.

O projeto não exige variáveis de ambiente obrigatórias; opcionalmente `NEXT_PUBLIC_SITE_URL` pode definir o domínio canônico das meta tags (por padrão usa `CF_PAGES_URL` em builds do Cloudflare Pages).

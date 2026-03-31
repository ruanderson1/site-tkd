# Rodrigo Oliveira TaeKwonDo — Site

Landing page institucional do dojang **Rodrigo Oliveira TaeKwonDo**, desenvolvida com React + TypeScript + Vite.

## 📌 Visão geral

O site apresenta informações principais da escola e do professor, com foco em conversão para contato.

Seções atuais:

- Início
- Sobre
- Professor
- Apostila
- Galeria
- Vídeos de treino
- Contato
- Botão flutuante de WhatsApp

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+ (recomendado LTS)
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Pré-visualização do build

```bash
npm run preview
```

## 📜 Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera build de produção (`tsc -b && vite build`)
- `npm run lint` — executa lint no projeto
- `npm run preview` — serve localmente o build gerado

## 🗂️ Estrutura do projeto

```text
src/
	components/
		WhatsAppButton.tsx
	constants/
		site.ts
	layout/
		Header.tsx
		Footer.tsx
	sections/
		Hero.tsx
		Sobre.tsx
		Professor.tsx
		Apostila.tsx
		Galeria.tsx
		TreinoVideo.tsx
		Contato.tsx
	App.tsx
	main.tsx
```

## ⚙️ Conteúdo editável

As informações principais do site (nome do Dojang, links, endereço, imagens, vídeos e textos estruturados) estão centralizadas em:

- `src/constants/site.ts`

## 📷 Assets

As imagens públicas ficam em:

- `public/images/`

## ✅ Status

Projeto pronto para desenvolvimento e build local.


# Estilo & Conforto — Vitrine de móveis

Projeto pessoal de vitrine responsiva com HTML, CSS, TypeScript e Vite. Explora apresentação de produtos, tipografia e interações no navegador.

**[Abrir demonstração](https://venda-de-moveis.netlify.app/)**

## Recursos

- Seção inicial, apresentação da marca e catálogo de exemplo.
- Cards de produtos com imagem, descrição e preço.
- Layout responsivo, animações CSS e barra de navegação com efeito de rolagem.
- Formulário demonstrativo.

## Escopo da demonstração

Busca, conta e carrinho são elementos visuais. Não há checkout, processamento de pagamentos ou backend de pedidos. O formulário exibe uma confirmação de exemplo e não envia mensagens.

## Executar localmente

Pré-requisitos: Node.js e npm.

```bash
git clone https://github.com/devsilvver/site-de-venda-de-moveis.git
cd site-de-venda-de-moveis
npm install
npm run dev
```

A configuração usa a porta 3000; confira a URL exibida pelo Vite.

```bash
npm run build
npm run preview
```

O build é gerado em `dist/`.

## Estrutura

```text
index.html      # Vitrine e catálogo de exemplo
index.css       # Layout, tema e animações
index.tsx       # Navegação, formulário e efeito da barra
package.json    # Dependências e comandos
vite.config.ts  # Configuração do Vite
```

## Personalização

Edite catálogo e textos em `index.html`, estilos em `index.css` e interações em `index.tsx`. As imagens e fontes usam serviços externos.

## Autor e licença

[Guilherme Silvestrini](https://github.com/devsilvver) · [LinkedIn](https://www.linkedin.com/in/guilherme-silvestrini-782226233/) · [E-mail](mailto:contatosilvestrini@gmail.com)

A raiz contém [licença MIT](LICENSE); `index.tsx` também contém um cabeçalho Apache-2.0, que deve ser preservado e ter sua origem esclarecida antes de redistribuições.

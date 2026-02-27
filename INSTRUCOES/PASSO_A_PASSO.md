# 📖 Guia de Manutenção - Adega 3º Turno

Este guia explica como você pode gerenciar os produtos, preços e fotos do seu site diretamente pelo GitHub.

---

## 1. Como Adicionar Fotos de Produtos
Para que um produto apareça com foto, você deve subir o arquivo na pasta correta com o nome correto.

### Passo a Passo:
1. Vá no seu repositório no GitHub.
2. Navegue até a pasta `public/fotos/`.
3. Entre na pasta da categoria (ex: `cervejas`).
4. Clique em **Add file** > **Upload files**.
5. Suba a foto renomeada (ex: `cerveja1.jpg`).

### Nomes Obrigatórios:
- **Combos:** `combo1.jpg`, `combo2.jpg`...
- **Cervejas:** `cerveja1.jpg`, `cerveja2.jpg`...
- **Destilados:** `destilado1.jpg`, `destilado2.jpg`...
- **Tabacaria:** `tabacaria1.jpg`, `tabacaria2.jpg`...
- **Vinhos:** `vinho1.jpg`, `vinho2.jpg`...
- **Não Alcoólicos:** `nao-alcoolico1.jpg`, `nao-alcoolico2.jpg`...
- **Doces:** `doce1.jpg`, `doce2.jpg`...
- **Salgados:** `salgado1.jpg`, `salgado2.jpg`...

---

## 2. Como Mudar Preços e Nomes
Para mudar o preço, o nome ou a descrição de um produto, você deve editar o arquivo `data.ts`.

### Passo a Passo:
1. No GitHub, abra o arquivo `data.ts` que está na raiz do projeto.
2. Clique no ícone de **Lápis (Edit)**.
3. Procure pela parte que diz `const CUSTOM_DATA`.
4. Adicione ou altere as informações seguindo este modelo:

```typescript
const CUSTOM_DATA = {
  'combo-1': { 
    name: 'Combo Absolut + Red Bull', 
    price: 189.90, 
    description: '1L Absolut + 5 Red Bull' 
  },
  'cerveja-1': { 
    name: 'Heineken 6-pack', 
    price: 34.90 
  },
};
```

### Regras do ID:
O ID é sempre o **prefixo** (combo, cerveja, destilado, etc) seguido de um **hífen** e o **número**.
- Exemplo: `combo-1`, `cerveja-5`, `tabacaria-10`.

---

## 3. Como Mudar Vídeos
- **Vídeo do Topo:** Suba em `public/videos/` com o nome `topo.mp4`.
- **Vídeo de Eventos:** Suba em `public/videos/` com o nome `ambiente.mp4`.
- **Vídeos de Preparo:** Suba em `public/videos/` com os nomes `video1.mp4`, `video2.mp4`...

---

## 4. Como Mudar a Logo
- Suba em `public/fotos/` com o nome `logo.jpg`.

---

*O Netlify atualizará o site automaticamente sempre que você salvar (Commit) uma alteração no GitHub.*

# Convite digital interativo

Estrutura de convite em página única: capa com "clique para abrir" → vídeo de
abertura → páginas do convite com botões invisíveis por cima da arte (confirmar
presença no WhatsApp, localização no Maps, lista de presentes), música de fundo,
swipe, setas e contagem regressiva opcional.

Tudo é estático (HTML/CSS/JS puro), sem build e sem servidor. Dá para hospedar
no GitHub Pages, Netlify, Vercel ou dentro do seu domínio.

## Arquivos

```
convite/
├── index.html     motor do convite (não precisa mexer)
├── config.js      TUDO que muda de cliente para cliente
├── editor.html    ferramenta para desenhar os botões e gerar o código
├── assets/
│   ├── capa.jpg       capa (1080x1920)
│   ├── video.mp4      vídeo de abertura (vertical, até ~15s)
│   ├── musica.mp3     música de fundo
│   ├── pagina1.jpg    arte da página 1 (1080x1920)
│   └── pagina2.jpg    arte da página 2
└── README.md
```

Os arquivos em `assets/` são só marcadores de posição. Troque pelos reais
mantendo os mesmos nomes e nada mais precisa mudar.

## Como montar um convite novo

1. **Faça as artes no Canva** em 1080 x 1920 px (9:16). Uma imagem por página,
   já com os botões desenhados na arte.
2. **Exporte** como JPG e coloque em `assets/`.
3. **Marque os botões**: abra `editor.html` no navegador, carregue a imagem da
   página, arraste um retângulo em cima de cada botão desenhado, preencha o
   rótulo e o link. Copie o código gerado.
4. **Cole em `config.js`**, dentro de `paginas`.
5. Ajuste título, música, vídeo e contagem regressiva no mesmo `config.js`.

### Links úteis para os botões

| Botão | Link |
|---|---|
| Confirmar no WhatsApp | `https://wa.me/5588999999999?text=Confirmo%20presen%C3%A7a` |
| Localização | `https://www.google.com/maps/search/?api=1&query=ENDERECO` |
| Lista de presentes | link da loja / lista |
| Voltar à capa | use `acao: "inicio"` no lugar de `href` |

## Testar no computador

Abrir o `index.html` direto pelo `file://` funciona, mas o áudio às vezes trava.
O ideal é subir um servidor local:

```bash
cd convite
python3 -m http.server 8000
# abra http://localhost:8000
```

Dica: acesse `http://localhost:8000/#debug` para **ver as áreas dos botões**
pintadas de rosa e conferir se estão no lugar certo.

## Publicar no GitHub Pages

```bash
cd convite
git init && git add . && git commit -m "convite"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

Depois, no repositório: **Settings → Pages → Branch: main / (root) → Save**.
O convite fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

Para vários convites no mesmo repositório, use uma pasta por cliente
(`/isaac-1-aninho/`, `/casamento-ana/`) — cada pasta é um convite completo.

## Detalhes técnicos

- Palco fixo 9:16 centralizado, então fica igual em qualquer celular.
- As posições dos botões são em **porcentagem**, não em pixel: a arte pode ser
  redimensionada que os botões acompanham.
- A música só começa depois do primeiro toque (regra dos navegadores). Por isso
  a capa com "clique para abrir" — é ela que libera o áudio.
- Se o navegador bloquear o som do vídeo, ele toca mudo e um toque na tela
  religa o áudio.
- Vídeo: mantenha abaixo de ~10 MB para carregar rápido no 4G.
  Compressão sugerida:
  `ffmpeg -i entrada.mp4 -vf scale=1080:1920 -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 96k saida.mp4`

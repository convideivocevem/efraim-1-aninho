/* =====================================================================
   CONFIG DO CONVITE  —  edite SÓ este arquivo para cada novo cliente
   Convite: Efraim Augusto — 1 aninho (16/01/2027 18h)
   ===================================================================== */
window.CONVITE = {

  /* ---- identidade ---- */
  titulo: "Efraim 1 aninho",         // aparece na aba do navegador
  corFundo: "#241a0f",               // cor das bordas laterais no desktop (marrom safári)

  /* ---- música de fundo (opcional: deixe arquivo: null para desligar) ---- */
  musica: {
    arquivo: "musica.mp3",
    volume: 0.20,
    ligadaNoInicio: true
  },

  /* ---- capa: primeira tela, com o "clique para abrir" ---- */
  capa: {
    imagem: "capa.jpg",
    chamada: "Clique para começar",  // texto piscando embaixo (use "" para esconder)
    corChamada: "#f6e6c4"
  },

  /* ---- vídeo de abertura (opcional: arquivo: null para pular) ---- */
  video: {
    arquivo: "video.mp4",
    textoPular: "Pular abertura",
    mostrarBotaoPular: true
  },

  /* ---- páginas do convite ----------------------------------------------
     Página única (1080x1920) com os 3 botões desenhados na arte.
     "botoes" são áreas invisíveis clicáveis por cima da imagem (% da imagem).
  ----------------------------------------------------------------------- */
  paginas: [
    {
      imagem: "pagina1.jpg",
      botoes: [
        { rotulo: "Confirmar presença",
          href: "https://wa.me/5588996653004?text=Ol%C3%A1!%20%E2%9C%A8%20Confirmamos%2C%20com%20muita%20alegria%2C%20nossa%20presen%C3%A7a%20na%20celebra%C3%A7%C3%A3o%20do%201%C2%BA%20anivers%C3%A1rio%20do%20Efraim.%20Ser%C3%A1%20uma%20honra%20brindar%20esse%20momento%20t%C3%A3o%20especial!%20%F0%9F%A5%82",
          left: 14, top: 79, width: 22, height: 14 },
        { rotulo: "Localização",
          href: "https://share.google/vLKFVnV4Y1CINQvgQ",
          left: 38.5, top: 79, width: 22, height: 14 },
        { rotulo: "Sugestões de presentes", acao: "imagem", imagem: "presentes.jpg",
          left: 63.5, top: 79, width: 22, height: 14 }
      ]
    }
  ],

  /* ---- contagem regressiva (opcional) ----
     A arte já mostra data/hora, então deixei desligada para não cobrir o convite.
     Para ligar: ative:true e ajuste posição (left/top/width em %).            */
  contagem: {
    ativa: false,
    data: "2027-01-16T18:00:00-03:00",
    pagina: 1,
    left: 10, top: 60, width: 80,
    cor: "#ffffff",
    fonte: "Georgia, serif"
  },

  /* ---- navegação (página única: setas/bolinhas não aparecem) ---- */
  navegacao: {
    setas: true,
    bolinhas: true,
    toqueAvanca: true
  }
};

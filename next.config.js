module.exports = {
  async headers() {
    return [
      {
        // Aplica a todas as requisições de imagens
        source: "/(.*\\.(png|jpg|jpeg|gif|svg|webp))$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache por 1 ano
          },
        ],
      },
    ];
  },
};

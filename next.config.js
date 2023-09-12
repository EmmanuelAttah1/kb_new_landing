/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/api/subscribe",
            destination: "https://numiattah.pythonanywhere.com/subscribe/",
          },
        ];
      },
}

module.exports = nextConfig

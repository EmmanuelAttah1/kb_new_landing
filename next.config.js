/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: './my-loader.js',
    },
    // async rewrites() {
    //     return [
    //       {
    //         source: "/api/subscribe",
    //         destination: "https://numiattah.pythonanywhere.com/subscribe/",
    //       },
    //     ];
    //   },
}

module.exports = nextConfig

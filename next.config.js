/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./",
  // 编译文件的输出目录
  distDir: "dist/",
  productionBrowserSourceMaps:true
}

module.exports = nextConfig

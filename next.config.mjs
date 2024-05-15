// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  /**
   * Configure redirects
   *
   * @see https://nextjs.org/docs/pages/api-reference/next-config-js/redirects
   */
  async redirects() {
    return [
      {
        source: '/app/dash-player',
        destination: 'https://dash-player.solidspoon.xyz',
        permanent: true, // 表示这是一个永久重定向，浏览器会缓存这个响应
      },
    ];
  },
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    // Add the alias for '@' to resolve to 'src'
    // config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    // Find the existing rule that handles .svg files
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    // Modify the existing file loader rule to handle only *.svg?url
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // Only apply this rule to *.svg?url
      },
      // Use @svgr/webpack for all other *.svg imports (React components)
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // Exclude *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    );

    return config;
  },
};

export default nextConfig;

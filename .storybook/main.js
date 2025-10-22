/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Add TypeScript support
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    });
    
    // Override CSS processing to use simple CSS loader
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().includes('css')) {
        return {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        };
      }
      return rule;
    });
    
    config.resolve.extensions.push('.ts', '.tsx');
    
    return config;
  },
};
export default config;
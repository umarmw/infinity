const path = require('path');
const { lstatSync, readdirSync } = require('fs');

const basePath = path.resolve(__dirname, '../', 'packages');
const packages = readdirSync(basePath).filter((name) =>
  lstatSync(path.join(basePath, name)).isDirectory(),
);

module.exports = {
  stories: [ 
    '../packages/**/stories/*.stories.tsx'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-contexts/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config, { configType }) => {

    
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('awesome-typescript-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');
    Object.assign(config.resolve.alias, {
      ...packages.reduce(
        (acc, name) => ({
          ...acc,
          [`@infinity-core/${name}`]: path.join(basePath, name, 'src'),
        }),
        {},
      ),
    });

    const scopePluginIndex = config.resolve.plugins.findIndex(
      ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
    );

    config.resolve.plugins.splice(scopePluginIndex, 1);
    

    // Return the altered config
    return config;
  },
};
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import * as path from "path";
import { DefinePlugin, IgnorePlugin } from 'webpack';

const base = '/zigbee2mqtt-docs/';
const pagePatterns = ['**/*.md', '!.vuepress', '!node_modules'];

// Ability to exclude device-page rendering to save time while in dev
if (process.env.EXCLUDE_DEVICES) {
  pagePatterns.push('!devices');
}

export default {
  base,
  title: 'Zigbee2MQTT',
  description: 'Zigbee to MQTT bridge, get rid of your proprietary Zigbee bridges',

  dest: 'dist',
  public: 'public',
  temp: '.temp',
  cache: '.cache',

  pagePatterns,

  head: [
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${ base }/favicon-16x16.png`,
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${ base }/favicon-32x32.png`,
    }],
    ['link', {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: `${ base }/apple-touch-icon.png`,
    }],
    ['link', {
      rel: 'manifest',
      href: `${ base }/site.webmanifest`,
    }],
    ['link', {
      rel: 'mask-icon',
      color: '#ffc135',
      href: `${ base }/safari-pinned-tab.svg`,
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#ffc135',
    }],
    ['meta', {
      name: 'theme-color',
      content: '#ffc135',
    }],
  ],

  themeConfig: {
    repo: 'psi-4ward/zigbee2mqtt.io',
    logo: '/logo.png',
    docsDir: 'docs',
    navbar,
    sidebar,
    sidebarDepth: 2,
    themePlugins: {
      git: false
    }
  },

  bundler: '@vuepress/bundler-webpack',
  bundlerConfig: {
    chainWebpack: (chain) => {
      chain.plugin('define-quasar')
        .use(DefinePlugin, [{
          __QUASAR_VERSION__: `'dev'`,
          __QUASAR_SSR__: false,
          __QUASAR_SSR_SERVER__: false,
          __QUASAR_SSR_CLIENT__: false,
          __QUASAR_SSR_PWA__: false
        }]);
      // Webpack takes way to much resources handling devices images
      chain.plugin('ignore-public-images')
        .use(IgnorePlugin, [{
          resourceRegExp: /public\\images/,
        }]);
      chain.cache({ 'type': 'filesystem' });
    },
  },

  plugins: [
    [
      '@vuepress/register-components',
      {
        components: {
          SupportedDevices: path.resolve(__dirname, 'supported-devices-component/SupportedDevices.vue'),
        },
      },
    ],
  ],
}

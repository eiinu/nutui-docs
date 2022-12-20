import vueConfig from '../docs_vue/config.json';
import vueConfigTaro from '../docs_vue_taro/config.json';
import reactConfig from '../docs_react/config.json';

import { SiteReact, SiteReactTaro, SiteVue, SiteVueTaro, SiteJDB, SiteJDT, SiteJDDKH } from './baseConfig';
import { isJDT, isJDB, isJDDKH } from '@/assets/util';

let config: any = {};

const guide = [
  {
    type: 'Vue',
    icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/221256/40/8490/1929/61d64810Ec6a88d27/99270cce560545d5.png',
    data: [
      {
        name: '1.0',
        link: '/1x/',
        language: ['Vue2'],
        app: 'App 7.0'
      },
      {
        name: '2.x',
        link: '/2x/',
        language: ['Vue2'],
        app: 'App 7.0'
      },
      {
        name: '3.x',
        link: '/',
        language: ['Vue3', 'Taro'],
        app: 'App 10.0'
      },
      {
        name: 'JDL',
        link: '/jdl/',
        language: ['Vue2'],
        app: '物流视觉'
      },
      {
        name: 'JDT',
        link: 'https://nutui.jd.com/jdt/',
        language: ['Vue3', 'Taro'],
        app: '科技视觉'
      }
    ]
  }

  // {
  //   type: 'React',
  //   icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/91454/20/21042/3482/61d64815E5c35af0a/ecf7aded2f5ffc6b.png',
  //   data: [
  //     {
  //       name: '1.x',
  //       link: 'https://nutui.jd.com/react',
  //       language: ['React18'],
  //       app: 'App 10.0'
  //     }
  //   ]
  // }
];

const products = [
  {
    type: 'H5',
    data: [
      {
        name: 'NutUI-React',
        icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/111058/12/30939/2225/639703a1E27d6984e/38cbe27759020dc9.png',
        status: 1,
        statusDesc: '已上线',
        link: 'http://storage.jd.local/nutui/newsite/vue/index.react.html#/zh-CN/guide/intro'
      },
      {
        name: 'NutUI-Vue',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/196475/33/30665/2108/639703a1Ef17ae707/ad59fc912f3681d2.png',
        status: 1,
        statusDesc: '已上线',
        link: 'http://storage.jd.local/nutui/newsite/vue/index.vue.html#/zh-CN/guide/intro'
      },
      {
        name: 'NutUI-Angular',
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/74435/24/19418/2152/639703a1E0883f2c3/1ef702a42b818294.png',
        status: 0,
        statusDesc: '规划中',
        link: ''
      }
    ]
  },
  {
    type: '小程序',
    data: [
      {
        name: '多端小程序',
        icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/169186/5/33010/1762/639703a1E898bcb96/6c372c661c6dddfe.png',
        status: 1,
        statusDesc: '已上线',
        link: 'https://taro-docs.jd.com/docs/nutui'
      },
      {
        name: '京东小程序',
        icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/103951/26/21635/41737/639703a1Eddcccb0d/cab0dc9f249b5596.png',
        status: 1,
        statusDesc: '已上线',
        link: 'https://mp-docs.jd.com/jdmpTechnology/nutui/nutui.html'
      },
      {
        name: '微信小程序',
        icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/168379/20/33440/54623/639703a1E93579691/cee76d1b50865cb9.png',
        status: 2,
        statusDesc: '待上线',
        link: ''
      }
    ]
  },
  {
    type: 'APP',
    data: [
      {
        name: 'React Native',
        icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/111058/12/30939/2225/639703a1E27d6984e/38cbe27759020dc9.png',
        status: 2,
        statusDesc: '待上线',
        link: ''
      },
      {
        name: 'Flutter',
        icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/128292/32/33310/449/639703a1E75accc2b/f672fe7f87ce6d32.png',
        status: 0,
        statusDesc: '规划中',
        link: ''
      }
    ]
  }
];
if ((import.meta as any).env.BASE_URL.includes('react')) {
  config = {
    ...reactConfig,
    ...SiteReact
  };
} else {
  let siteconfig = SiteVue;
  if (isJDT()) siteconfig = SiteJDT;
  if (isJDB()) siteconfig = SiteJDB;
  if (isJDDKH()) siteconfig = SiteJDDKH;

  config = {
    ...vueConfig,
    ...siteconfig
  };
}

export const {
  nav,
  docs,
  version,
  demoUrl,
  homePage,
  versions,
  newHeader,
  header,
  language,
  repository,
  newRepository
} = config;
export { guide, products, SiteVueTaro, SiteReactTaro, vueConfigTaro };

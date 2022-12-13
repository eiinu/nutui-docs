/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';
import Resource from './views/Resource.vue';
import Case from './views/Case.vue';
import Notice from './views/Notice.vue';
// import Main from './views/Main.vue';
import Guide from './views/Guide.vue';
import Component from './views/Component.vue';
import config from '@/config/env';
const pagesRouter: Array<RouteRecordRaw> = [];
const pagesEnRouter: Array<RouteRecordRaw> = [];
const guideRouters: Array<RouteRecordRaw> = [];
const guideEnRouters: Array<RouteRecordRaw> = [];

/** vite */

const modulesPage = (import.meta as any).glob('./docs/**/doc.md');
for (const path in modulesPage) {
  let name = (/docs\/(.*)\/doc.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: `/zh-CN/component/${name}`,
    component: modulesPage[path],
    name: `zh-CN/component/${name}`
  });
}

const modulesEnPage = (import.meta as any).glob('./docs/**/doc.en-US.md');
// console.log(modulesEnPage);
for (const path in modulesEnPage) {
  let name = (/docs\/(.*)\/doc\.en-US\.md/.exec(path) as any[])[1];
  pagesEnRouter.push({
    path: `/en-US/component/${name}`,
    component: modulesEnPage[path],
    name: `en-US/component/${name}`
  });
}

const modulesPageTaro = (import.meta as any).glob('/src/docs_react/docs/**/*.taro.md');
for (const path in modulesPageTaro) {
  let name = (/docs_react\/docs\/(.*)\/doc.taro.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: `/zh-CN/component/${name}-taro`,
    component: modulesPageTaro[path],
    name: `zh-CN/component/${name}-taro`
  });
  pagesEnRouter.push({
    path: `/en-US/component/${name}-taro`,
    component: modulesPageTaro[path],
    name: `en-US/component/${name}-taro`
  });
}

/** vite */
const modulesDocs = (import.meta as any).glob('/src/docs/react/*.md');
for (const path in modulesDocs) {
  let name = (/docs\/react\/(.*).md/.exec(path) as any[])[1];
  guideRouters.push({
    path: `/zh-CN/guide/${name}`,
    component: modulesDocs[path],
    name
  });
}

const modulesEnDocs = (import.meta as any).glob('/src/docs/react/*.en-US.md');
for (const path in modulesEnDocs) {
  let name = (/docs\/react\/(.*).en-US.md/.exec(path) as any[])[1];
  guideEnRouters.push({
    path: `/en-US/guide/${name}`,
    component: modulesEnDocs[path],
    name: `en-${name}`
  });
}

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: '/',
  //   component: Main
  //   // children: pagesRouter
  // },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/zh-CN/guide',
        name: 'guide',
        component: Guide,
        children: guideRouters
      },
      {
        path: '/en-US/guide',
        name: 'enGuide',
        component: Guide,
        children: guideEnRouters
      },
      {
        path: '/zh-CN/component',
        name: 'component',
        component: Component,
        children: pagesRouter
      },
      {
        path: '/en-US/component',
        name: 'enComponent',
        component: Component,
        children: pagesEnRouter
      }
    ]
  },
  {
    path: '/zh-CN/case',
    name: '/zh-CN/case',
    component: Case
  },
  {
    path: '/zh-CN/resource',
    name: '/zh-CN/resource',
    component: Resource
  },
  {
    path: '/zh-CN/notice',
    name: '/zh-CN/notice',
    component: Notice
  }
];
routes.push({
  name: 'notFound',
  path: '/:path(.*)+',
  redirect: {
    name: '/'
  }
});
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const id = to.hash.split('#')[1];
      const ele = document.getElementById(id);
      setTimeout(() => {
        ele && ele.scrollIntoView(true);
      });
    }
  }
});
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
  try {
    setTimeout(() => {
      new Image().src = `${config.baseUrl}/openapi/point?p=${encodeURIComponent(JSON.stringify(location))}`;
    }, 500);
  } catch (error) {}
});
export default router;

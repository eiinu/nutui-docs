<h2 style="margin-top: 0;">贡献指南</h2>

您可根据《[NutUI 邀您共建，Contributor 您好](https://jelly.jd.com/article/6320528b92d94a0068685525)》中的共建方向为 NutUI 社区做出贡献。

&nbsp;

本篇指南会指导你如何为 NutUI 贡献一份自己的力量，请在您要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南，保证贡献是符合规范并且能帮助到社区。

## 行为准则

为保证良好的网络环境，营造舒适的开发氛围，希望所有的贡献者都能遵守这份[行为准则](https://www.contributor-covenant.org/zh-cn/version/2/1/code_of_conduct/)，也请花时间阅读一遍全文明确哪些行为是禁止的，哪些行为是可行的。

## 分支管理

目前 github 上长期维护 2 个版本，如果您在使用小程序或者 vue3 版本的组件，有新增的组件功能或者 bug 可反馈到 next 分支；如果您在使用 vue2 版本的组件库，可以将 bug 反馈到 v2 分支。

&nbsp;

官网会同步更新 [NutUI 的发布周期](https://github.com/jdf2e/nutui/releases)，同时每天都会有开发者 review github 中提交的代码。发版周期是每 2 周/次，通常会提前合并新的代码或功能，发布正式包；期间如遇紧急需求，可基于指定分支发布 beta 版本。

## Bugs

我们使用 [issue-helper](https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui) 来做 bug 追踪。希望大家通过我们提供的 issue 小助手来提交反馈，并尽可能提供一切开发信息，因为信息越全面，开发响应速度越快，您发现的 bug 会被快速解决。

&nbsp;

提交 bug 之前，请先确保搜索过已有的 [issue](https://github.com/jdf2e/nutui/issues) 和阅读了我们的[常见问题](https://nutui.jd.com/#/zh-CN/notice)。

## 功能新增

如果您对现有的组件功能或者 API 有更好的想法，我们同样推荐你使用我们提供的 [issue-helper](https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui) 提交一个添加新功能的 issue。

&nbsp;

如果你希望协助开发新功能新组件，可扫描[二维码](https://img13.360buyimg.com/imagetools/s300x300_jfs/t1/187308/9/29678/349561/634fa983E93012590/a641089fdfed5911.png)加入我们的社区共建群。

## 参与贡献

如果你对 github 的 PR 流程还不熟悉，可以阅读下面这 2 篇文章来学习：

&nbsp;

[NutUI 贡献指南](https://github.com/jdf2e/nutui/issues/1671)

[github 仓库代码同步](https://github.com/jdf2e/nutui/discussions/687)

## Pull Request 规范

1. 每个 PR 只解决单个问题或者新增单个功能

2. 当新增组件或修改原有组件时，同步更改对应的单元测试和文档，保证代码的稳定

3. commit message 请遵循 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 规范

4. PR 信息中最好包括修改了哪个组件，解决了哪个问题，并关联 github 上对应的 issue 链接

## Pull Request 流程

1、fork 主仓库，并同步主仓库的最新代码

&nbsp;

2、将项目下载到本地，在项目根目录下运行 npm install，并在本地能正常访问
```
git clone https://github.com/{github username}/nutui.git
npm install
npm run dev
```

3、创建一个新的分支或在对应分支上进行开发
```
git checkout -b username/xxxx
git checkout {现有分支名称}
```

4、如开发涉及新组件或组件的新特性，需要完善组件的中英文文档、组件的单元测试，同时要使用 [nutui-demo](https://github.com/jdf2e/nutui-demo) 对组件测试使用。

&nbsp;

5、保证编译功能正常使用
```
npm run test
npm run build
npm run build:taro:vue
```

6、开发完成后提交到仓库的对应分支上，PR 会在 Review 通过后被合并到主仓库，然后等待 NutUI 发布新版本（每2周一次）。

&nbsp;

### 知识分享

1. 项目使用案例

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分享 NutUI 的[使用案例](https://nutui.jd.com/#/zh-CN/case)，我们会在官网进行推荐展示，准备项目的名称、项目入口（二维码\链接）、logo、示例图、投放平台（H5\小程序\APP等）、nutui 版本等信息，以邮箱的形式提交到 **nutui@jd.com**。

&nbsp;

2. 文章视频投稿

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分享你的经验（教程、文章、视频等），可以给 **nutui@jd.com** 投稿。在审核通过后，收藏到[官网资源](https://nutui.jd.com/#/zh-CN/resource)中，将你的知识与思想传递给 NutUI 的小伙伴们。

&nbsp;

3. 共建分享征集

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以 NutUI 为基础，设计或开发新的工具，比如适配 uni-app，开发提效的插件等。有兴趣欢迎加入我们的[社区开发群](https://img13.360buyimg.com/imagetools/s300x300_jfs/t1/187308/9/29678/349561/634fa983E93012590/a641089fdfed5911.png)交流讨论。

&nbsp;
### Credits

感谢以下所有给 NutUI 贡献过代码的开发者。

![Contributor](https://img13.360buyimg.com/imagetools/jfs/t1/68601/29/17440/255516/633163bfE0be772f7/ba99dadb2ad8796d.png)

&nbsp;
### 参考资源

<div class="contributors-banner">
  <a href="https://jelly.jd.com/article/6320528b92d94a0068685525" target="_blank" class="banner-link" title="阅读文章《NutUI 邀您共建，Contributor 您好》">
    <img src="https://img12.360buyimg.com/imagetools/jfs/t1/105718/32/26551/383686/63295d35E2e7e81c9/2ffda8dc43f5f6df.png" />
    <img src="https://img11.360buyimg.com/imagetools/jfs/t1/214187/15/23020/937/636325b1Eff766486/acf80e171268d157.png" class="img-icon img-icon-book"/>
    <div class="shadow"></div>
  </a>

  <a href="https://www.bilibili.com/video/BV1aB4y1j7WV/?spm_id_from=333.999.0.0&vd_source=8a2b2ff0852d3ad502bd22dc02338db2" target="_blank" class="banner-link" title="观看视频《如何成为 NutUI Contributors 指南》">
    <img src="https://img12.360buyimg.com/imagetools/jfs/t1/179323/33/30196/1023760/63626b48E69c33169/1431c2c97a300fde.png" />
    <img src="https://img14.360buyimg.com/imagetools/jfs/t1/177437/23/30575/157147/63631bc7E095fb50b/2a4381fa426627b6.png" class="img-icon"/>
    <div class="shadow"></div>
  </a>
</div>
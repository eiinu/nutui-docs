<h2 style="margin-top: 0;">Contribution Guidelines</h2>

You can contribute to the NutUI community according to the co-construction direction in 《[NutUI invites you to build, Hello Contributor](https://jelly.jd.com/article/6320528b92d94a0068685525)》.

&nbsp;

This guide will guide you on how to contribute to NutUI. Please take a few minutes to read this guide before you file an issue or pull request to ensure that the contribution is compliant and can help the community.

## code of conduct

In order to ensure a good network environment and create a comfortable development atmosphere, I hope all contributors can abide by this [Code of Conduct](https://www.contributor-covenant.org/zh-cn/version/2/1/code_of_conduct/), and please take the time to read the full text to clarify what is prohibited and what is allowed.

## Branch management

At present, 2 versions are maintained on github for a long time. If you are using the applet or the vue3 version of the component, you can report new component functions or bugs to the next branch; if you are using the vue2 version of the component library, you can report bugs to v2 branch.

&nbsp;

The official website will update [NutUI's release cycle](https://github.com/jdf2e/nutui/releases) synchronously, and developers will review the code submitted in github every day. The release cycle is every 2 weeks. Usually, new codes or functions are merged in advance, and the official package is released; if there is an urgent need during this period, the beta version can be released based on the designated branch.

## Bugs

We use [issue-helper](https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui) for bug tracking. We hope that you can submit feedback through the issue assistant provided by us, and provide all development information as much as possible, because the more comprehensive the information, the faster the development response, and the bugs you find will be quickly resolved.

&nbsp;

Before filing a bug, please make sure to search for existing [issues](https://github.com/jdf2e/nutui/issues) and read our [FAQs](https://nutui.jd.com/#/zh-CN/notice).

## new features

If you have better ideas for existing component functions or APIs, we also recommend you to use our [issue-helper](https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui) file an issue adding new features.

&nbsp;

If you want to help develop new functions and new components, you can scan the [QR code](https://img13.360buyimg.com/imagetools/s300x300_jfs/t1/187308/9/29678/349561/634fa983E93012590/a641089fdfed5911.png) to join us community co-construction group.

## Participate in contribution

If you are not familiar with the PR process of github, you can read the following two articles to learn:

&nbsp;

[NutUI Contribution Guidelines](https://github.com/jdf2e/nutui/issues/1671)

[github repository code synchronization](https://github.com/jdf2e/nutui/discussions/687)

## Pull Request Specification

1. Each PR addresses a single issue or adds a single feature

2. When adding components or modifying existing components, synchronously change the corresponding unit tests and documents to ensure the stability of the code

3. Please follow the [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) specification for the commit message

4. The PR information should include which component has been modified, which problem has been solved, and associated the corresponding issue link on github

## Pull Request Process

1. Fork the main repository and synchronize the latest code of the main repository

&nbsp;

2. Download the project locally, run npm install in the project root directory, and access it locally
````
git clone https://github.com/{github username}/nutui.git
npm install
npm run dev
````

3. Create a new branch or develop on the corresponding branch
````
git checkout -b username/xxxx
git checkout {existing branch name}
````

4. If the development involves new components or new features of components, it is necessary to improve the Chinese and English documentation of the components, the unit testing of the components, and use [nutui-demo](https://github.com/jdf2e/nutui-demo) to Component testing is used.

&nbsp;

5. Ensure that the compilation function is used normally
````
npm run test
npm run build
npm run build:taro:vue
````

6. After the development is completed, submit it to the corresponding branch of the warehouse. After the review is passed, the PR will be merged into the main warehouse, and then wait for NutUI to release a new version (once every 2 weeks).

&nbsp;

### Knowledge sharing

1. Project Use Cases

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share the [use case](https://nutui.jd.com/#/zh-CN/case) of NutUI, we will recommend it on the official website, prepare the name of the project, Project entry (QR code\link), logo, sample image, delivery platform (H5\mini program\APP, etc.), nutui version and other information should be submitted to **nutui@jd.com** by email.

&nbsp;

2. Article video submission

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share your experiences (tutorials, articles, videos, etc.) by contributing to **nutui@jd.com**. After passing the review, collect it in the [official website resource](https://nutui.jd.com/#/zh-CN/resource), and pass your knowledge and ideas to NutUI friends.

&nbsp;

3. Co-construction and sharing

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based on NutUI, design or develop new tools, such as adapting to uni-app, developing plug-ins to improve efficiency, etc. If you are interested, welcome to join our [Community Development Group](https://img13.360buyimg.com/imagetools/s300x300_jfs/t1/187308/9/29678/349561/634fa983E93012590/a641089fdfed5911.png) to communicate and discuss.

&nbsp;
### Credits

Thanks to all the developers below who have contributed code to NutUI.

![Contributor](https://img13.360buyimg.com/imagetools/jfs/t1/68601/29/17440/255516/633163bfE0be772f7/ba99dadb2ad8796d.png)

&nbsp;
### References

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
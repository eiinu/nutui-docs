<template>
  <new-header></new-header>

  <div class="doc-content" :class="themeName()">
    <div :class="docContentIndex" :style="{ height: getHeight }">
      <!-- vue -->
      <div class="doc-content-banner-box">
        <div :class="bannerName()">
          <div class="content-title"> NutUI</div>
          <div class="content-smile"> </div>
          <div class="content-subTitle">京东风格的轻量级移动端组件库</div>
          <!-- <div class="content-desc">支持 React、Vue、Taro</div>
          <div class="content-desc">适配 H5、小程序、APP</div> -->
        </div>

        <!-- <div class="doc-content-banner-image">
          <img src="@/assets/images/banner1.png" class="banner-image" />
        </div> -->
        <div
          :class="[
            'doc-content-banner-img',
            bannerList.length > 0 && !backgroundLoading ? 'doc-content-banner-imgcover' : ''
          ]"
        >
          <div class="skew-box">
            <div class="doc-content-banner-swiper">
              <div class="swiper-container swiper-container-banner" v-if="bannerList.length > 0 && !backgroundLoading">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(arr, index) in bannerList" :key="index">
                    <div class="swiper-slide-item"><img :src="arr.cover_image" /></div>
                  </div>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination swiper-pagination-banner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-content-product">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">基础组件</h4>
      </div>
      <div class="product-list">
        <div class="product-item">
          <div class="item-top-infor">
            <span class="title">H5</span>
            <img src="@/assets/images/product-icon-h5.png" alt="" />
          </div>
          <div class="item-resource">
            <div class="resource-item">
              <div class="resource-infor" @click="goMainSite('react')">
                <img src="@/assets/images/React.png" class="small-icon" />
                <span class="infor-name">NutUI-React</span>
                <!-- <span class="infor-version">1.2.2</span> -->
              </div>
            </div>
            <div class="resource-item">
              <div class="resource-infor" @click="goMainSite('vue')">
                <img src="@/assets/images/Vue.png" class="small-icon" />
                <span class="infor-name">NutUI-Vue</span>
                <!-- <span class="infor-version">1.2.2</span> -->
                <!-- <div class="infor-child">
                  <span class="infor-child-name" @click.stop="toDetail('cat')">NutUI-Cat</span>
                  <span class="infor-child-name" @click.stop="toDetail('bingo')">NutUI-Bingo</span>
                </div> -->
              </div>
              <!-- <div class="infor-child">
                <span class="infor-child-name">NutUI-Cat</span>
                <span class="infor-child-name">NutUI-Bingo</span>
              </div> -->
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="item-top-infor">
            <span class="title">小程序</span>
            <img src="@/assets/images/product-weapp1.png" alt="" />
          </div>
          <div class="item-resource">
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/Taro.png" class="small-icon" />
                <span class="infor-name">多端小程序</span>
                <!-- <span class="infor-version">1.2.2</span> -->
                <div class="infor-child">
                  <span class="infor-child-name" @click="goMainSite('react-taro')">NutUI-React</span>
                  <span class="infor-child-name" @click="goMainSite('vue-taro')">NutUI-Vue</span>
                </div>
              </div>
            </div>
            <div class="resource-item">
              <div class="resource-infor" @click="toJointDetails('https://github.com/jwaterwater/uni-nutui')">
                <img src="@/assets/images/Uniapp.png" class="small-icon" />
                <span class="infor-name">uniapp</span>
                <span class="infor-version infor-coding">社区维护</span>
              </div>
            </div>
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/Jdweapp.png" class="small-icon" />
                <span class="infor-name">京东小程序</span>
                <span class="infor-version infor-disabled">规划中</span>
              </div>
            </div>
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/Wechat.png" class="small-icon" />
                <span class="infor-name">微信小程序</span>
                <span class="infor-version infor-disabled">规划中</span>
              </div>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="item-top-infor">
            <span class="title">APP</span>
            <img src="@/assets/images/product-weapp2.png" alt="" />
          </div>
          <div class="item-resource">
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/React.png" class="small-icon" />
                <span class="infor-name">React Native</span>
                <span class="infor-version infor-coding">开发中</span>
              </div>
            </div>
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/Flutter.png" class="small-icon" />
                <span class="infor-name">Flutter</span>
                <span class="infor-version infor-disabled">规划中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-content-business">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">业务组件</h4>
      </div>
      <div class="doc-content-catmarketing-content">
        <div class="doc-content-module module-0">
          <div class="img-box" @click="toJointDetails('https://nutui-docs-test1.local-pf.jd.com/cat/index.html#/')">
            <img style="width: 86%; padding: 10px 0" src="@/assets/images/cat-back.png" alt="" />
          </div>
          <div class="content-box">
            <h2 class="title"
              >NutUI-Cat
              <img
                title="支持 vue 开发"
                src="https://img12.360buyimg.com/imagetools/jfs/t1/196475/33/30665/2108/639703a1Ef17ae707/ad59fc912f3681d2.png"
                class="tech-type-icon"
            /></h2>
            <div class="desc">NutUI 大促域业务组件</div>
          </div>
          <div class="bottom-box">
            <div
              class="bottom-box-item"
              @click="toJointDetails('https://nutui-docs-test1.local-pf.jd.com/cat/index.html#/intro')"
            >
              <img
                src="https://img12.360buyimg.com/imagetools/jfs/t1/128915/29/34233/564/63a42dc9E3763ec6d/00c5954a6c033c25.png"
              />
            </div>
            <div
              class="bottom-box-item"
              @click="toJointDetails('https://nutui-docs-test1.local-pf.jd.com/cat/index.html#/intro')"
            >
              <img
                src="https://img10.360buyimg.com/imagetools/jfs/t1/132787/21/33206/926/63a42dcaE93c2b7ce/17037b8539a0e504.png"
              />
            </div>
            <div class="bottom-box-item" @click="toJointDetails('https://github.com/jdf2e/nutui-cat')">
              <img
                src="https://img11.360buyimg.com/imagetools/jfs/t1/146163/4/34533/1045/63a42dcaE0e7aeb1f/3d0344c8f91f3c5b.png"
              />
            </div>
          </div>
        </div>
        <div class="doc-content-module module-1">
          <div class="img-box" @click="toJointDetails('https://nutui-docs-test1.local-pf.jd.com/bingo/index.html#/')">
            <img
              src="https://img10.360buyimg.com/imagetools/jfs/t1/186436/12/31398/508034/63a400afE49cb73f6/3f0b87fd535de041.png"
              alt=""
            />
          </div>
          <div class="content-box">
            <h2 class="title"
              >NutUI-Bingo
              <img
                title="支持 vue 开发"
                src="https://img12.360buyimg.com/imagetools/jfs/t1/196475/33/30665/2108/639703a1Ef17ae707/ad59fc912f3681d2.png"
                class="tech-type-icon"
              />
              <img
                title="支持 taro 开发"
                src="https://img13.360buyimg.com/imagetools/jfs/t1/169186/5/33010/1762/639703a1E898bcb96/6c372c661c6dddfe.png"
                class="tech-type-icon"
              />
            </h2>
            <div class="desc">NutUI 抽奖域业务组件</div>
          </div>
          <div class="bottom-box">
            <div
              class="bottom-box-item"
              @click="toJointDetails('https://nutui-docs-test1.local-pf.jd.com/bingo/index.html#/')"
            >
              <img
                src="https://img12.360buyimg.com/imagetools/jfs/t1/128915/29/34233/564/63a42dc9E3763ec6d/00c5954a6c033c25.png"
              />
            </div>
            <div
              class="bottom-box-item"
              @click="toJointDetails('https://nutui-docs-test1.local-pf.jd.com/bingo/index.html#/intro')"
            >
              <img
                src="https://img10.360buyimg.com/imagetools/jfs/t1/132787/21/33206/926/63a42dcaE93c2b7ce/17037b8539a0e504.png"
              />
            </div>
            <div class="bottom-box-item" @click="toJointDetails('https://github.com/jdf2e/nutui-bingo')">
              <img
                src="https://img11.360buyimg.com/imagetools/jfs/t1/146163/4/34533/1045/63a42dcaE0e7aeb1f/3d0344c8f91f3c5b.png"
              />
            </div>
          </div>
        </div>
        <div class="doc-content-module module-2">
          <div class="img-box">
            <div class="image">
              <div class="compontent compontent1">
                <img
                  style="padding-top: 38px; background: #f7f8fa"
                  src="https://img11.360buyimg.com/imagetools/jfs/t1/89252/34/26149/31724/63720f7bEdf836ee7/081567be55685c13.jpg"
                />
              </div>
              <div class="compontent compontent2">
                <img
                  src="https://img11.360buyimg.com/imagetools/jfs/t1/160202/28/32428/57971/63720c98E9f8dbdca/ce0398a6dbfd6030.jpg"
                />
              </div>
              <div class="compontent compontent3">
                <img
                  src="https://img11.360buyimg.com/imagetools/jfs/t1/213899/11/23434/46535/63720c97Ee096161a/6ccc5f1a9057d84e.jpg"
                />
              </div>
              <section class="stage stage1">
                <figure class="ball"><span class="shadow"></span></figure>
              </section>
              <section class="stage stage2">
                <figure class="ball"><span class="shadow"></span></figure>
              </section>
              <section class="stage stage3">
                <figure class="ball"><span class="shadow"></span></figure>
              </section>
              <section class="stage stage4">
                <figure class="ball"><span class="shadow"></span></figure>
              </section>
              <section class="stage stage5">
                <figure class="ball"><span class="shadow"></span></figure>
              </section>
            </div>
          </div>
          <div class="content-box">
            <h2 class="title">NutUI-Biz</h2>
            <div class="desc">NutUI 商城域业务组件</div>
          </div>
          <div class="bottom-box">
            <div class="bottom-box-item">
              <a href="" target="_blank">
                <img
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/128915/29/34233/564/63a42dc9E3763ec6d/00c5954a6c033c25.png"
                />
              </a>
            </div>
            <div class="bottom-box-item">
              <a href="" target="_blank">
                <img
                  src="https://img10.360buyimg.com/imagetools/jfs/t1/132787/21/33206/926/63a42dcaE93c2b7ce/17037b8539a0e504.png"
                />
              </a>
            </div>
            <div class="bottom-box-item">
              <a href="" target="_blank">
                <img
                  src="https://img11.360buyimg.com/imagetools/jfs/t1/146163/4/34533/1045/63a42dcaE0e7aeb1f/3d0344c8f91f3c5b.png"
                />
              </a>
            </div>
          </div>
          <!-- <div class="marketing-content-right-godetail" @click="goAwait">敬请期待</div> -->
          <div class="marketing-content-mask"> 正在建设中，敬请期待~ </div>
        </div>
      </div>
    </div>

    <div class="doc-content-cases" v-if="homePage.cases.show && casesImages.length">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">应用案例</h4>
        <a class="sub-more" :href="homePage.cases.moreRouter" v-if="homePage.cases.moreRouter">更多</a>
      </div>

      <div class="doc-content-desc"
        >京东集团（京东零售、京东科技、京东物流、京东工业、京东健康）累计应用项目 400+，外部累计应用项目 1,500+</div
      >

      <div class="doc-content-cases-content">
        <div class="doc-content-cases-content__main">
          <div class="doc-content-cases-content__main-lefticon" @click="onLeft"></div>
          <div class="doc-content-cases-content__main-iconinfo">
            <h4>{{ currentCaseItem.product_name }}</h4>
            <!-- <p>{{ currentCaseItem.product_info }}</p> -->
            <img :src="currentCaseItem.logo" />
          </div>
          <div
            class="doc-content-cases-content__main-iphone"
            :style="{
              backgroundImage: 'url(' + currentCaseItem.cover_image + ')'
            }"
          >
            <img src="@/assets/images/iphone-cases.png" alt="" srcset="" />
          </div>
          <div class="doc-content-cases-content__main-righticon" @click="onRight"></div>
        </div>
        <div class="doc-content-cases-content__list">
          <div class="swiper-wrapper" :class="[themeNameValue() == 'black' ? 'noShadow' : '']">
            <div class="swiper-slide" v-for="(item, index) in casesImages" :key="index">
              <img :src="item.cover_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-content-qrcode" v-if="qrcodeList.length != 0">
      <div class="doc-content-qrcode-content">
        <div class="doc-content-qrcode-content-lefticon" @click="onQRLeft"></div>
        <div class="doc-content-qrcode-content-righticon" @click="onQRRight"></div>
      </div>
      <div class="doc-content-qrcode-contain">
        <div class="doc-content-qrcode-contain-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(arr, index) in qrcodeList" :key="index">
              <div class="item" v-for="(item, index) in arr" :key="index + 'item'">
                <div class="qrcode-img">
                  <img :src="item.qr_code" />
                </div>
                <div class="product_name" v-hover>{{ item.product_name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-content-more" v-if="homePage.article.show">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">资源共享</h4>
        <a class="sub-more" :href="homePage.article.moreRouter" v-if="homePage.article.moreRouter">更多</a>
      </div>
      <!-- <ul class="more-list">
        <li class="more-item" v-for="item in articleList.slice(0, 4)" :key="item.id" @click="toLink(item.id)">
          <img :src="item.cover_image" />
          <p class="more-title" v-hover>{{ item.title }}</p>
        </li>
      </ul> -->
      <div class="doc-content-banner-img doc-content-banner-imgcover">
        <div class="skew-box">
          <template v-for="(item, index) of articleProxy">
            <div class="doc-content-banner-swiper" :key="item.name" v-if="item.article.length > 0">
              <div :class="['swiper-container', 'swiper-container-' + index]">
                <span class="swiper-tag">{{ item.tag }}</span>

                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(childItem, idx) in item.article" :key="idx">
                    <div class="swiper-slide-item" @click="toJointDetails(childItem.link)">
                      <img :src="childItem.cover_image" class="slide-item-bg" />
                      <div class="slide-item-infor">
                        <!-- <span class="item-title-name">{{ item.tag }}</span> -->
                        <span class="item-title-subtitle" :title="childItem.title">{{ childItem.title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div :class="['swiper-pagination', 'swiper-pagination-' + index]"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="doc-content-jointly">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">开源共建</h4>
      </div>
      <div class="jointly-box">
        <div class="jointly-box-left">
          <div class="left-title">
            <h1>开源迭代，持续创新</h1>
            <span class="sub-title">汇集 100+ 贡献者的代码力量，欢迎成为 NutUI Contributor ~</span>
          </div>
          <div class="left-contributor">
            <!-- <div class="contributor-item" v-for="item of 80" :key="item">
              <div class="headPortrait-img-panel avatarRotation" v-if="item == 1"> </div>
              <img src="@/assets/images/logo-red.png" class="contributor-head" />
            </div> -->
            <div class="contributor-item" @click="toJointDetails('https://github.com/jdf2e/nutui/graphs/contributors')">
              <img :src="contributorImg" v-if="contributorImgShow" />
              <img
                src="https://img10.360buyimg.com/imagetools/jfs/t1/165584/36/30765/292664/6396d3bbEf987376d/3dfbb9cfc532dbe5.png"
                v-else
              />
            </div>
          </div>
        </div>
        <div class="jointly-box-right">
          <div class="jointly-direction">
            <div class="direction-center">
              <div
                v-for="(item, index) of jointDirection"
                :class="['direction-item', 'direction-item-' + index]"
                :key="item"
                @click="toJointDetails(item.url)"
                title="点击参与共建"
              >
                <span class="word">{{ item.key }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue';
import NewHeader from './NewHeader.vue';
import Footer from '@/components/Footer.vue';
import { RefData } from '@/assets/util/ref';
import { ApiService } from '@/service/ApiService';
import { loadImageEnd } from '@/assets/util/loadImageEnd';
// import Swiper from 'swiper/swiper-bundle.min.js';
import Swiper, { EffectFade, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import { useRouter } from 'vue-router';
import { language, homePage } from '@/config/index';
import { arrayGroup } from '@/assets/util/index';
import { useLocale } from '@/assets/util/locale';
Swiper.use([EffectFade, Autoplay, Pagination]);

export default defineComponent({
  name: 'main',
  components: {
    [NewHeader.name]: NewHeader,
    [Footer.name]: Footer
  },
  setup() {
    const router = useRouter();
    const { currentLang } = useLocale();
    const data: any = reactive({
      // theme: 'white',
      articleProxy: [
        {
          name: '原理',
          tag: '源码揭秘',
          article: [],
          swiperEle: null
        },
        {
          name: '实践',
          tag: '项目开发',
          article: [],
          swiperEle: null
        },
        {
          name: '发展',
          tag: '成长历程',
          article: [],
          swiperEle: null
        },
        {
          name: '学习',
          tag: '视频教程',
          article: [],
          swiperEle: null
        }
      ],
      principleArticle: [],
      practiceArticle: [],
      studyArticle: [],
      videoArticle: [],
      casesImages: [],
      currentCaseItem: {},
      currentCaseIndex: 0,
      localTheme: localStorage.getItem('nutui-theme-color'),
      showAwait: false,
      qrcodeList: [],
      bannerList: [],
      contributorImgShow: false,
      contributorImg: '',
      backgroundLoading: true,
      jointDirection: [
        { key: '合作共建', url: 'https://jelly.jd.com/article/6320528b92d94a0068685525' },
        { key: 'Issue 类', url: 'https://github.com/jdf2e/nutui/issues' },
        // { key: 'Bug 类', url: 'https://github.com/jdf2e/nutui/issues' },
        { key: '新增组件', url: 'https://github.com/jdf2e/nutui/issues/1671' },
        { key: '国际化', url: 'https://nutui.jd.com/#/zh-CN/guide/international' },
        {
          key: 'UI 定制',
          url: 'https://www.bilibili.com/video/BV1wa411n74q/?spm_id_from=333.337.search-card.all.click'
        },
        {
          key: '平台类适配',
          url: 'https://www.bilibili.com/video/BV1aB4y1j7WV/?spm_id_from=333.999.0.0&vd_source=8a2b2ff0852d3ad502bd22dc02338db2'
        },
        {
          key: '跨端扩展',
          url: 'https://www.bilibili.com/video/BV1aB4y1j7WV/?spm_id_from=333.999.0.0&vd_source=8a2b2ff0852d3ad502bd22dc02338db2'
        }
        // { key: '文章', url: 'https://juejin.cn/user/3949101495616919' }
        // { key: '视频', url: 'https://space.bilibili.com/549965366' }
      ]
    });
    let caseSwiper: any = null;
    let qrcodeSwiper: any = null;

    onMounted(() => {
      initHeadimg();
      if (homePage.article.show) {
        getArticle();
        getVideo();
      }
      if (homePage.cases.show) getCasesImages();
      if (homePage.qrcodeShow) getQRCode();
      initBannerSwiper();
    });

    // 首屏轮播图
    let bannerSwiper: any = null;
    const initBannerSwiper = () => {
      const apiService = new ApiService();
      const imgArr = [
        'https://img10.360buyimg.com/imagetools/jfs/t1/29781/3/19183/142442/6332a685Eb8ac2a85/9880cdaea3a1ca14.png'
      ];
      loadImageEnd(imgArr, () => {
        // console.log('加载完');
        data.backgroundLoading = false;
        if (!bannerSwiper) renderBannerSwiper();
      });
      apiService.getBannerList().then((res) => {
        if (res?.state == 0 && res?.value.data.length != 0) {
          data.bannerList = [].concat(res.value.data.arrays);
          // console.log(data.backgroundLoading);
          if (!data.backgroundLoading) renderBannerSwiper();
        }
      });
    };
    const renderBannerSwiper = () => {
      // console.log('更新 banner');
      const self = data.bannerList;
      setTimeout(() => {
        bannerSwiper = new Swiper('.doc-content-banner-swiper .swiper-container-banner', {
          direction: 'horizontal',
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination-banner',
            clickable: true
          },
          on: {
            click: (event) => {
              const banner = self[event.realIndex];
              if (banner && banner.link) window.open(banner.link);
            }
          }
        });
        console.log(bannerSwiper.pagination.bullets);

        for (let i = 0; i < bannerSwiper.pagination.bullets.length; i++) {
          bannerSwiper.pagination.bullets[i].onmouseover = function () {
            console.log(2);
            this.click();
          };
        }
      }, 500);
    };

    const initHeadimg = () => {
      const imgArr = ['https://opencollective.com/nutui/contributors.svg?width=890&button=false'];
      loadImageEnd(imgArr, (res) => {
        data.contributorImg = imgArr[0];
        data.contributorImgShow = true;
      });
    };
    const renderSwiperArticle = (idx: number) => {
      setTimeout(() => {
        data.articleProxy[idx]['swiperEle'] = new Swiper('.doc-content-banner-swiper .swiper-container-' + idx, {
          direction: 'horizontal',
          autoplay: false,
          // autoplay: {
          //   delay: 5000,
          //   disableOnInteraction: false
          // },
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination-' + idx,
            clickable: true
          }
        });

        /*鼠标移入停止轮播，鼠标离开 继续轮播*/
        // var container: any = document.getElementsByClassName('swiper-container-' + idx)[0];
        // container.onmouseenter = function () {
        //   data.articleProxy[idx]['swiperEle'].autoplay.stop();
        // };
        // container.onmouseleave = function () {
        //   data.articleProxy[idx]['swiperEle'].autoplay.start();
        // };
        //鼠标滑过pagination控制swiper切换
        for (let i = 0; i < data.articleProxy[idx]['swiperEle'].pagination.bullets.length; i++) {
          data.articleProxy[idx]['swiperEle'].pagination.bullets[i].onmouseover = function () {
            this.click();
          };
        }
      }, 500);
    };
    //获取案例二维码
    const getQRCode = () => {
      const apiService = new ApiService();
      apiService.getQRCode().then((res) => {
        if (res?.state == 0 && res?.value.data.length != 0) {
          data.qrcodeList = arrayGroup(res.value.data, 6);
          setTimeout(() => {
            qrcodeSwiper = new Swiper('.doc-content-qrcode-contain-swiper', {
              direction: 'horizontal',
              slidesPerView: 'auto',
              loop: true
            });
          }, 500);
        }
      });
    };
    const onQRLeft = () => {
      qrcodeSwiper.slidePrev();
    };
    const onQRRight = () => {
      qrcodeSwiper.slideNext();
    };
    // 文章列表
    const getArticle = () => {
      const apiService = new ApiService();
      apiService.getArticle().then((res) => {
        if (res?.state == 0) {
          let dataAry = res.value.data.arrays.filter((item) => item.type == 1);
          dataAry.forEach((item, index) => {
            let iList = [3, 1, 0, 2];
            let type = parseInt(item.category);
            // let varData = ['practiceArticle', 'principleArticle', 'studyArticle'];
            let key = iList[type];
            if (data.articleProxy[key]['article']?.length != 4) {
              data.articleProxy[key]['article']?.push(item);
            }
          });
          data.articleProxy.forEach((m, x) => {
            setTimeout(() => {
              if (x < 3) {
                renderSwiperArticle(x);
              }
            }, 200 * x);
          });
        }
      });
    };
    // 视频列表接口
    const getVideo = () => {
      const apiService = new ApiService();
      apiService
        .getVideo({
          nutui_version: 0
        })
        .then((res) => {
          if (res?.state == 0) {
            data.articleProxy[3]['article'] = res.value.data.arrays.splice(0, 4);
            renderSwiperArticle(3);
          }
        });
    };

    // 获取案例
    const getCasesImages = () => {
      const apiService = new ApiService();

      apiService.getCases(1).then((res) => {
        if (res?.state == 0) {
          data.casesImages = (res.value.data.arrays as any[]).map((item) => {
            if (item.cover_image?.length) {
              item.cover_image = item.cover_image.split(',')[0];
            }
            return item;
          });
          if (data.casesImages?.length) {
            data.currentCaseItem = data.casesImages[data.currentCaseIndex];
          }

          setTimeout(() => {
            caseSwiper = new Swiper('.doc-content-cases-content__list', {
              direction: 'horizontal',
              slidesPerView: 'auto',
              initialSlide: 1,
              loop: true,
              on: {
                slideChange: function () {
                  let realIndex = (this as any).realIndex;
                  data.currentCaseIndex = realIndex === 0 ? data.casesImages.length - 1 : realIndex - 1;
                  setTimeout(() => {
                    data.currentCaseItem = data.casesImages[data.currentCaseIndex];
                  }, 230);
                }
              }
            });
          }, 500);
        }
      });
    };
    const goBingoDetails = () => {
      window.open('/bingo');
    };
    const goAwait = () => {
      data.showAwait = true;
    };
    const hideAwait = () => {
      data.showAwait = false;
    };
    const onLeft = () => {
      caseSwiper.slidePrev();
    };

    const onRight = () => {
      caseSwiper.slideNext();
    };

    const themeName = computed(() => {
      return function () {
        return `doc-content-${RefData.getInstance().themeColor.value}`;
      };
    });
    const bannerName = computed(() => {
      return function () {
        return language === 'vue' ? 'content-left' : 'content-left react-content-left';
      };
    });
    const themeNameValue = computed(() => {
      return function () {
        return RefData.getInstance().themeColor.value;
      };
    });
    const docContentIndex = computed(() => {
      let docContentIndexClass = `doc-content-index ${
        language.toLowerCase() === 'react' ? 'doc-content-index-react' : ''
      } ${location.hash.includes('jagile') ? 'jagile' : ''}`;

      return docContentIndexClass;
    });
    const toLink = (id: number) => {
      window.open('//jelly.jd.com/article/' + id);
    };
    function toIntro() {
      if (language == 'react') {
        router.push({ name: 'intro-react' });
      } else {
        router.push({ path: `/${currentLang.value}/guide/intro` });
      }
    }
    const toDetail = (f: string) => {
      window.open(
        f == 'cat'
          ? 'https://nutui-docs-test1.local-pf.jd.com/cat/index.html#/'
          : 'https://nutui-docs-test1.local-pf.jd.com/bingo/index.html#/'
      );
    };
    const goMainSite = (f: string) => {
      switch (f) {
        case 'vue':
          window.open('https://nutui-docs-test1.local-pf.jd.com/4x/index.html#/zh-CN/guide/intro');
          break;
        case 'react':
          window.open('https://nutui-docs-test1.local-pf.jd.com/react/index.html#/zh-CN/guide/intro-react');
          break;
        case 'vue-taro':
          window.open('https://nutui-docs-test1.local-pf.jd.com/vue_taro/index.html#/zh-CN/guide/intro');
          break;
        case 'react-taro':
          window.open('https://nutui-docs-test1.local-pf.jd.com/react_taro/index.html#/zh-CN/guide/intro-react');
          break;
      }
    };
    const toJointDetails = (url: string) => {
      window.open(url);
    };

    const goBannerList = (banner: any) => {
      if (banner && banner.link) window.open(banner.link);
    };

    const getHeight = computed(() => {
      const _h = document.body.clientHeight;
      const height = _h - 64;
      return height + 'px';
    });
    return {
      toIntro,
      ...toRefs(data),
      themeName,
      themeNameValue,
      docContentIndex,
      toLink,
      onLeft,
      language,
      homePage,
      onRight,
      toDetail,
      goBingoDetails,
      goAwait,
      hideAwait,
      bannerName,
      onQRLeft,
      onQRRight,
      goBannerList,
      toJointDetails,
      goMainSite,
      getHeight
    };
  }
});
</script>
<style lang="scss" scoped>
// 定义外部光环旋转动画
@keyframes externalHalo {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
// 定义内部头像旋转动画
@keyframes internalAvatar {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
<style lang="scss" scoped>
@mixin breathe-circle($color, $size, $time) {
  width: $size;
  height: $size;
  background-color: $color;
  border-radius: 50%;
  &::before {
    content: '';
    display: block;
    width: $size;
    height: $size;
    border-radius: 50%;
    opacity: 0.7;
    background-color: $color;
    animation: breathe $time infinite cubic-bezier(0, 0, 0.49, 1.02);
  }
}
@keyframes breathe {
  0% {
    transform: scale(1);
  }
  50%,
  75% {
    transform: scale(3);
  }
  78%,
  100% {
    opacity: 0;
  }
}
// @keyframes maskedAnimation {
//   0% {
//     background-position: 0 0;
//   }
//   100% {
//     background-position: -100% 0;
//   }
// }
::selection {
  background: $doc-default-color;
  color: #fff;
}
#doc {
  background: #070505;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-top: $doc-header-height;
}
.skew-box {
  display: flex;
  justify-content: space-around;
}
.doc-content-banner-swiper {
  position: relative;
  flex: 1;
  cursor: pointer;
  .swiper-tag {
    position: absolute;
    background: linear-gradient(90deg, #00b2bd, #2ceb85);
    -moz-border-radius: 0 24px 24px 0;
    border-radius: 0 24px 24px 0;
    left: 0;
    top: 10px;
    z-index: 1000;
    font-size: 12px;
    padding: 3px 20px;
  }
  .swiper-container {
    width: 335px;
    height: 180px;
    box-shadow: 0 0 2px 2px rgb(0 0 0 / 10%);
    border-radius: 10px;
    background: linear-gradient(353deg, #cbdcff 0%, #ffffff 100%);
    // background: #f5f9fc;
  }
  .swiper-slide-item {
    position: relative;
    width: 335px;
    height: 180px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid rgba(84, 84, 84, 0.3);
    .slide-item-bg {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .slide-item-infor {
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 100%;
    padding: 10px 15px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .item-title-name {
    display: block;
    width: 90px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 600;
    color: #fff;
    margin: 0 auto;
    // background-image: linear-gradient(315deg, #6772ff 0, #00f9e5 100%);
    background-image: linear-gradient(45deg, #2215f1 0, #9e10db 100%);
  }
  .item-title-subtitle {
    display: block;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    font-size: 14px;
  }
  &:nth-child(2) {
    margin: 0 10px;
  }
  &:nth-child(3) {
    margin-right: 10px;
  }
}
.doc-content {
  background: #070505;
  padding: 5px 0;
  &-hd {
    height: 52px;
    line-height: 52px;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
    .sub-more {
      position: absolute;
      right: 0;
      font-size: 14px;
      color: $theme-red;
    }
  }

  &-desc {
    transform: translateY(-35px);
    font-size: 14px;
    text-align: center;
    color: #f2f2f2;
  }
  &-title {
    display: inline-block;
    font-size: 26px;
  }

  .doc-content-product {
    width: 1366px;
    margin: 20px auto 0;
    .product-list {
      width: 100%;
      display: flex;
      .product-item {
        flex: 1;
        border-radius: 6px;
        // height: 200px;
        background-color: rgba(94, 94, 94, 0.3);
        position: relative;
        padding-bottom: 10px;
        transition: transform 0.24s cubic-bezier(0.38, 0, 0.24, 1), box-shadow 0.24s linear;
        &:nth-child(2) {
          margin: 0 30px;
        }
      }
      .item-top-infor {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        .title {
          font-size: 32px;
          font-weight: 800;
        }
        img {
          width: 120px;
          height: 120px;
        }
      }
    }
    .resource-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: rgba(88, 88, 88, 0.8);
      }
      .infor-child {
        .infor-child-name {
          padding: 3px 10px;
          margin-right: 15px;
          font-size: 12px;
          color: #00b2bd;
          border: 1px solid #00b2bd;
          border-radius: 40px;
          &:hover {
            color: #2ceb85;
            border-color: #2ceb85;
            background-color: rgba(0, 178, 189, 0.5);
            cursor: pointer;
          }
        }
      }
    }
    .resource-infor {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      .infor-name {
        margin: 0 20px;
      }
      .small-icon {
        width: 30px;
        height: 30px;
      }
      .infor-version {
        padding: 1px 8px;
        font-size: 12px;
        background: linear-gradient(119deg, #00b2bd 11%, #2ceb85 55%);
      }
      .infor-disabled {
        background: gray;
        cursor: not-allowed;
      }
      .infor-goline {
        background: linear-gradient(315deg, #6772ff 0, #00f9e5 100%);
      }
      .infor-coding {
        background: linear-gradient(90deg, #00b2bd, #2ceb85);
      }
    }
  }
  &-business {
    width: 1366px;
    margin: 90px auto 0;
    .doc-content-catmarketing-content {
      display: flex;
      justify-content: space-between;
    }
    .marketing-content-mask {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.52);
      border-radius: 4px 4px 4px 0 4px;
      text-align: center;
      line-height: 270px;
      font-size: 30px;
      color: #ffffff;
      cursor: not-allowed;
    }
    .doc-content-module {
      position: relative;
      flex: 1;
      background: #fff;
      box-shadow: 0 1px 1px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 5%);
      border-radius: 8px;
      overflow: hidden;
      &:nth-child(2) {
        margin: 0 30px;
      }
      &:hover {
        transform: translateY(0);
        box-shadow: 0 20px 80px rgb(0 0 0 / 10%), 0 5px 20px rgb(0 0 0 / 5%);
      }
      .img-box {
        position: relative;
        margin: 0;
        height: 228px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          display: block;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
      }
      .image {
        position: relative;
        height: 100%;
        .compontent {
          position: absolute;
          width: 168px;
          height: 163px;
          border-radius: 15px;
          box-shadow: 0 2px 5px rgb(0 0 0 / 50%);
          img {
            border-radius: 15px;
          }
          &.compontent1 {
            top: 55px;
            left: 128px;
            transform: rotateZ(10deg);
          }
          &.compontent2 {
            height: 175px;
            top: 15px;
            left: 80px;
            transform: rotateZ(8deg);
          }
          &.compontent3 {
            width: 143px;
            height: 175px;
            top: 16px;
            left: 58px;
            transform: rotateZ(-10deg);
          }
        }
      }
      &.module-0 {
        .img-box {
          background: linear-gradient(
            130.16deg,
            #f9bccb 0%,
            #f7eff7 26.6663024476%,
            #f1f0f6 66.6930725524%,
            #b4e4e4 100%
          );
        }
      }
      &.module-1 {
        .img-box {
          background: linear-gradient(
            130.16deg,
            #dbd2ff 0%,
            #f7eff7 26.6663024476%,
            #f1f0f6 66.6930725524%,
            #ffeccb 100%
          );
        }
      }
      &.module-2 {
        .img-box {
          background: linear-gradient(
            130.16deg,
            #add9ff 0%,
            #d7e1ff 26.6663024476%,
            #f1f0f6 66.6930725524%,
            #73a2ff 100%
          );
        }
      }
      .content-box {
        position: relative;
        padding: 20px 32px;
        background: #fff;
        overflow: hidden;
        h2 {
          margin-bottom: 12px;
          font-size: 24px;
          // font-family: MD Primer Bold, Rubik, Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
          font-family: Rubik, sans-serif;
          color: #434343;
        }
        .tech-type-icon {
          width: 20px;
          height: 20px;
          vertical-align: middle;
          margin-left: 5px;
        }
        .desc {
          position: relative;
          color: #434343;
          font-family: MD Primer Bold, Rubik, Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 12px;
        }
      }
      .bottom-box {
        display: flex;
        flex: 0 1 auto;
        border-top: 1px solid #f2f2f2;
        padding: 5px 0;
        .bottom-box-item {
          display: flex;
          flex: 0 1 auto;
          width: 33.33%;
          height: 47px;
          font-size: 15px;
          color: #807f7f;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          img {
            width: 24px;
            height: 24px;
          }
          &:hover {
            cursor: pointer;
            background-color: #efefef;
          }
        }
      }
      .stage {
        position: absolute;
        width: 60px;
        height: 60px;
        display: inline-block;
        perspective: 1200px;
        perspective-origin: 50% 50%;
      }
      .ball {
        display: inline-block;
        width: 100%;
        height: 100%;
        margin: 0;
        border-radius: 50%;
        position: relative;
        background: radial-gradient(circle at 50% 120%, #81e8f6, #76deef 10%, #055194 80%, #062745 100%);
        background: radial-gradient(circle at 50% 120%, #f9f5f8, #dcb1c6 10%, #faf5f8 80%, #ead8e4 100%);
        &:before {
          content: '';
          position: absolute;
          top: 1%;
          left: 5%;
          width: 90%;
          height: 90%;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%);
          -webkit-filter: blur(5px);
          z-index: 2;
        }
        .shadow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.1) 40%,
            rgba(0, 0, 0, 0) 50%
          );
          transform: rotateX(90deg) translateZ(-150px);
          z-index: -1;
        }
      }
      .stage1 {
        top: -30px;
        right: 26px;
        width: 70px;
        height: 70px;
      }
      .stage2 {
        bottom: 20px;
        right: 2px;
        width: 60px;
        height: 60px;
      }
      .stage3 {
        bottom: 33px;
        left: -4px;
        width: 20px;
        height: 20px;
      }
      .stage4 {
        top: -10px;
        left: -5px;
        width: 70px;
        height: 70px;
      }
      .stage5 {
        bottom: -48px;
        left: 67px;
        width: 70px;
        height: 70px;
        &:before {
          background: radial-gradient(circle at 50% 0px, rgba(255, 255, 255, 0), #ffffff 58%);
        }
        .ball {
          background: radial-gradient(circle at 50% 120%, #ead8e4, #faf5f8 10%, #dcb1c6 70%, #f9f5f8 100%);
        }
      }
    }
    .demo2 {
      .image .compontent {
        position: absolute;
        width: 194px;
        height: 182px;
        border-radius: 15px;
        -webkit-box-shadow: 0 2px 5px rgb(0 0 0 / 50%);
        box-shadow: 0 2px 5px rgb(0 0 0 / 50%);
      }
      .image .compontent.compontent1 {
        width: 181px;
        height: 180px;
        top: 55px;
        left: 156px;
        transform: rotateZ(10deg);
      }
      .image .compontent.compontent2 {
        width: 239px;
        height: 172px;
        top: 15px;
        left: 35px;
        transform: rotateZ(8deg);
      }
      .image .compontent.compontent3 {
        width: 183px;
        height: 239px;
        top: 9px;
        left: -1px;
        -webkit-transform: rotateZ(-10deg);
        transform: rotateZ(-10deg);
      }
    }
  }
  &-cases {
    width: 1366px;
    overflow: hidden;
    margin: 90px auto;
    &-content {
      height: 463px;
      display: flex;
      align-items: center;
      &__main {
        padding: 0 22px;
        width: 590px;
        height: 463px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #959fb1;
        border-radius: 29px 20px 20px 29px;
        &-iphone {
          width: 210px;
          height: 420px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 188px 397px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        &-lefticon {
          margin-right: 20px;
          width: 36px;
          height: 36px;
          background-image: url('@/assets/images/right-arrow.png');
          transform: rotate(180deg);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          &:hover {
            transform: rotate(0);
            background-image: url('@/assets/images/left-arrow.png');
          }
        }
        &-righticon {
          margin-left: 20px;
          width: 36px;
          height: 36px;
          background-image: url('@/assets/images/right-arrow.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          z-index: 1;
          &:hover {
            transform: rotate(180deg);
            background-image: url('@/assets/images/left-arrow.png');
          }
        }
        &-iconinfo {
          width: 190px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          > h4 {
            max-width: 100%;
            line-height: 42px;
            font-size: 22px;
            margin-bottom: 40px;
            color: rgba(255, 255, 255, 1);
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          > p {
            font-size: 18px;
            margin-bottom: 20px;
            color: rgba(255, 255, 255, 1);
          }
          > img {
            width: 114px;
            height: 114px;
            overflow: hidden;
            border-radius: 29px;
          }
        }
      }
      &__list {
        flex: 1;
        overflow: hidden;
        margin-left: 30px;
        .swiper-wrapper {
          display: flex;
          transform: translate3d(0, 0, 0);
          transition: all 0.6s ease;
          .swiper-slide {
            width: 180px;
            height: 390px;
            flex-shrink: 0;
            margin-right: 20px;
            border-radius: 4px;
            overflow: hidden;
            > img {
              width: 100%;
              height: 100%;
            }
          }
          &.noShadow {
            .swiper-slide {
              box-shadow: none !important;
            }
          }
        }
      }
    }
  }
  &-more {
    width: 1366px;
    margin: 0 auto 80px;
    .more-list {
      display: flex;
      flex-wrap: wrap;
    }
    .more-item {
      width: 280px;
      margin-right: 26px;
      cursor: pointer;
      &:nth-child(4n) {
        margin-right: 0;
      }
      img {
        width: 280px;
        height: 170px;
        margin-bottom: 20px;
        border-radius: 6px;
        box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
      }
    }
    .more-title {
      width: 280px;
      height: 44px;
      line-height: 22px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  &-qrcode {
    width: 1366px;
    overflow: hidden;
    margin: 0 auto 90px;
    position: relative;
    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      transform: translateY(-75%);
      z-index: 2;
      &-lefticon {
        margin-right: 20px;
        width: 36px;
        height: 36px;
        background-image: url('@/assets/images/right-arrow.png');
        transform: rotate(180deg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        &:hover {
          transform: rotate(0);
          background-image: url('@/assets/images/left-arrow.png');
        }
      }
      &-righticon {
        margin-left: 20px;
        width: 36px;
        height: 36px;
        background-image: url('@/assets/images/right-arrow.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        z-index: 1;
        &:hover {
          transform: rotate(180deg);
          background-image: url('@/assets/images/left-arrow.png');
        }
      }
    }
    &-contain {
      margin: 0 auto;
      .swiper-slide {
        padding: 0 80px;
        display: flex;
        .item {
          width: 206px;
          text-align: center;
          .qrcode-img {
            width: 130px;
            height: 130px;
            overflow: hidden;
            border-radius: 20px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            box-shadow: 1px 0px 5px #fff;
            > img {
              height: 120px;
              width: 120px;
            }
          }
          .product_name {
            font-size: 14px;
            margin-top: 20px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
  &-jointly {
    width: 1366px;
    overflow: hidden;
    margin: 0 auto 90px;
    .jointly-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      .jointly-box-left {
        flex: 2;
      }
    }
    .jointly-box-left {
      .sub-title {
        display: block;
        margin: 30px 0;
      }
      .left-contributor {
        overflow: hidden;
        max-width: 900px;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        // 头像旋转动画
        // .avatarRotation {
        //   animation: internalAvatar 3s linear;
        //   // 动画无限循环
        //   animation-iteration-count: infinite;
        // }
        // /*头像显示层*/
        // .headPortrait-img-panel {
        //   position: absolute;
        //   width: 101%;
        //   height: 101%;
        //   border: solid 5px #00c9fd;
        //   border-top-color: #00f9e5;
        //   border-bottom-color: #00f9e5;
        //   border-radius: 50%;
        //   z-index: 100;
        //   // background: url('@/assets/images/circle.png') no-repeat;
        //   // background-size: 100% 100%;
        // }
        // .contributor-head {
        //   position: absolute;
        //   width: 100%;
        //   height: 100%;
        //   border-radius: 50%;
        // }
      }
    }
    .jointly-box-right {
      flex: 1;
      width: 100%;
      height: 400px;
      // .card-list {
      //   overflow: hidden;
      //   display: flex;
      //   justify-content: space-around;
      // }
      // .card-item {
      //   width: 190px;
      //   height: 280px;
      //   margin: 0 0 0 30px;
      //   border-radius: 10px;
      //   background: #fff;
      //   overflow: hidden;
      //   box-shadow: 0 0 5px rgb(0 0 0 / 10%);
      //   background: url(@/assets/images/card-bg.png) no-repeat;
      //   background-size: 100% 100%;
      //   .item-icon {
      //     margin: 20px auto;
      //     width: 180px;
      //     height: 130px;
      //   }
      //   .card-title {
      //     color: #f2f2f2;
      //     text-align: center;
      //   }
      //   .desc {
      //     display: block;
      //     width: 80%;
      //     text-align: center;
      //     margin: 10px auto 0;
      //     color: #f2f2f2;
      //     font-size: 12px;
      //   }
      // }
      .direction-center {
        position: relative;
        width: 100%;
        height: 400px;
      }

      .direction-item {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        &:hover {
          cursor: pointer;
          transition: all linear 0.2s;
          transform: scale(1.2);
        }
        .word {
          display: block;
          font-size: 12px;
          width: 50px;
          white-space: nowrap;
          position: absolute;
          text-align: center;
          bottom: -30px;
          left: 22%;
        }
      }
      .direction-item-0 {
        left: 50%;
        top: 50%;
        @include breathe-circle(#d83e4a, 80px, 2s);
      }
      .direction-item-1 {
        left: 170px;
        top: 70px;
        @include breathe-circle(#ffa853, 40px, 3.5s);
      }
      .direction-item-2 {
        left: 300px;
        top: 80px;
        @include breathe-circle(#3ed0f7, 40px, 2.5s);
      }
      .direction-item-3 {
        left: 370px;
        top: 200px;
        @include breathe-circle(#eb7271, 40px, 3s);
      }
      .direction-item-4 {
        left: 80px;
        top: 210px;
        @include breathe-circle(#bbe9aa, 30px, 2.5s);
      }
      .direction-item-5 {
        left: 120px;
        top: 320px;
        @include breathe-circle(#27c2a3, 40px, 3s);
      }
      .direction-item-6 {
        left: 330px;
        top: 360px;
        @include breathe-circle(#ff999c, 20px, 4s);
      }
      .direction-item-7 {
        left: 140px;
        top: 330px;
        @include breathe-circle(#fed791, 20px, 4s);
      }
      .direction-item-8 {
        left: 160px;
        top: 240px;
        @include breathe-circle(#70a78c, 20px, 5.5s);
      }
      .direction-item-9 {
        left: 410px;
        top: 260px;
        @include breathe-circle(#b65db7, 20px, 5.5s);
      }
    }
  }
}
.doc-content-index {
  // width: 1366px;
  // margin: 9% 0 9% 14%;
  position: relative;
  background-color: #070505;
  min-height: 800px;

  &.doc-content-index-react {
    display: flex;

    .react-content-left {
      flex: 1;
      padding: 13% 0 0 8.8%;
      background: url(https://storage.360buyimg.com/imgtools/7cd27ba3eb-686f76e0-6ec9-11ec-8cd6-b10a2c66b169.png)
        no-repeat;
      background-size: 1050px 540px;
      background-position-x: right;
      background-position-y: 116px;
    }
  }

  .content-left {
    position: relative;
    z-index: 999;
    top: -10%;
    width: 420px;
    min-width: 420px;
    .content-title {
      font-size: 64px;
      color: rgba(255, 255, 255, 1);
      font-weight: 800;
    }
    .sub-content-title {
      font-weight: 800;
    }
    .content-smile {
      width: 70px;
      height: 30px;
      background: url(https://storage.360buyimg.com/imgtools/09516173b9-9b32b9d0-3864-11eb-9a56-0104487ad2b0.png)
        no-repeat;
      background-size: contain;
    }
    .content-subTitle {
      margin: 20px 0;
      font-size: 26px;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 2px;
    }
    // .content-desc {
    //   margin-bottom: 10px;
    //   font-size: 22px;
    //   color: rgb(194, 194, 194);
    //   background-image: -webkit-linear-gradient(left, #147b96, #e6d205 25%, #147b96 50%, #e6d205 75%, #147b96);
    //   // background-image: -webkit-linear-gradient(left, #ff232c, #e6d205 25%, #147b96 50%, #e6d205 75%, #ff232c);
    //   -webkit-text-fill-color: transparent;
    //   -webkit-background-clip: text;
    //   -webkit-background-size: 200% 100%;
    //   -webkit-animation: maskedAnimation 4s infinite linear;
    // }
  }

  .doc-content-banner-box {
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 1390px;
    height: 100%;
    margin: 0 auto;

    // margin-top: 30px;
    // padding: 8% 0 0 10%;

    .doc-content-banner-image {
      img {
        width: 675px;
        height: 450px;
      }
    }
    .doc-content-banner-img {
      position: relative;
      // top: -14%;
      // right: -20%;
      width: 1050px;
      // transform: translateX(60px);
      // flex: 1;
      height: 540px;
      background: url(https://storage.360buyimg.com/imgtools/a423faab46-8b142e80-8bb1-11eb-853a-6fded8704e77.png)
        no-repeat;
      background-size: 1050px 540px;
      background-position-x: right;
      &.doc-content-banner-imgcover {
        background: url(https://img10.360buyimg.com/imagetools/jfs/t1/29781/3/19183/142442/6332a685Eb8ac2a85/9880cdaea3a1ca14.png)
          no-repeat;
        background-size: 1050px 540px;
        background-position-x: right;
      }
      .skew-box {
        position: absolute;
        right: 88px;
        top: 95px;
        transform: skew(60deg, -27deg);
        cursor: pointer;
      }
      .doc-content-banner-swiper {
        .swiper-container {
          width: 330px;
          height: 150px;
          box-shadow: 0 0 2px 2px rgb(0 0 0 / 10%);
          border-radius: 10px;
          background: #fff;
        }
        .swiper-slide-item {
          width: 330px;
          height: 150px;
          overflow: hidden;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.doc-content-black {
  background: $theme-black-content-bg;
  color: white;
  .doc-content-title {
    width: 206px;
    height: 50px;
    background: url(@/assets/images/title-bg.png) no-repeat;
    background-size: cover;
    color: white;
  }
  .doc-content-features {
    .features-title {
      color: white;
    }
    .features-desc {
      color: #a5a5a5;
    }
  }
  .doc-content-more {
    .more-title {
      color: #fff;
      text-align: center;
    }
  }
  .doc-content-cases-content__main {
    background: #474753;
  }
  .doc-content-more {
    .more-item img {
      box-shadow: none;
    }
  }
}
.doc-content-white,
.doc-content-red {
  background: white;
  color: white;
  .doc-content-title {
    color: $theme-white-footer-word3;
  }
  .doc-content-features {
    .features-title {
      color: $theme-white-word;
    }
    .features-desc {
      color: $theme-white-index-desc;
    }
  }
  .doc-content-more {
    .more-title {
      color: $theme-white-footer-word3;
    }
  }
  .doc-content-qrcode {
    .swiper-slide {
      .item {
        .product_name {
          color: $theme-white-footer-word3;
        }
      }
    }
  }
  .taro-content {
    display: flex;
    .taro-left {
      margin-left: 50px;
      width: 453px;
      height: 386px;
      background: url('@/assets/images/img-taro-left-white.png') no-repeat;
      background-size: cover;
    }
    .taro-right {
      margin-left: 145px;
      .right-img {
        width: 436px;
        height: 213px;
        background: url('@/assets/images/img-taro-right-white.png') no-repeat;
        background-size: cover;
        margin-bottom: 58px;
      }
      .taro-desc {
        color: #1a1a1a;
        font-weight: lighter;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
.a-l {
  text-align: center;
}
</style>

<style lang="scss">
html,
body {
  background-color: #070505;
}
.doc-footer {
  .doc-footer-list {
    &:last-of-type {
      display: none;
    }
  }
}

.swiper-pagination {
  position: absolute;
  width: 100%;
  left: 130px;
  bottom: 13px !important;
  z-index: 9999;
  text-align: center;
}
.swiper-pagination-bullet {
  display: inline-block;
  margin-right: 10px;
  border-radius: 2px;
  background: $white !important;
  transition: all 0.3s ease-in-out;
  width: 8px !important;
  height: 3px;
  opacity: 0.5;
  box-shadow: 0 0 4px 1px rgb(0 0 0 / 10%);
  &.swiper-pagination-bullet-active {
    width: 12px !important;
    opacity: 1;
  }
}
::v-deep(.swiper-pagination-banner) {
  .swiper-pagination {
    left: 0;
  }
}
</style>

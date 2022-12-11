<template>
  <new-header></new-header>

  <div class="doc-content" :class="themeName()">
    <div :class="docContentIndex">
      <!-- vue -->
      <div class="doc-content-banner-box">
        <div :class="bannerName()">
          <div class="content-title"> NutUI</div>
          <div class="content-smile"> </div>
          <div class="content-subTitle">京东风格的轻量级移动端 UI 库</div>
          <div class="content-desc">支持 React、Vue、Taro</div>
          <div class="content-desc">适配 H5、小程序、APP</div>
        </div>

        <div class="doc-content-banner-image">
          <img src="@/assets/images/banner1.png" class="banner-image" />
        </div>
      </div>
    </div>

    <div class="doc-content-product">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">产品能力</h4>
      </div>
      <div class="product-list">
        <div class="product-item">
          <div class="item-top-infor">
            <span class="title">H5</span>
            <img src="@/assets/images/product-icon-h5.png" alt="" />
          </div>
          <div class="item-resource">
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/React.png" class="small-icon" />
                <span class="infor-name">NutUI-React</span>
                <!-- <span class="infor-version">1.2.2</span> -->
              </div>
            </div>
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/Vue.png" class="small-icon" />
                <span class="infor-name">NutUI-Vue</span>
                <!-- <span class="infor-version">1.2.2</span> -->
                <div class="infor-child">
                  <span class="infor-child-name">NutUI-Cat</span>
                  <span class="infor-child-name">NutUI-Bingo</span>
                </div>
              </div>
              <!-- <div class="infor-child">
                <span class="infor-child-name">NutUI-Cat</span>
                <span class="infor-child-name">NutUI-Bingo</span>
              </div> -->
            </div>

            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/Angular.png" class="small-icon" />
                <span class="infor-name">NutUI-Angular</span>
                <span class="infor-version infor-disabled">规划中</span>
              </div>
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
                  <span class="infor-child-name">NutUI-React</span>
                  <span class="infor-child-name">NutUI-Vue</span>
                </div>
              </div>
            </div>
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/Jdweapp.png" class="small-icon" />
                <span class="infor-name">京东小程序</span>
                <span class="infor-version infor-goline">待上线</span>
              </div>
            </div>
            <div class="resource-item">
              <div class="resource-infor">
                <img src="@/assets/images/Wechat.png" class="small-icon" />
                <span class="infor-name">微信小程序</span>
                <span class="infor-version infor-goline">待上线</span>
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
                <span class="infor-version infor-goline">待上线</span>
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

    <div class="doc-content-cases" v-if="homePage.cases.show && casesImages.length">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">应用案例</h4>
        <a class="sub-more" :href="homePage.cases.moreRouter" v-if="homePage.cases.moreRouter">More</a>
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
        <a class="sub-more" :href="homePage.article.moreRouter" v-if="homePage.article.moreRouter">More</a>
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
                <span class="swiper-tag">{{ item.name }}</span>

                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(childItem, idx) in item.article" :key="idx">
                    <div class="swiper-slide-item">
                      <div class="slide-item-infor">
                        <span class="item-title-name">{{ item.tag }}</span>
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
            <span class="sub-title">NutUI 保持开源精神，采用 MIT 协议，诚邀大家共建 NutUI 开源生态。</span>
          </div>
          <div class="left-contributor">
            <!-- <div class="contributor-item" v-for="item of 80" :key="item">
              <div class="headPortrait-img-panel avatarRotation" v-if="item == 1"> </div>
              <img src="@/assets/images/logo-red.png" class="contributor-head" />
            </div> -->
            <div class="contributor-item">
              <img src="https://opencollective.com/nutui/contributors.svg?width=890&button=false" />
            </div>
          </div>
        </div>
        <div class="jointly-box-right">
          <div class="card-list">
            <div class="card-item">
              <img src="@/assets/images/card-icon-1.png" class="item-icon" />
              <h3 class="card-title">多技术栈</h3>
              <span class="desc">支持业界流行的 React、Vue、小程序技术栈</span>
            </div>
            <div class="card-item">
              <img src="@/assets/images/card-icon-3.png" class="item-icon" />
              <h3 class="card-title">多端适配</h3>
              <span class="desc">适配 Taro，实现一码多端功能，保持设计统一性</span>
            </div>
            <div class="card-item">
              <img src="@/assets/images/card-icon-2.png" class="item-icon" />
              <h3 class="card-title">资源丰富</h3>
              <span class="desc">80+ 组件，70+ 文章视频，优秀的设计资源和官方主题</span>
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
import NewHeader from '@/components/NewHeader.vue';
import Footer from '@/components/Footer.vue';
import { RefData } from '@/assets/util/ref';
import { ApiService } from '@/service/ApiService';
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
      articleList: [],
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
      backgroundLoading: true
    });
    let caseSwiper: any = null;
    let qrcodeSwiper: any = null;

    onMounted(() => {
      if (homePage.article.show) {
        getArticle();
        getVideo();
      }
      if (homePage.cases.show) getCasesImages();
      if (homePage.qrcodeShow) getQRCode();
    });
    const renderBannerSwiper = (idx) => {
      // console.log('更新 banner');
      const self = data.bannerList;
      setTimeout(() => {
        data.articleProxy[idx]['swiperEle'] = new Swiper('.doc-content-banner-swiper .swiper-container-' + idx, {
          direction: 'horizontal',
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination-' + idx,
            clickable: true
          },
          on: {
            click: (event) => {
              const banner = self[event.realIndex];
              if (banner && banner.link) window.open(banner.link);
            }
          }
        });

        /*鼠标移入停止轮播，鼠标离开 继续轮播*/
        var container: any = document.getElementsByClassName('swiper-container-' + idx)[0];
        container.onmouseenter = function () {
          data.articleProxy[idx]['swiperEle'].autoplay.stop();
        };
        container.onmouseleave = function () {
          data.articleProxy[idx]['swiperEle'].autoplay.start();
        };
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
      // console.log(123467467467467467);
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
          let dataAry = res.value.data.arrays;
          data.articleList = dataAry;
          dataAry.forEach((item, index) => {
            let type = parseInt(item.category);
            // let varData = ['practiceArticle', 'principleArticle', 'studyArticle'];
            let key = type - 1;
            if (data.articleProxy[key]['article']?.length != 5) {
              data.articleProxy[key]['article']?.push(item);
            }
          });
          data.articleProxy.forEach((m, x) => {
            setTimeout(() => {
              renderBannerSwiper(x);
            }, 500 * x);
          });
        }
      });
    };
    // 视频列表接
    const getVideo = () => {
      const apiService = new ApiService();
      apiService
        .getVideo({
          nutui_version: 0
        })
        .then((res) => {
          if (res?.state == 0) {
            data.articleProxy[3]['article'] = res.value.data.arrays.splice(0, 5);
            renderBannerSwiper(4);
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
    const toDetail = () => {
      window.open('/cat');
    };

    const goBannerList = (banner: any) => {
      if (banner && banner.link) window.open(banner.link);
    };
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
      goBannerList
    };
  }
});
</script>
<style lang="scss" scoped>
// @keyframes fadeInLeft {
//   from {
//     opacity: 0;
//     transform: translate3d(-100%, 0, 0);
//   }
//   to {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }
// }
// .doc-content-index {
//   /* background: url(https://storage.360buyimg.com/imgtools/a423faab46-8b142e80-8bb1-11eb-853a-6fded8704e77.png)
//       no-repeat;
//     background-size: 1050px 540px;
//     background-position-x: right;
//     background-position-y: 110px; */
//   .content-left {
//     .content-title {
//       animation: fadeInLeft 1s both;
//     }
//     .content-smile {
//       animation: fadeInLeft 1s both 0.5s;
//     }
//     .content-subTitle {
//       animation: fadeInLeft 1s both 0.5s;
//     }
//     .content-button {
//       iframe {
//         animation: fadeInLeft 1s both 1.2s;
//       }
//       .leftButton {
//         animation: fadeInLeft 1s both 1.2s;
//       }
//       .rightButton {
//         animation: fadeInLeft 1s both 1.2s;
//       }
//     }
//   }
// }

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
.skew-box {
  display: flex;
  justify-content: space-around;
}
.doc-content-banner-swiper {
  position: relative;
  flex: 1;
  .swiper-tag {
    position: absolute;
    background: linear-gradient(90deg, #00b2bd, #2ceb85);
    -moz-border-radius: 0 24px 24px 0;
    border-radius: 0 24px 24px 0;
    left: 0;
    top: 20px;
    z-index: 1000;
    font-size: 12px;
    padding: 3px 20px;
  }
  .swiper-container {
    width: 380px;
    height: 180px;
    box-shadow: 0 0 2px 2px rgb(0 0 0 / 10%);
    border-radius: 10px;
    background: linear-gradient(353deg, #cbdcff 0%, #ffffff 100%);
    // background: #f5f9fc;
  }
  .swiper-slide-item {
    position: relative;
    width: 380px;
    height: 180px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img {
    width: 100%;
    height: 100%;
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
    width: 230px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 20px;
    color: #0000c2;
    font-size: 16px;
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
    margin: 0 auto;
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
      // .jointly-box-left,
      // .jointly-box-right {
      //   flex: 1;
      // }
    }
    .jointly-box-left {
      .sub-title {
        display: block;
        margin: 30px 0;
      }
      .left-contributor {
        overflow: hidden;
        // .contributor-item {
        //   position: relative;
        //   float: left;
        //   width: 40px;
        //   height: 40px;
        //   margin: 0 8px 8px 0;
        // }
        .contributor-item {
          width: 660px;
          height: 330px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        // 头像旋转动画
        .avatarRotation {
          animation: internalAvatar 3s linear;
          // 动画无限循环
          animation-iteration-count: infinite;
        }
        /*头像显示层*/
        .headPortrait-img-panel {
          position: absolute;
          width: 101%;
          height: 101%;
          border: solid 5px #00c9fd;
          border-top-color: #00f9e5;
          border-bottom-color: #00f9e5;
          border-radius: 50%;
          z-index: 100;
          // background: url('@/assets/images/circle.png') no-repeat;
          // background-size: 100% 100%;
        }
        .contributor-head {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .jointly-box-right {
      .card-list {
        overflow: hidden;
        display: flex;
        justify-content: space-around;
      }
      .card-item {
        width: 190px;
        height: 280px;
        margin: 0 0 0 30px;
        border-radius: 10px;
        background: #fff;
        overflow: hidden;
        box-shadow: 0 0 5px rgb(0 0 0 / 10%);
        background: url(@/assets/images/card-bg.png) no-repeat;
        background-size: 100% 100%;
        .item-icon {
          margin: 20px auto;
          width: 180px;
          height: 130px;
        }
        .card-title {
          color: #f2f2f2;
          text-align: center;
        }
        .desc {
          display: block;
          width: 80%;
          text-align: center;
          margin: 10px auto 0;
          color: #f2f2f2;
          font-size: 12px;
        }
      }
    }
  }
}
.doc-content-index {
  width: 1366px;
  margin: 0 auto 20px;
  position: relative;
  background-color: #070505;

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
    // padding-top: 6%;
    .content-title {
      font-size: 60px;
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
      font-size: 34px;
      color: rgba(255, 255, 255, 1);
    }
    .content-desc {
      margin-bottom: 10px;
      font-size: 18px;
      color: rgb(194, 194, 194);
    }
  }

  .doc-content-banner-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    // padding: 8% 0 0 10%;

    .doc-content-banner-image {
      img {
        width: 675px;
        height: 450px;
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
.swiper-pagination {
  position: absolute;
  width: 100%;
  bottom: 8px !important;
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
</style>

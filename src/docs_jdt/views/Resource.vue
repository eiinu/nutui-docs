<template>
  <doc-header></doc-header>
  <div class="resource-main jdt-main" :style="mainJdtStyle">
    <div class="resource-main-content">
      <h3 class="sub-title">资源</h3>
      <p class="sub-desc">这里提供NutUI-JDT 相关设计资源的下载，更多设计资源正在整理和完善中。</p>
    </div>
  </div>
  <div class="resource-content">
    <!-- 设计资源 -->
    <div class="resource-block">
      <h4 class="sub-title">设计资源</h4>

      <div class="sub-box">
        <img
          src="//img10.360buyimg.com/imagetools/jfs/t1/222088/15/18123/5264/632c1c16Efeb7e568/e0d6b0b3d120c889.png"
          alt=""
        />
        <span class="sub-box-tip jdt-tips">Sketch 组件包</span>
        <span class="sub-box-desc">通过在Sketch中添加组件库，在设计/修改阶段快速完成项目建设交付</span>
        <span class="sub-box-time"> 更新时间 2022.06.29</span>
        <a download href="https://storage.360buyimg.com/nutui-static/DTDMobileUIkits.sketch" class="sub-box-btn"
          >下载资源</a
        >
      </div>

      <!-- <p class="sub-desc">NutUI 3x 基于 JD APP 10.0 视觉规范实现的组件库，在这里可以下载 sketch 设计资源。
        <a class="download" download href="https://storage.360buyimg.com/nutui-static/NutUI3xStyleGuide.sketch" >点击下载</a>
      </p>
      <p class="sub-desc">NutUI-JDT 京东科技体系移动端设计规范，这里可以下载 sketch 设计资源。
        <a class="download" download href="https://storage.360buyimg.com/nutui-static/DTDMobileUIkits.sketch">点击下载</a>
      </p> -->
      <!-- <img
        src="https://img11.360buyimg.com/imagetools/jfs/t1/206767/18/7920/405226/6181e655E6b5be4de/47a13df50b92106b.jpg"
      /> -->
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute } from 'vue-router';
import Header from './Header.vue';
import Footer from '@/components/Footer.vue';
import { RefData } from '@/assets/util/ref';
import { ApiService } from '@/service/ApiService';
import { isJDReact } from '@/assets/util';
export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer
  },
  setup() {
    const articleList: any[] = [];
    const communityArticleList: any[] = [];
    const videoList: any = [];
    const data = reactive({
      articleList,
      communityArticleList,
      videoList,
      tabData: [
        {
          title: '文章'
        }
        // {
        //   title: '性能体验'
        // },
        // {
        //   title: '性能体验'
        // }
      ],
      activeIndex: 0,
      showNutuiCat: false
    });
    const watchDemoUrl = (router: RouteLocationNormalized) => {
      RefData.getInstance().currentRoute.value = router.name as string;
    };
    onMounted(() => {
      // 路由
      const route = useRoute();
      watchDemoUrl(route);

      // 文章列表接口
      let params = {
        nutui_version: ''
      };

      if (isJDReact()) {
        params.nutui_version = '0,8';
      } else {
        params.nutui_version = '0,1,2,3,4,5,6,7,9';
      }

      const apiService = new ApiService();
      apiService.getArticle(params).then((res) => {
        if (res?.state == 0) {
          const categoryMap: {
            [props: string]: string;
          } = {
            1: '项目实践',
            2: '技术揭秘',
            3: '成长历程'
          };
          (res.value.data.arrays as any[]).forEach((element) => {
            if (element.type == 1) {
              let category = element.category;
              let index = data.articleList.findIndex((item) => item.category == category);
              if (index != -1) {
                data.articleList[index].list.push(element);
              } else {
                data.articleList.push({
                  category: category,
                  title: categoryMap[category],
                  list: [element]
                });
              }
            } else {
              data.communityArticleList.push(element);
            }
          });
          // 进行排序
          let order = [3, 2, 1];
          data.articleList.sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
        }
      });

      // 视频列表接口1
      apiService
        .getVideo({
          nutui_version: 0
        })
        .then((res) => {
          if (res?.state == 0) {
            data.videoList = res.value.data.arrays;
          }
        });
    });
    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to);
    });
    const mainJdtStyle = computed(() => {
      return {
        background:
          'url(https://img11.360buyimg.com/imagetools/jfs/t1/212849/9/22014/314388/6333ee91E5b491ded/0e98e0ad2dc69be1.png)',
        backgroundSize: ' 100% 100%'
      };
    });
    const clickTab = (index: number) => {
      data.activeIndex = index;
    };
    const toLink = (id: number) => {
      window.open('//jelly.jd.com/article/' + id);
    };
    const toVideoLink = (url: string) => {
      window.open(url);
    };
    return {
      ...toRefs(data),
      clickTab,
      toLink,
      toVideoLink,
      mainJdtStyle
    };
  }
});
</script>

<style lang="scss" scoped>
$mainRed: rgba($doc-default-color, 0.8);
.resource {
  &-main {
    background-color: #1d1d1d;
    &-content {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 48px;
      padding-bottom: 53px;
      background: url('@/assets/images/bg-article.png') no-repeat;
      background-size: 307px 200px;
      background-position: right 280px top 0;
      .sub-title {
        margin-left: 8px;
        margin-bottom: 40px;
        line-height: 36px;
        font-size: 30px;
        color: $white;
      }
      .sub-desc {
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        color: $white;
      }
    }
  }
  &-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
  }
  &-block {
    margin-bottom: 50px;
    text-align: left;
    width: 1200px;
    .download {
      color: #38f;
    }
    > img {
      width: 100%;
      box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    }
    .sub-title {
      margin-bottom: 15px;
      line-height: 42px;
      font-size: 30px;
      color: #1a1a1a;
    }
    .sub-desc {
      margin-bottom: 40px;
      /* line-height: 22px; */
      font-size: 14px;
      color: #959fb1;
    }
    .sub-box {
      width: 1200px;
      height: 160px;
      padding: 40px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.03),
        0 5px 12px 6px rgba(0, 0, 0, 0.04);
      display: flex;
      align-items: center;
      margin-top: 20px;
      > img {
        width: 80px;
        height: 80px;
      }
      .sub-box-tip {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        margin-left: 20px;
        &.jdt-tips {
          font-size: 28px;
        }
      }
      .sub-box-desc {
        width: 466px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.45);
        margin-left: 36px;
      }
      .left90 {
        margin-left: 90px;
      }
      .sub-box-time {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.45);
        margin-right: 28px;
      }
      .sub-box-btn {
        width: 126px;
        height: 38px;
        background: rgba(44, 104, 255, 1);
        border-radius: 19px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .sub-red {
      color: $doc-default-color;
    }
  }
}
.jdt-main {
  .resource-main-content {
    background: none;
    .sub-title {
      color: rgba(0, 0, 0, 1);
    }
    .sub-desc {
      color: rgba(0, 0, 0, 0.45);
    }
  }
}
.no-data {
  text-align: center;
  .nodata-img-joy {
    width: 269px;
    height: 153px;
    margin-bottom: 30px;
  }
  .nodata-desc {
    font-size: 16px;
    color: #959fb1;
  }
}
.tab {
  &-box {
    .sub-title {
      margin-bottom: 20px;
    }
    > h3 {
      margin-bottom: 18px;
    }
  }
  &-hd {
    display: flex;
    margin-bottom: 30px;
  }
  &-bd {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  &-hd-item {
    margin-right: 40px;
    line-height: 25px;
    font-size: 18px;
    color: #808080;
    cursor: pointer;
    &:first-child {
      color: #1a1a1a;
    }
    &.active {
      color: #e32c36;
    }
  }
}
.design {
  &-item {
    position: relative;
    width: 280px;
    margin-right: 26px;
    margin-bottom: 45px;
    cursor: pointer;
    &:nth-child(4n) {
      margin-right: 0;
    }
    .img-design {
      width: 280px;
      height: 170px;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    .play {
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
  &-title {
    width: 280px;
    height: 44px;
    line-height: 22px;
    font-size: 14px;
    color: #1d1d21;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
  }
}
.article {
  &-item {
    position: relative;
    padding-left: 34px;
    margin-bottom: 20px;
    color: $mainRed;
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -8px;
      width: 12px;
      height: 12px;
      border: 2px solid $doc-default-color;
      border-radius: 50%;
    }
  }
  &-link {
    line-height: 22px;
    font-size: 14px;
    color: $mainRed;
    cursor: pointer;
  }
}
</style>

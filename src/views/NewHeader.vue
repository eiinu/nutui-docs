<template>
  <!-- <div class="v3-banner" :class="{ active: true }">
    NutUI 正在参与 OSC 2021 年度中国开源项目评选（您的鼓励是我们坚持不懈的源动力)，请为我们投上宝贵的一票吧。
    <a href="https://www.oschina.net/project/top_cn_2021/?id=65&fr=nutui" target="_blank">去投票</a>
  </div> -->
  <div class="site-doc-header site-doc-header-red" :class="themeName()">
    <div class="site-header-logo">
      <a class="logo-link" :class="{ [language]: language }" @click="toHome"></a>
    </div>
    <div class="site-header-nav">
      <!-- <Search /> -->
      <div class="nav-box">
        <ul class="nav-list">
          <template v-for="item in newHeader" :key="item.name">
            <li class="nav-item nav-normal" :class="{ active: isActive(item.name) }" v-if="item.key != '1'">
              <a @click="toLink(item)">
                {{ isZh ? item.cName : item.eName }}
              </a>
            </li>
            <li class="nav-item nav-normal" :class="{ active: data.isShowGuid }" v-else>
              <div
                @mouseenter="onMouseHover(true)"
                @mouseleave="onMouseHover(false)"
                tabindex="0"
                class="site-header-select-box"
                :class="[data.isShowGuid == true ? 'select-up' : 'select-down']"
                @click.stop="data.isShowGuid = !data.isShowGuid"
              >
                <a>生态产品</a>
              </div>
            </li>
          </template>
          <!-- <li v-if="language == 'vue'" class="nav-item" @click="translate">En/中</li> -->
          <li class="nav-item nav-git">
            <a class="user-link" target="_blank" v-if="newRepository.git" :href="newRepository.git"></a>
            <a class="user-link gitee" target="_blank" v-if="newRepository.gitee" :href="newRepository.gitee"></a>
          </li>
          <transition name="fade">
            <div
              class="site-guid-data"
              @mouseenter="onMouseHover(true)"
              @mouseleave="onMouseHover(false)"
              v-show="data.isShowGuid"
            >
              <div class="site-guid-data-arrow"></div>
              <div
                class="info"
                v-for="(item, indexKey) in products"
                :key="indexKey"
                :class="{ contentKey: indexKey === 1 }"
              >
                <div class="header">
                  <div class="type">{{ item.type }}</div>
                </div>
                <div class="product-type">
                  <div
                    class="content"
                    v-for="(info, index) in item.data"
                    :key="index"
                    @click.stop="checkGuidTheme(info)"
                  >
                    <div class="item-logo">
                      <img :src="info.icon" />
                    </div>
                    <div class="item-info">
                      <div class="name">
                        {{ info.name }}
                        <span
                          :class="[
                            'status',
                            info.status == 0 && 'infor-disabled',
                            ,
                            info.status == 2 && 'infor-goline'
                          ]"
                          >{{ info.statusDesc }}</span
                        ></div
                      >
                      <div class="version" v-if="info.status == 1 && item.type == 'H5'">
                        <a
                          :href="
                            'https://www.npmjs.com/package/@nutui/nutui' +
                            (info.name.indexOf('React') > -1 ? '-react' : '')
                          "
                        >
                          <img
                            :src="
                              'https://img.shields.io/npm/v/@nutui/nutui' +
                              (info.name.indexOf('React') > -1 ? '-react' : '') +
                              '.svg?style=flat-square'
                            "
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, onMounted, toRefs } from 'vue';
// import Search from './Search.vue';
import { newHeader, nav, newRepository, language, guide, products } from '@/config/index';
import { RefData } from '@/assets/util/ref';
import { useRouter } from 'vue-router';
import { useLocale } from '@/assets/util/locale';
export default defineComponent({
  name: 'new-header',
  components: {
    // Search
  },
  setup() {
    const router = useRouter();
    let packages = [] as any[];
    nav.forEach((item: any) => {
      packages.push(...item.packages);
    });
    const data = reactive({
      theme: 'black',
      verson: language == 'vue' ? '3.x' : '1.x',
      navIndex: 0,
      activeIndex: 2,
      isShowGuid: false
    });
    const versionList = reactive({
      reactVersion: '已发版',
      vueVersion: '已发版'
    });
    let { currentLang, isZh, isEn } = useLocale();

    const translate = async () => {
      let location = window.location;

      if (currentLang.value == 'zh-CN') {
        location.href = location.href.replace('zh-CN', 'en-US');
        currentLang.value = 'en-US';
        // postmessage
      } else {
        location.href = location.href.replace('en-US', 'zh-CN');
        currentLang.value = 'zh-CN';
        // postmessage
      }
    };

    const handleFocus = () => {
      // console.log(1);
    };

    const handleGuidFocusOut = () => {
      data.isShowGuid = false;
    };

    const onMouseHover = (flag: any) => {
      data.isShowGuid = flag;
    };

    const toHome = () => {
      console.log(1);
    };

    const toLink = (item: any) => {
      // if (item) {
      //   if (isEn.value) {
      //     item.path = item.path.replace('zh-CN', 'en-US');
      //   } else {
      //     item.path = item.path.replace('en-US', 'zh-CN');
      //   }
      //   router.push({ path: item.path });
      // } else {
      //   router.push({ name: '/' });
      // }
      if (item.url) {
        window.open(item.url);
      }
    };

    const isActive = computed(() => {
      const route = RefData.getInstance().currentRoute.value;
      const values = route.split('/');
      let value = values[values.length - 1];
      return function (name: string) {
        const lNames = name.toLowerCase().split('/');
        const lName = lNames[lNames.length - 1];
        if (!value) return false;
        if (lName === 'component') {
          return route.includes('component');
        } else {
          return value === lName || lName.includes(value);
        }
      };
    });
    const themeName = computed(() => {
      return function () {
        return `doc-header-${RefData.getInstance().themeColor.value}`;
      };
    });
    const checkGuidTheme = (item: any, index: number) => {
      if (item.link) {
        data.isShowGuid = false;
        window.open(item.link);
      }
    };
    onMounted(() => {
      fetchVersions('@nutui/nutui');
      setTimeout(() => {
        fetchVersions('@nutui/nutui-react');
      }, 400);
    });
    const fetchVersions = async (repoId: string) => {
      const response = await fetch(`https://registry.npmmirror.com/${repoId}`);
      const result = await response.json();
      const versionsList = await Object.keys(result.versions);
      const releases = await versionsList.filter((item) => item.indexOf('beta') == -1).reverse();
      if (repoId == '@nutui/nutui') {
        versionList.vueVersion = releases[0];
      } else {
        versionList.reactVersion = releases[0];
      }
    };

    return {
      newHeader,
      ...toRefs(versionList),
      newRepository,
      data,
      language,
      toHome,
      isActive,
      checkGuidTheme,
      themeName,
      handleFocus,
      handleGuidFocusOut,
      onMouseHover,
      guide,
      products,
      toLink,
      translate,
      isZh
    };
  }
});
</script>

<style lang="scss" scoped>
.v3-banner {
  position: fixed;
  top: 0;
  transition: all 0.3s;
  > a {
    color: #fff;
    font-weight: bold;
  }
  font-size: 14px;
  width: 100%;
  z-index: 999;
  text-align: center;
  padding: 10px 60px;
  color: #fff;
  background: linear-gradient(
    135deg,
    rgba(242, 20, 12, 1) 0%,
    rgba(232, 34, 14, 1) 69.83950099728881%,
    rgba(242, 77, 12, 1) 100%
  );
}
.site-doc {
  &-header {
    position: sticky;
    // position: fixed;
    z-index: 9999;
    top: 0px;
    left: 0;
    right: 0;
    min-width: 1300px;
    background-color: #080708;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // height: $doc-header-height;
    // line-height: $doc-header-height;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
    border: none;
    display: flex;
    justify-content: space-between;
  }
}
.site-header {
  &-logo {
    position: relative;
    display: inline-block;
    width: 240px;
    height: 64px;
    .logo-link {
      width: 120px;
      height: 46px;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      margin-top: -23px;
      cursor: pointer;
      background: url('@/assets/images/logo-header-red.png') no-repeat center/100%;
    }
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    // width: calc(100% - 240px);
    // min-width: 900px;
    // padding: 0 40px;
    .nav-box {
      // margin-right: 140px;
      .nav-list {
        position: relative;
        // min-width: 490px;
        display: flex;
        list-style: none;
        align-items: center;
        // justify-content: flex-end;
      }
      .nav-normal {
        position: relative;
        margin-right: 50px;
        font-size: 14px;
        height: 63px;
        line-height: 63px;
        text-align: center;
        cursor: pointer;
        flex-shrink: 0;
        a {
          display: inline-block;
          line-height: 64px;
          color: rgb(244, 244, 244);
        }
        // overflow: hidden;

        &:hover,
        &.active {
          font-weight: bold;
          &:after {
            content: '';
            display: block;
            width: 35px;
            height: 13px;
            position: absolute;
            bottom: 3px;
            left: 50%;
            margin-left: -17.5px;
            background: url(https://storage.360buyimg.com/imgtools/09516173b9-9b32b9d0-3864-11eb-9a56-0104487ad2b0.png)
              no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .nav-item {
        &:nth-child(5) {
          margin-right: 0;
        }
      }
      .user-link {
        display: inline-block;
        width: 26px;
        height: 26px;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-image: url('@/assets/images/icon-user.png');
        background-size: 26px;

        &.gitee {
          margin-left: 8px;
          background-image: url('@/assets/images/icon-gitee.png');
        }
      }
    }
  }
}
.site-guid-data {
  // display: block !important;
  position: absolute;
  z-index: 10;
  top: 60px;
  left: -210px;
  padding: 20px;
  width: 510px;
  background: $theme-black-nav-select-bg;
  border: 1px solid $theme-black-nav-select-border;
  border-radius: 12px;
  font-size: 14px;
  color: #fff;
  .site-guid-data-arrow {
    position: absolute;
    width: 100px;
    height: 30px;
    top: -30px;
    left: 37%;
  }
  .info {
    // &:first-child {
    //   border-bottom: 1px solid $theme-black-nav-select-border;
    // }
    .header {
      line-height: 24px;
      border-bottom: 1px solid #9e9e9e;
      .type {
        padding: 10px;
      }
    }
  }
  .product-type {
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .content {
    width: 230px;
    display: flex;
    align-items: center;
    padding: 15px;
    transition: all linear 0.2s;
    &:hover {
      background-color: rgba(88, 88, 88, 0.8);
      cursor: pointer;
    }
    .item-logo {
      width: 30px;
      height: 30px;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      color: #fff;
    }
    .status {
      display: inline-block;
      font-size: 12px;
      padding: 3px 6px;
      color: #fff;
      background: linear-gradient(119deg, #00b2bd 11%, #2ceb85 55%);
      transform: scale(0.8);
      border-radius: 10px;
    }
    .infor-disabled {
      background: gray;
      cursor: not-allowed;
    }
    .infor-goline {
      background: linear-gradient(315deg, #6772ff 0, #00f9e5 100%);
    }
    .version {
      margin-top: 6px;
      font-size: 12px;
    }
  }
}
</style>

<template>
  <!-- <div class="v3-banner" :class="{ active: true }">
    NutUI 正在参与 OSC 2021 年度中国开源项目评选（您的鼓励是我们坚持不懈的源动力)，请为我们投上宝贵的一票吧。
    <a href="https://www.oschina.net/project/top_cn_2021/?id=65&fr=nutui" target="_blank">去投票</a>
  </div> -->
  <div class="doc-header" :class="themeName()">
    <div class="header-logo">
      <a class="logo-link" :class="{ [language]: language, jdb: isJDB(), jddkh: isJDDKH() }" @click="toHome"></a>
      <span class="logo-border"></span>
      <span class="version" v-if="language == 'vue' && isJDB() == false && isJDDKH() == false">{{ version }}</span>
    </div>
    <div class="header-nav">
      <Search />
      <div class="nav-box">
        <ul class="nav-list">
          <li class="nav-item nav-normal" :class="{ active: data.isShowGuid2 }">
            <div
              @mouseenter="onMouseHover2(true)"
              @mouseleave="onMouseHover2(false)"
              tabindex="0"
              class="site-header-select-box"
              :class="[data.isShowGuid2 == true ? 'select-up' : 'select-down']"
              @click.stop="data.isShowGuid2 = !data.isShowGuid2"
            >
              <a>基础组件</a>
            </div>
          </li>
          <transition name="fade">
            <div
              class="site-guid-data"
              @mouseenter="onMouseHover2(true)"
              @mouseleave="onMouseHover2(false)"
              v-show="data.isShowGuid2"
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
          <li class="nav-item">
            <div
              @mouseenter="onMouseHover3(true)"
              @mouseleave="onMouseHover3(false)"
              tabindex="0"
              class="header-select-box"
              :class="[data.isShowGuid3 == true ? 'select-up' : 'select-down']"
              @click.stop="data.isShowGuid3 = !data.isShowGuid3"
            >
              <div>业务组件</div>
              <div class="guild-line"></div>
              <transition name="fade">
                <div class="guid-data guid-data-business" v-show="data.isShowGuid3">
                  <div
                    class="info"
                    v-for="(item, indexKey) in businessGuide"
                    :key="indexKey"
                    :class="{ contentKey: indexKey === 1 }"
                  >
                    <div
                      class="content"
                      v-for="(info, index) in item.data"
                      :key="index"
                      @click.stop="checkGuidTheme(info)"
                      :class="{
                        disabled: info.name === 'Biz'
                      }"
                    >
                      <div class="version"> {{ info.name }}</div>
                      <div class="list">
                        <div class="lang" v-for="(lang, index) in info.language" :key="index"
                          ><div class="name">{{ lang }}</div>
                        </div></div
                      >

                      <div class="app"> {{ info.app }}</div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </li>
          <li class="nav-item" v-for="item in headerBck" :key="item.name" :class="{ active: isActive(item.name) }">
            <a @click="toLink(item)">
              {{ isZh ? item.cName : item.eName }}
            </a>
          </li>
          <li class="nav-item" v-if="!isReact">
            <div
              @mouseenter="onMouseHover(true)"
              @mouseleave="onMouseHover(false)"
              tabindex="0"
              class="header-select-box"
              :class="[data.isShowGuid == true ? 'select-up' : 'select-down']"
              @click.stop="data.isShowGuid = !data.isShowGuid"
            >
              <div class="header-select-hd">{{ data.verson }}<i class=""></i></div>
              <div class="guild-line"></div>
              <transition name="fade">
                <div class="guid-data" v-show="data.isShowGuid">
                  <div
                    class="info"
                    v-for="(item, indexKey) in guide"
                    :key="indexKey"
                    :class="{ contentKey: indexKey === 1 }"
                  >
                    <div class="header">
                      <img :src="item.icon" class="icon" />
                      <div class="type"> {{ item.type }}</div>
                    </div>
                    <div
                      class="content"
                      v-for="(info, index) in item.data"
                      :key="index"
                      @click.stop="checkGuidTheme(info)"
                      :class="{
                        active: (info.name === 'vue 3.x' || info.name === '1.x') && item.type.toLowerCase() == language
                      }"
                    >
                      <div class="version"> {{ info.name }}</div>
                      <div class="list">
                        <div class="lang" v-for="(lang, index) in info.language" :key="index"
                          ><div class="name">{{ lang }}</div>
                        </div></div
                      >

                      <div class="app"> {{ info.app }}</div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </li>
          <li v-if="language == 'vue' && !isVueTaro && !isReactTaro" class="nav-item" @click="translate">En/中</li>
          <li class="nav-item">
            <a class="user-link" target="_blank" v-if="repository.git" :href="repository.git"></a>
            <a class="user-link gitee" target="_blank" v-if="repository.gitee && !isReact" :href="repository.gitee"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import Search from '@/components/Search.vue';
import {
  SiteVueTaro,
  SiteReactTaro,
  header,
  versions,
  version,
  nav,
  repository,
  language,
  guide,
  businessGuide,
  products
} from '@/config/index';
import { RefData } from '@/assets/util/ref';
import { useRouter } from 'vue-router';
import { useLocale } from '@/assets/util/locale';
import { isJDB, isJDDKH } from '@/assets/util/index';
export default defineComponent({
  name: 'doc-header',
  components: {
    Search
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
      isShowGuid: false,
      isShowGuid2: false,
      isShowGuid3: false
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

    const onMouseHover2 = (flag: any) => {
      data.isShowGuid2 = flag;
    };

    const onMouseHover3 = (flag: any) => {
      data.isShowGuid3 = flag;
    };

    const toHome = () => {
      if (isJDB() || isJDDKH()) {
        return;
      }
      RefData.getInstance().currentRoute.value = '/';
      window.location.href = `${location.href.includes('jagile') ? '#?jagile=true' : '#'}`;
    };

    const toLink = (item: any) => {
      if (item) {
        if (isEn.value) {
          item.path = item.path.replace('zh-CN', 'en-US');
        } else {
          item.path = item.path.replace('en-US', 'zh-CN');
        }
        router.push({ path: item.path });
      } else {
        router.push({ name: '/' });
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
    const isVueTaro = computed(() => {
      return location.href.includes('index.vue.taro.html');
    });
    const isReactTaro = computed(() => {
      return location.href.includes('index.react.taro.html');
    });
    const isReact = computed(() => {
      return location.href.includes('index.react.html') || location.href.includes('index.react.taro.html');
    });
    const checkGuidTheme = (item: any, index: number) => {
      data.isShowGuid = false;
      if (item.name === 'Biz') return;
      window.open(item.link);
    };

    let headerBck = isVueTaro.value ? SiteVueTaro.header : isReactTaro.value ? SiteReactTaro.header : header;

    if (location.hash.includes('jagile')) {
      headerBck.splice(-1, 1);
    }

    return {
      headerBck,
      versions,
      version,
      repository,
      data,
      language,
      isJDB,
      isJDDKH,
      toHome,
      isActive,
      checkGuidTheme,
      themeName,
      handleFocus,
      handleGuidFocusOut,
      onMouseHover,
      onMouseHover2,
      onMouseHover3,
      guide,
      businessGuide,
      toLink,
      translate,
      isZh,
      products,
      isVueTaro,
      isReactTaro,
      isReact
    };
  }
});
</script>

<style lang="scss">
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
.doc {
  &-header {
    // position: fixed;
    z-index: 9999;
    top: 0px;
    left: 0;
    right: 0;
    min-width: 1300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: $doc-header-height;
    line-height: $doc-header-height;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
  }
}
.header {
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

      &.react {
        width: 197px;
      }
      &.jdb,
      &.jddkh {
        width: 180px;
      }
    }
    .logo-border {
      width: 1px;
      height: 26px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -13px;
    }
    .version {
      position: absolute;
      right: 70px;
      font-size: 14px;
    }
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    width: calc(100% - 240px);
    min-width: 900px;
    padding: 0 40px;
    .nav-box {
      margin-right: 140px;
      .nav-list {
        position: relative;
        min-width: 490px;
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: flex-end;
      }
      .nav-item {
        position: relative;
        margin-right: 30px;
        font-size: 14px;
        height: 63px;
        line-height: 63px;
        text-align: center;
        cursor: pointer;
        flex-shrink: 0;
        a {
          display: inline-block;
          line-height: 64px;
        }
        // overflow: hidden;
        &.active {
          font-weight: bold;
          &:after {
            content: '';
            display: inline-block;
            width: 35px;
            height: 13px;
            position: absolute;
            bottom: 3px;
            left: 50%;
            margin-left: -17.5px;
            background: url('@/assets/images/item-active.png');
          }
        }
        &:last-of-type {
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
.header-select {
  &-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
  }
  &-hd {
    min-width: 77px;
    height: 28px;
    padding: 0 30px 0 15px;
    line-height: 26px;
    font-size: 14px;
    color: $theme-red-word;
    background-position: right 15px top 12px;
    background-size: 8px 5px;
    background-repeat: no-repeat;
    border-radius: 14px;
  }
  &-bd {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -60px;
    border-radius: 3px;
    overflow: hidden;
  }
  &-item {
    width: 120px;
    height: 28px;
    padding: 0 12px;
    line-height: 26px;
    font-size: 14px;
    border-width: 0px 1px 1px;
    border-style: solid;
    cursor: pointer;
    &:first-of-type {
      border-top-width: 1px;
    }
  }
}
// 颜色
.doc-header {
  // 红色
  &-red {
    background-image: $theme-red-header-bg;
    color: $theme-red-word;
    .header {
      &-logo {
        .logo-link {
          background: url('@/assets/images/logo-header-white.png') no-repeat center/100%;
          &.react {
            background: url('@/assets/images/logo-header-white-react.png') no-repeat center/100%;
          }
          &.jdb {
            background: url('@/assets/images/logo-header-white-jdb.png') no-repeat center/100%;
          }
          &.jddkh {
            background: url('@/assets/images/logo-header-white-jddkh.png') no-repeat center/100%;
          }
        }
        .logo-border {
          background: $theme-red-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-red-word;
            background-position: 0 0;
            &::-webkit-input-placeholder {
              color: $theme-red-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-red-word;
            a {
              color: $theme-red-word;
            }
            &.active {
              color: $theme-red-actice;
              &:after {
                background-position: 0 0;
              }
              a {
                color: $theme-red-actice;
              }
            }
          }
          .user-link {
            background-position: 0 0;
            // &:hover {
            //   background-position: -26px 0;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        position: relative;
        &.select-down {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-white-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-white-up.png');
          }
        }
        .guild-line {
          position: absolute;
          height: 20px;
          width: 77px;
          right: 0%;
          background: transparent;
        }
        .guid-data {
          position: absolute;
          top: 40px;
          right: 0%;
          margin-left: -60px;
          border-radius: 3px;
          overflow: hidden;
          padding-left: 29px;
          padding-right: 29px;
          width: 336px;
          background: $theme-black-nav-select-bg;
          border: 1px solid $theme-black-nav-select-border;
          border-radius: 12px;
          z-index: 3;
          .info {
            padding-top: 16px;
            padding-bottom: 22px;
            &:first-child {
              border-bottom: 1px solid $theme-black-nav-select-border;
            }
            .header {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              line-height: 24px;
              .icon {
                width: 22px;
                height: 19px;
                margin-right: 9px;
              }
            }
            .content {
              padding-top: 6px;
              padding-bottom: 6px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              line-height: 24px;
              margin-top: 2px;
              margin-bottom: 2px;
              border-radius: 4px;
              &.active {
                background-color: $theme-black-nav-select-active-bg;
              }
              &:hover {
                background-color: $theme-black-nav-select-hover-bg;
              }
              .version {
                width: 91px;
                text-align: center;
              }
              .list {
                width: 95px;
                height: 24px;
                align-items: center;
                justify-content: flex-start;
                display: flex;
                .lang {
                  height: 24px;
                  background: $doc-nav-icon-bg1;
                  border-radius: 4px;
                  margin-right: 4px;
                  &:nth-child(2) {
                    background: $doc-nav-icon-bg2;
                    .name {
                      color: $doc-nav-icon-color2;
                    }
                  }
                  .name {
                    padding-left: 6px;
                    padding-right: 6px;
                    font-size: 14px;
                    font-family: PingFangSC;
                    font-weight: normal;
                    color: $doc-nav-icon-color1;
                  }
                }
              }
              .app {
                display: flex;
                justify-content: flex-start;
                width: 64px;
                margin-left: 18px;
                margin-right: 19px;
              }
            }
          }
          .contentKey {
            @extend .info;
            .content {
              .list {
                .lang {
                  background: $doc-nav-icon-bg2;
                  .name {
                    color: $doc-nav-icon-color2;
                  }
                }
              }
            }
          }
        }
      }
      &-hd {
        color: $theme-red-word;
        border: 1px solid $theme-white-select-border;
      }
      &-bd {
        color: $theme-white-select-word;
      }
      &-item {
        border-color: $theme-red-select-border;
        background-color: $theme-red-select-bg;
        &:hover {
          color: $theme-red;
        }
      }
    }
  }
  // 白色
  &-white {
    background: $white;
    color: $theme-white-word;
    border-bottom: 1px solid $theme-white-box-border;
    .header {
      &-logo {
        .logo-link {
          background: url('@/assets/images/logo-header-red.png') no-repeat center/100%;
          &.react {
            background: url('@/assets/images/logo-header-red-react.png') no-repeat center/100%;
          }
          &.jdb {
            background: url('@/assets/images/logo-header-red-jdb.png') no-repeat center/100%;
          }
          &.jddkh {
            background: url('@/assets/images/logo-header-red-jddkh.png') no-repeat center/100%;
          }
        }
        .logo-border {
          background: $theme-white-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-white-word;
            background-position: 0 -22px;
            &::-webkit-input-placeholder {
              color: $theme-white-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-white-word;
            a {
              color: $theme-white-word;
            }
            &.active {
              color: $theme-white-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-white-actice;
              }
            }
          }
          .user-link {
            background-position: 0 -25px;
            // &:hover {
            //   background-position: -26px -25px;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        position: relative;
        &.select-down {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-gray-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-gray-up.png');
          }
        }
        .guild-line {
          position: absolute;
          right: 0%;
          height: 20px;
          width: 77px;
          background: transparent;
        }
        .guid-data {
          position: absolute;
          top: 40px;
          right: 0%;
          margin-left: -60px;
          border-radius: 3px;
          overflow: hidden;
          padding-left: 29px;
          padding-right: 29px;
          width: 336px;
          background: $theme-white;
          border: 1px solid $theme-white-select-border;
          border-radius: 12px;
          z-index: 3;
          .info {
            padding-top: 16px;
            padding-bottom: 22px;
            &:first-child {
              border-bottom: 1px solid $theme-black-nav-select-border;
            }
            .header {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              line-height: 24px;
              .icon {
                width: 22px;
                height: 19px;
                margin-right: 9px;
              }
            }
            .content {
              padding-top: 6px;
              padding-bottom: 6px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              line-height: 24px;
              margin-top: 2px;
              margin-bottom: 2px;
              border-radius: 4px;
              &.active {
                background-color: $theme-white-select-active;
              }
              &:hover {
                background-color: $theme-white-select-hover;
              }
              .version {
                width: 91px;
                text-align: center;
              }
              .list {
                width: 95px;
                height: 24px;
                align-items: center;
                justify-content: flex-start;
                display: flex;
                .lang {
                  height: 24px;
                  background: $doc-nav-icon-bg1;
                  border-radius: 4px;
                  margin-right: 4px;
                  &:nth-child(2) {
                    background: $doc-nav-icon-bg2;
                    .name {
                      color: $doc-nav-icon-color2;
                    }
                  }
                  .name {
                    padding-left: 6px;
                    padding-right: 6px;
                    font-size: 14px;
                    font-family: PingFangSC;
                    font-weight: normal;
                    color: $doc-nav-icon-color1;
                  }
                }
              }
              .app {
                display: flex;
                justify-content: flex-start;
                width: 64px;
                margin-left: 18px;
                margin-right: 19px;
              }
            }
          }
          .contentKey {
            @extend .info;
            .content {
              .list {
                .lang {
                  background: $doc-nav-icon-bg2;
                  .name {
                    color: $doc-nav-icon-color2;
                  }
                }
              }
            }
          }
        }
      }
      &-hd {
        color: $theme-white-select-word;
        border: 1px solid $theme-white-select-border;
      }
      &-bd {
        color: $theme-white-select-word;
      }
      &-item {
        border-color: $theme-white-select-border;
        background-color: $theme-white-select-bg;
        &:hover {
          color: $theme-white-actice;
        }
      }
    }
  }
  // 黑色
  &-black {
    background: $black;
    color: $theme-black-word;
    border-bottom: 1px solid $theme-black-box-border;
    .header {
      &-logo {
        .logo-link {
          background: url('@/assets/images/logo-header-red.png') no-repeat center/100%;
          &.react {
            background: url('@/assets/images/logo-header-red-react.png') no-repeat center/100%;
          }
          &.jdb {
            background: url('@/assets/images/logo-header-red-jdb.png') no-repeat center/100%;
          }
          &.jddkh {
            background: url('@/assets/images/logo-header-red-jddkh.png') no-repeat center/100%;
          }
        }
        .logo-border {
          background: $theme-black-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-black-word;
            background-position: 0 -44px;
            &::-webkit-input-placeholder {
              color: $theme-black-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-black-word;
            a {
              color: $theme-black-word;
            }
            &.active {
              color: $theme-black-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-black-actice;
              }
            }
          }
          .user-link {
            background-position: 0 -51px;
            // &:hover {
            //   background-position: -26px -51px;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        &.select-down {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-white-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-white-up.png');
          }
        }
        .guild-line {
          position: absolute;
          height: 20px;
          right: 0%;
          width: 77px;
          background: transparent;
        }
        .guid-data {
          position: absolute;
          top: 40px;
          right: 0%;
          margin-left: -60px;
          border-radius: 3px;
          overflow: hidden;
          padding-left: 29px;
          padding-right: 29px;
          width: 336px;
          background: $theme-black-nav-select-bg;
          border: 1px solid $theme-black-nav-select-border;
          border-radius: 12px;
          z-index: 3;
          .info {
            padding-top: 16px;
            padding-bottom: 22px;
            &:first-child {
              border-bottom: 1px solid $theme-black-nav-select-border;
            }
            .header {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              line-height: 24px;
              .icon {
                width: 22px;
                height: 19px;
                margin-right: 9px;
              }
            }
            .content {
              padding-top: 6px;
              padding-bottom: 6px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              line-height: 24px;
              margin-top: 2px;
              margin-bottom: 2px;
              border-radius: 4px;
              &.active {
                background-color: $theme-black-nav-select-active-bg;
              }
              &:hover {
                background-color: $theme-black-nav-select-hover-bg;
              }
              .version {
                width: 91px;
                text-align: center;
              }
              .list {
                width: 95px;
                height: 24px;
                align-items: center;
                justify-content: flex-start;
                display: flex;
                .lang {
                  height: 24px;
                  background: $doc-nav-icon-bg1;
                  border-radius: 4px;
                  margin-right: 4px;
                  &:nth-child(2) {
                    background: $doc-nav-icon-bg2;
                    .name {
                      color: $doc-nav-icon-color2;
                    }
                  }
                  .name {
                    padding-left: 6px;
                    padding-right: 6px;
                    font-size: 14px;
                    font-family: PingFangSC;
                    font-weight: normal;
                    color: $doc-nav-icon-color1;
                  }
                }
              }
              .app {
                display: flex;
                justify-content: flex-start;
                width: 64px;
                margin-left: 18px;
                margin-right: 19px;
              }
            }
          }
          .contentKey {
            @extend .info;
            .content {
              .list {
                .lang {
                  background: $doc-nav-icon-bg2;
                  .name {
                    color: $doc-nav-icon-color2;
                  }
                }
              }
            }
          }
        }
      }
      &-hd {
        color: $theme-black-select-word;
        background-color: $theme-black-select-bg;
        border: 1px solid $theme-black-select-border;
      }
      &-bd {
        color: $theme-black-select-word;
      }
      &-item {
        background-color: $theme-black-select-bg;
        border-color: $theme-black-select-bg;
        &:hover {
          background-color: $theme-black-select-hover;
          border-color: $theme-black-select-hover;
        }
      }
    }
  }
}
// 下拉列表选择动画效果
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.site-guid-data {
  // display: block !important;
  line-height: initial;
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
.guid-data-business {
  top: 60px !important;
  left: -80px !important;

  .content.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>

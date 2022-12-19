<template>
  <div class="doc-header doc-header-jdt" id="jdtHeader">
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
    </div>
    <div class="header-nav">
      <Search />
      <div class="nav-box">
        <ul class="nav-list">
          <li class="nav-item" v-for="item in header" :key="item.name" :class="{ active: isActive(item.name) }">
            <a @click="toLink(item)">
              {{ isZh ? item.cName : item.eName }}
            </a>
          </li>
          <li class="nav-item">
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
          <li v-if="language == 'vue'" class="nav-item" @click="translate">En/中</li>
          <li class="nav-item">
            <a class="user-link" target="_blank" v-if="repository.git" :href="repository.git"></a>
            <a class="user-link gitee" target="_blank" v-if="repository.gitee" :href="repository.gitee"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import Search from '@/components/Search.vue';
import { header, versions, version, nav, repository, language, guide } from '@/config/index';
import { RefData } from '@/assets/util/ref';
import { useRouter } from 'vue-router';
import { useLocale } from '@/assets/util/locale';
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
      isShowGuid: false
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
      RefData.getInstance().currentRoute.value = '/';
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
    const checkGuidTheme = (item: any, index: number) => {
      data.isShowGuid = false;
      window.open(item.link);
    };
    return {
      header,
      versions,
      version,
      repository,
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
      toLink,
      translate,
      isZh
    };
  }
});
</script>

<style lang="scss" scoped>
#jdtHeader {
  z-index: 5;
  border-bottom: 1px solid #eeeeee;
  .logo-link {
    background: url('@/docs_jdt/assets/images/logonew.png') no-repeat center/100%;
  }

  .header-select-hd {
    border: 1px solid;
    color: #000;
    background-image: url('@/docs_jdt/assets/images/arrow-down.png');
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
    overflow: hidden;
    padding-left: 29px;
    padding-right: 29px;
    width: 336px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #f0f2f5;
    border-radius: 12px;
    z-index: 10;
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
  }

  .search-box {
    visibility: hidden;
  }

  .search-input {
    color: red;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: red;
    }
  }

  .nav-item {
    a {
      color: #000;
    }
  }
  .nav-item.active:after {
    content: none;
  }

  .user-link {
    display: inline-block;
    width: 26px;
    height: 26px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-image: url('@/docs_jdt/assets/images/github-icon.png');
    background-size: 26px;

    &.gitee {
      margin-left: 20px;
      background-image: url('@/docs_jdt/assets/images/gitee-icon.png');
    }
  }
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
</style>

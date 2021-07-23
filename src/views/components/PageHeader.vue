<template>
  <header class="header w-100-p">
    <div class="header-content flex jc-sb">
      <nav class="nav flex">
        <router-link class="nav-item" to="/">{{
          $t("text.resume")
        }}</router-link>
        <router-link class="nav-item" to="/QNA">{{
          $t("text.QNA")
        }}</router-link>
      </nav>
      <div class="header-right flex ai-c">
        <a-radio-group v-model="locale">
          <a-radio-button
            v-for="item in locales"
            :value="item.value"
            :key="item.value"
          >
            {{ item.label }}
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Lang } from "@/model/local.model";
import { AppStoreModule } from "@/store/modules/app/app";
@Component({})
export default class PageHeader extends Vue {
  get locale(): Lang {
    return AppStoreModule.lang;
  }
  set locale(value: Lang) {
    AppStoreModule.setLang(value);
  }
  locales = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "中文",
      value: "zh",
    },
  ];
}
</script>
<style lang="scss" scoped>
.header {
  background: rgba(82, 196, 26, 0.7);
  .header-content {
    width: 800px;
    margin: 0 auto;
    .nav {
      .nav-item {
        font-size: 20px;
        padding: 10px 20px;
        line-height: 2;
        color: #fff;

        &:hover,
        &.active {
          background: rgba(82, 196, 26, 0.5);
        }
      }
    }
    .header-right {
    }
  }
}
</style>

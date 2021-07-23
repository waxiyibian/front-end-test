<template>
  <div class="home w-100-p">
    <header class="header w-100-p">
      <div class="header-content flex jc-sb">
        <nav class="nav flex">
          <a class="nav-item" href="/">Resume</a>
          <a class="nav-item" href="">Q&amp;A</a>
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
    <aside class="aside">
      <a-anchor :affix="false">
        <a-anchor-link
          href="#components-anchor-demo-basic"
          title="Basic demo"
        />
        <a-anchor-link
          href="#components-anchor-demo-static"
          title="Static demo"
        />
        <a-anchor-link
          href="#components-anchor-demo-basic"
          title="Basic demo with Target"
          target="_blank"
        />
      </a-anchor>
    </aside>
    <article class="article">
      <a-back-top>
        <div class="ant-back-top-inner">TOP</div>
      </a-back-top>
      <section>
        <!-- Basic -->
        <basic-profile :profile="profile && profile.basic"></basic-profile>
      </section>
      <section>
        <!-- Technical -->
        <technical-profile
          :items="profile && profile.technical"
        ></technical-profile>
      </section>
      <section>
        <!-- Working Exprience -->
        <working-experience :items="profile && profile.workingExpr"></working-experience>
      </section>
      <section>
        <h3 class="cm-section-title">Education History</h3>
        <div class="flex">
          <a-icon type="setting" />
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Profile } from "@/model/profile.model";
import { Lang, Locale } from "@/model/local.model";
import { APIUtils } from "@/services/api/api";
import BasicProfileComponent from "./components/BasicProfile.vue";
import TechnicalProfileComponent from "./components/TechnicalProfile.vue";
import WorkingExperienceComponent from "./components/WorkingExperience.vue";

@Component({
  components: {
    BasicProfile: BasicProfileComponent,
    TechnicalProfile: TechnicalProfileComponent,
    WorkingExperience: WorkingExperienceComponent,
  },
})
export default class Home extends Vue {
  locale: Lang = "en";
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
  profiles: Locale<Profile> | null = null;

  get profile(): Profile {
    return this.profiles?.[this.locale] as Profile;
  }

  mounted(): void {
    APIUtils.getProfile().then((rep) => {
      this.profiles = rep.data;
    });
  }
}
</script>
<style lang="scss" scoped>
.home {
  .header {
    background: rgba(82, 196, 26, 0.7);;
    .header-content {
      width: 960px;
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

  .aside {
    position: fixed;
    left: calc((100% - 1024px) / 2);
    top: 200px;
    transform: translateX(-100%);
    padding-right: 20px;
  }
  .article {
    width: 960px;
    margin: 0 auto;
  }
}
</style>

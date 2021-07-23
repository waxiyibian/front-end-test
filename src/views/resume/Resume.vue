<template>
  <div class="resume-page w-100-p page-style">
    <page-header></page-header>
    <aside class="aside">
      <a-anchor :affix="false" class="p-10" @click="preventDefault($event)">
        <a-anchor-link
          href="#basic_profile"
          :title="$t('text.basicProfile')"
        />
        <a-anchor-link
          href="#technical_profile"
          :title="$t('text.technicalProfile')"
        />
        <a-anchor-link
          href="#working_experience"
          :title="$t('text.workingExperience')"
        />
        <a-anchor-link
          href="#education_history"
          :title="$t('text.educationHistory')"
        />
      </a-anchor>
    </aside>
    <article class="article">
      <a-back-top class="back-top">
        <div class="back-top-inner">TOP</div>
      </a-back-top>
      <section id="basic_profile">
        <!-- Basic -->
        <basic-profile
          :title="$t('text.basicProfile')"
          :profile="profile && profile.basic"
        ></basic-profile>
      </section>
      <section id="technical_profile">
        <!-- Technical -->
        <technical-profile
          :title="$t('text.technicalProfile')"
          :items="profile && profile.technical"
        ></technical-profile>
      </section>
      <section id="working_experience">
        <!-- Working Exprience -->
        <working-experience
          :title="$t('text.workingExperience')"
          :items="profile && profile.workingExpr"
        ></working-experience>
      </section>
      <section id="education_history">
        <!-- Education History -->
        <education-history
          :items="profile && profile.education"
        ></education-history>
      </section>
    </article>
    <footer class="footer">{{$t('text.thisIsAFooter')}}</footer>
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
import EducationHistoryComponent from "./components/EducationHistory.vue";
import PageHeader from "../components/PageHeader.vue";
import { AppStoreModule } from "@/store/modules/app/app";

@Component({
  components: {
    PageHeader,
    BasicProfile: BasicProfileComponent,
    TechnicalProfile: TechnicalProfileComponent,
    WorkingExperience: WorkingExperienceComponent,
    EducationHistory: EducationHistoryComponent,
  },
})
export default class Home extends Vue {
  get locale(): Lang {
    return AppStoreModule.lang;
  }
  profiles: Locale<Profile> | null = null;

  get profile(): Profile {
    return this.profiles?.[this.locale] as Profile;
  }

  mounted(): void {
    APIUtils.getProfile().then((rep) => {
      this.profiles = rep.data;
    });
  }

  preventDefault(event: MouseEvent): void {
    event?.preventDefault();
  }
}
</script>
<style lang="scss" scoped>
.resume-page {
  
  .back-top {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #999;
    border-radius: 5px;
    font-weight: bold;
    
    .back-top-inner {
      color: #333;
      transition: all .4s;
    }
    &:hover {
      .back-top-inner {
        color: rgba($color: #333, $alpha: 0.6);
      }
    }
  }

  .aside {
    position: fixed;
    left: calc((100% - 786px) / 2);
    top: 200px;
    transform: translateX(-100%);
    padding-right: 20px;
  }
}
</style>

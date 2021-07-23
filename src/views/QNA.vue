<template>
  <div class="qna-page page-style">
    <page-header></page-header>
    <article class="article">
      <a-back-top class="back-top">
        <div class="back-top-inner">TOP</div>
      </a-back-top>
      <a-list
        :grid="{ gutter: 16, md: 1}"
        :data-source="list"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card :title="item.question"> {{item.answer}}</a-card>
        </a-list-item>
      </a-list>
    </article>
    <footer class="footer">{{ $t("text.thisIsAFooter") }}</footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeader from "./components/PageHeader.vue";
import { APIUtils } from "@/services/api/api";
import { Lang } from "@/model/local.model";
import { QNAItem, QNAResponse } from "@/model/QNA.module";
import { AppStoreModule } from "@/store/modules/app/app";

@Component({
  components: {
    PageHeader,
  },
})
export default class QuestionNAnswer extends Vue {
  get locale(): Lang {
    return AppStoreModule.lang;
  }
  get list(): QNAItem[] {
    return this.qnaResponse?.[this.locale] ?? [];
  };
  qnaResponse: QNAResponse = null;
  mounted() {
    APIUtils.getQNA().then(rep =>{
      this.qnaResponse = rep.data;
    });
  }
}
</script>
<style lang="scss" scoped>
.qna-page {
  .article {
    padding-top: 20px;
  }
}
</style>

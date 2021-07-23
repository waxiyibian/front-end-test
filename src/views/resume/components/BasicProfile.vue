<template>
  <div class="basic-profile">
    <a-descriptions bordered size="middle" :column="2">
      <template v-slot:title>
        <h3 v-if="title" class="cm-section-title">{{ title }}</h3>
      </template>
      <a-descriptions-item :label="upper($t('text.name'))">
        {{ (profile && profile.name) || "" }}
      </a-descriptions-item>
      <a-descriptions-item :label="upper($t('text.gender'))">
        <span v-if="profile">{{ $t("gender." + profile.gender) || "" }}</span>
      </a-descriptions-item>
      <a-descriptions-item :label="upper($t('text.avatar'))">
        <a-avatar
          v-if="profile && profile.avatar"
          shape="square"
          size="large"
          :src="profile.avatar"
          :alt="$t('text.avatar')"
        />
      </a-descriptions-item>
      <a-descriptions-item :label="upper($t('text.telephone'))">
        {{ (profile && profile.phone) || "" }}
      </a-descriptions-item>
      <a-descriptions-item :label="upper($t('text.email'))">
        {{ (profile && profile.email) || "" }}
      </a-descriptions-item>
      <a-descriptions-item :label="upper($t('text.address'))">
        {{ (profile && profile.address) || "" }}
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { BasicProfile, Gender } from "@/model/profile.model";
import { Lang } from "@/model/local.model";

@Component({})
export default class BasicProfileComponent extends Vue {
  genderText?: (value: Gender, locale: Lang) => string;
  @Prop({
    type: Object,
    default: null,
  })
  profile: BasicProfile;
  @Prop({
    type: String,
    default: "Basic Profile",
  })
  title: string;

  upper(str: string): string {
    if (typeof str !== "string") return str;
    return `${str[0]?.toUpperCase() ?? ""}${str.slice(1)?.toLowerCase() ?? ""}`;
  }
}
</script>
<style lang="scss" scoped>
.basic-profile {
  /deep/ {
    .ant-descriptions-title {
      margin-bottom: 0;
    }
  }
  
}
</style>

<template>
  <div class="basic-profile">
    <a-descriptions bordered size="middle" :column="2">
      <template v-slot:title>
        <h3 class="cm-section-title">Basic Profile</h3>
      </template>
      <a-descriptions-item label="Name">
        {{ (profile && profile.name) || "" }}
      </a-descriptions-item>
      <a-descriptions-item label="Gender">
        <span v-if="profile">{{ $t("gender." + profile.gender) || "" }}</span>
      </a-descriptions-item>
      <a-descriptions-item label="Avatar">
        <a-avatar
          v-if="profile && profile.avatar"
          shape="square"
          size="large"
          :src="profile.avatar"
          alt="头像"
        />
      </a-descriptions-item>
      <a-descriptions-item label="Telephone">
        {{ (profile && profile.phone) || "" }}
      </a-descriptions-item>
      <a-descriptions-item label="Email">
        {{ (profile && profile.email) || "" }}
      </a-descriptions-item>
      <a-descriptions-item label="Address">
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
}
</script>

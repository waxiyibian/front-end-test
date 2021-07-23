<template>
  <div class="education-history">
    <h3 class="cm-section-title">{{$t("text.educationHistory")}}</h3>
    <a-list item-layout="horizontal" :data-source="items">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta :description="getDesc(item)">
          <span slot="title"
            >{{ $t("text.from") }}{{ item.startTime }}{{ $t("text.to")
            }}{{ item.endTime || $t("text.now") }}</span
          >
          <avatar-card slot="avatar" :icon="'bank'" :title="item.schoolName" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EducationHistoryItem } from "@/model/profile.model";
import AvatarCardComponent from "@/components/AvatarCardComponent.vue";
@Component({
  components: {
    AvatarCard: AvatarCardComponent,
  },
})
export default class EducationHistoryComponent extends Vue {
  @Prop({
    type: Array,
    default: (): any => [],
  })
  items: EducationHistoryItem[];

  public getDesc(item: EducationHistoryItem): string {
    return `${this.$t("text.majorAt")} ${item.major}, ${item.degree} ${this.$t(
      "text.degree"
    )}`;
  }
}
</script>

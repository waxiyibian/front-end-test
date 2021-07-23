<template>
  <div class="working-exprience">
    <h3 class="cm-section-title">Working Exprience</h3>
    <a-timeline>
      <a-timeline-item v-for="(item, index) in items" :key="index">
        <p class="para-header fw-b">
          <span class="time-section"
            >{{ $t("from") }} {{ item.startTime }} {{ $t("to") }}
            {{ item.endTime || $t("now") }}</span
          >
          <span class="company-name ml-10">{{ item.companyName }}</span>
          <span class="job-title ml-10">{{ item.jobTitle }}</span>
        </p>
        <div class="desc">
          <p v-for="(line, i) in getLines(item.jobDuties)" :key="i">
            <span class="fw-b">{{ i + 1 }}. </span>{{ line }}
          </p>
        </div>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { WorkingExprItem } from "@/model/profile.model";
@Component({})
export default class WorkingExperienceComponent extends Vue {
  @Prop({
    type: Array,
    default: (): any => [],
  })
  items: WorkingExprItem[];

  public getLines(str: string): string[] {
    const spaceReg = /^\s+$/;
    return str?.split("\n")?.filter((x) => x && !spaceReg.test(x)) ?? [];
  }
}
</script>

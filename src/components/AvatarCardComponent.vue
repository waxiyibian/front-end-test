<template>
  <div class="avatar-card flex fd-c jc-c ai-c">
    <a-avatar v-bind="$attrs"> </a-avatar>
    <!-- reserve for hover animation -->
    <div
      class="title-box mt-10"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <transition :name="isHover ? 'slide-up' : 'slide-down'">
        <p class="card-title" :key="titleText">{{ titleText }}</p>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
export interface HoverText {
  title: string;
  hoverTitle: string;
}
@Component({})
export default class AvatarCardComponent extends Vue {
  @Prop({
    type: [String, Object],
  })
  title: string | HoverText;

  isHover = false;
  get titleText(): string {
    const key = this.isHover ? "hoverTitle" : "title";
    return typeof this.title === "string" ? this.title : this.title?.[key];
  }
}
</script>
<style lang="scss" scoped>
.avatar-card {
  .title-box {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    overflow: hidden;
  }
}

.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.5s;
}
.slide-down-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}
.slide-down-leave-to,
.slide-up-enter {
  transform: translateY(-100%);
}
</style>

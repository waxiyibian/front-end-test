<template>
  <div class="technical-profile">
    <h3 class="cm-section-title">Technical Profile</h3>
    <a-table
      :columns="columns"
      :data-source="tableData"
      bordered
      size="small"
      rowKey="id"
      :pagination="false"
    >
      <span slot="category" slot-scope="category">
        {{ getI18N(category, "techCategory") }}
      </span>
      <span slot="labels" slot-scope="labels">
        <a-tag
          v-for="(tag, index) in labels"
          :key="tag"
          :color="colors[index % colors.length]"
        >
          {{ tag }}
        </a-tag>
      </span>
      <span slot="level" slot-scope="level, row">
        <a-rate :default-value="level" allow-half disabled />
        <span class="tag-desc ml-10">{{
          getI18N(row.levelName, "masterLevel")
        }}</span>
      </span>
    </a-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { MasterLevel, TechProfileItem } from "@/model/profile.model";
import { Column } from "ant-design-vue/types/table/column";
import { TableDataRow } from "./technical-profile.model";
import _ from "lodash";
@Component({})
export default class TechnicalProfileComponent extends Vue {
  colors: string[] = ['red', 'green', "blue", 'pink', 'orange'];
  @Prop({
    type: Array,
  })
  items: TechProfileItem[];

  columns: Partial<Column>[] = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      scopedSlots: { customRender: "category" },
      customRender: (value: string, row: TableDataRow): any => {
        const obj = {
          children: value,
          attrs: {
            rowSpan: row.rowSpan ?? 1,
          },
        };
        return obj;
      },
    },
    {
      title: "Labels",
      dataIndex: "labels",
      key: "labels",
      scopedSlots: { customRender: "labels" },
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      scopedSlots: { customRender: "level" },
    },
  ];

  get tableData(): TableDataRow[] {
    if (this.items?.length) {
      //#region divide data items into different group by their technical category and master level. Then map the group into table rows.
      const group = _.groupBy(this.items, (x) => `${x.category}-${x.level}`);
      const data: TableDataRow[] = _.map(group, (arr, index) => {
        const item = arr?.[0];
        return {
          id: index,
          category: item?.category,
          labels: arr.map((x) => x.label),
          levelName: item.level,
          level: MasterLevel[item.level] ?? 0,
        };
      });
      //#endregion
      //#region set the rowSpan attribute of each table row item
      const cateGroup = _.groupBy(data, (x) => x.category);
      _.forEach(cateGroup, (arr) => {
        arr[0].rowSpan = arr.length;
        arr.slice(1).forEach((x) => (x.rowSpan = 0));
      });
      //#endregion
      return data;
    }
    return [];
  }

  public getI18N(value: string, prefix: string): string {
    return this.$t(`${prefix}.${value}`) as string;
  }
}
</script>

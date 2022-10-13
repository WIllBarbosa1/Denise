<template>
  <div class="checkbox-wrapper">
    <el-checkbox v-model="symptom.value" :label="symptom.label" size="large" />
    <el-tooltip
      class="box-item"
      :show-after="500"
      effect="dark"
      :content="symptom.detail"
      placement="right"
    >
      <el-icon v-if="symptom.detail.length > 0" class="checkbox-icon"><InfoFilled /></el-icon>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "CheckBoxDetail",
  props: {
    symptom: {
      type: Object,
      default: () => {
        return {
          value: "",
          label: "",
          detail: "",
        };
      },
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>

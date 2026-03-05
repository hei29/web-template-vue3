<template>
  <!-- <span>123</span> -->
  <router-view />
</template>

<script setup lang="ts">
import { emitter, EditorEvent } from "@/utils/event";

emitter.off(EditorEvent.GlobalTestLog);
emitter.on(EditorEvent.GlobalTestLog, ({ text }) => {
  console.log("测试输出：" + text);
});
</script>
<style scoped lang=less></style>

<template>
  <span>123</span>
  <router-view />
</template>

<script setup lang="ts">
import { emiter, EditorEvent } from "@/utils/event";

emiter.off(EditorEvent.GlobalTestLog);
emiter.on(EditorEvent.GlobalTestLog, ({ text }) => {
  console.log("测试输出：" + text);
});
</script>
<style scoped></style>

<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'app',
  setup() {}
});
</script>

<style lang="scss">
::selection {
  background: $doc-default-color;
  color: #fff;
}
</style>

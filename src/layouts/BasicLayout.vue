<!--<script setup lang="ts">-->

<!--</script>-->

<template>
  <van-nav-bar
      title="title"
      left-text="back"
      right-text="button"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />

</template>




<script setup>

const onClickLeft = () => alert('返回');
const onClickRight = () => alert('按钮');
</script>




<style scoped>



</style>
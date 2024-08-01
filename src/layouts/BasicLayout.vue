<!--<script setup lang="ts">-->

<!--</script>-->

<template>
  <van-nav-bar
      title="title"
      left-text="back"

      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >

<!--    插槽语法-->
  <template #right>
    <van-icon name="search" size="18" />
  </template>
    </van-nav-bar>



  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">main</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">team</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">user</van-tabbar-item>

  </van-tabbar>


</template>




<script setup>

import {ref} from "vue";
import {showToast} from "vant";

const onClickLeft = () => alert('返回');
const onClickRight = () => alert('按钮');

const active = ref("index");
const onChange = (index) => showToast(`标签 ${index}`);
</script>




<style scoped>



</style>
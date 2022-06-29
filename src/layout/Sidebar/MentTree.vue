<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    text-color="#fff"
    background-color="#304156"
    unique-opened
  >
    <Item v-for="item in props.menu" :data="item" :key="item"> </Item>
  </el-menu>
</template>
<script setup>
import { defineProps } from 'vue'
import Item from './Item'
const props = defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped></style>

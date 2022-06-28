<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <Sidebar id="guide-sidebar" class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <Navbar />
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import AppMain from '@/components/AppMain'
</script>
<style lang="scss" scoped>
.app-wrapper{
  position: relative;
}
.fixed-header{
  position: absolute;
  top: 0;
  margin-left: 15vw;
}
</style>

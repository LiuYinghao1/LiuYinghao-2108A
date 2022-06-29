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
import Sidebar from '@/layout/Sidebar'
import Navbar from '@/layout/Navbar'
import AppMain from '@/layout/AppMain'
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .sidebar-container {
    width: 210px;
    height: 100%;
    background-color: #304156;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
  }

  .main-container {
    width: calc(100% - 210px);
    height: 100%;
    margin-left: 210px;
    position: relative;
    .fixed-header {
      position: fixed;
      top: 0;
      height: 10%;
      right: 0;
      z-index: 9;
      background-color: #ccc;

      width: calc(100% - 210px);
    }
  }
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>

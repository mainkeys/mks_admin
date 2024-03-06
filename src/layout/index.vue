<!--
 * @Author: mainkeys
 * @Date: 2024-03-04 03:13:32
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-06 20:49:08
 * @FilePath: \mks_admin\src\layout\index.vue
 * @Description: 布局
-->
<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左侧 menu -->
    <sidebar id="guide-sidebar" class="sidebar-container" />
    <!-- :style="{ backgroundColor: $store.getters.cssVar.menuBg }" -->
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
        <!-- tags -->
        <!-- <tags-view id="guide-tags"></tags-view> -->
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>

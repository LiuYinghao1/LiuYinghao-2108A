<template>
  <div class="wapper">
    <ment-tree :menu="menuList"></ment-tree>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import MentTree from './MentTree'
const menuList = reactive([
  {
    title: '个人中心',
    path: '/profile'
  },
  {
    title: '用户',
    children: [
      {
        title: '员工管理',
        path: '/staff',
        children: [
          {
            title: '市场员工'
          },
          {
            title: '研发员工'
          }
        ]
      },
      {
        title: '角色列表',
        path: '/role',
        children: [
          {
            title: '用户角色'
          },
          {
            title: '员工角色'
          }
        ]
      },
      {
        title: '权限列表',
        path: '/premisson'
      }
    ]
  },
  {
    title: '文章',
    children: [
      {
        title: '文章排名',
        path: '/article'
      },
      {
        title: '创建文章',
        path: '/create'
      }
    ]
  }
])
</script>
<style lang="scss" scoped>
// .wapper {
//   background-color: #304156;
//   width: 210px;
//   height: 100%;
// }
p {
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
  font-size: 24px;
}
</style>

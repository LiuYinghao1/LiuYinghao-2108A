<template>
  <div class="navbar">
    <div class="nav-top">
      <div class="nav-left">left</div>
      <div class="nav-right">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar
              shape="square"
              :size="50"
              src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
            />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="home">首页</el-dropdown-item>
              <el-dropdown-item command="profile">课程主页</el-dropdown-item>
              <el-dropdown-item command="logout" divided
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="nav-bottom">
      <span>个人中心</span>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()

const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})

const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout' :
      handleLogout()
      break
  }
}

const handleToHome = () => {
  router.push('/')
}

const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  overflow: hidden;
  padding: 0 20px;
  height: 100px;
  line-height: 100px;
  .nav-top {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px #f3f4f5 solid;
  }
  .nav-bottom {
    height: 40px;
    line-height: 40px;
    background-color: pink;
  }
}

.nav-left {
  float: left;
}
.nav-right {
  float: right;
  margin-top: 5px;
}
.el-avatar {
  background: none;
}
</style>

<template>
    <div class="layout">
        <header class="header" style="background-image: url('/images/header.jpg')">
            <h1 class="title">Lxcan</h1>
            <p class="desc">欢迎来到lxcan的个人博客。</p>
            <div class="btn-group">
                <el-button class="btn">
                    <a href="https://github.com/luxiancan" target="blank">GitHub主页</a>
                </el-button>
                <el-button class="btn">
                    <a href="">博客源码</a>
                </el-button>
            </div>
        </header>
        <main class="main">
            <aside class="aside">
                <Sidebar />
            </aside>
            <div class="content">
                <slot/>
            </div>
        </main>
        
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
    name: 'DefaultLayout',
    components: {
        Sidebar
    },

}
</script>

<style scoped>
    .layout {
        width: 100%;
        height: 100%;
        min-height: 100vh;
    }
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 400px;
        color: #fff;
        background-position: center;
    }
    .title {
        margin: 0 0 10px;
        font-size: 50px;
    }
    .btn-group {
        margin-top: 30px;
    }
    .main {
        position: relative;
        margin: 20px auto 0;
        width: 1024px;
    }
    .aside {
        position: absolute;
        top: 0;
        left: 0;
        width: 220px;
        padding: 20px;
        border: solid 1px #e6e6e6;
    }
    .content {
        padding-left: 240px;
        padding-bottom: 50px;
        /* border: solid 1px #e6e6e6; */
    }
</style>

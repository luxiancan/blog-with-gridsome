<template>
    <div class="layout">
        <header class="header" :style="{
                backgroundImage: `url(${ GRIDSOME_API_URL + general.cover.url })`
            }">
            <h1 class="title">{{ general.title }}</h1>
            <p class="desc">{{ general.subtitle }}</p>
            <div class="btn-group">
                <el-button class="btn">
                    <a href="https://github.com/luxiancan" target="blank">GitHub主页</a>
                </el-button>
                <el-button class="btn">
                    <a href="https://github.com/luxiancan/blog-with-gridsome" target="blank">博客源码</a>
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
  allStrapiGeneral {
    edges {
      node {
        id
        title
        subtitle
        cover {
          url
        }
      }
    }
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
    computed: {
        general() {
            return this.$static.allStrapiGeneral.edges[0].node
        }
    },
    // mounted () {
    //     console.log(this.general);
    // }
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
        background-color: #837bd0;
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

<template>
    <div class="side-bar">
        <el-menu class="el-menu-vertical-demo" :router="true">
            <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.path"
                :class="{ 'is-active': item.path === $route.path }">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data () {
        return {
            menuList: [
                {
                    path: '/',
                    title: '最新动态',
                    icon: 'el-icon-star-off'
                },
                {
                    path: '/posts',
                    title: '博客列表',
                    icon: 'el-icon-edit-outline'
                },
                {
                    path: '/tags',
                    title: '标签列表',
                    icon: 'el-icon-price-tag'
                },
                {
                    path: '/readme',
                    title: 'README.md',
                    icon: 'el-icon-document'
                },
            ]
        }
    },
    mounted () {
        // console.log(this.$route);
    },
    methods: {
        selectMenu (index) {
            this.$router.push(index)
        }
    }
}
</script>

<style>

</style>
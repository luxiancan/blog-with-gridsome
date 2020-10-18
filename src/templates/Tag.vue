<template>
    <Layout>
        
        <header class="tag-header">
            <el-button class="btn" type="primary">
                <g-link to="/tags">返回标签列表</g-link>
            </el-button>
        </header>
        

        <section>
            <h2>{{ tag.title }}</h2>
            <div class="tag-time">
                <span>创建时间：{{ tag.created_at | date }}</span>&nbsp;&nbsp;
                <span>更新时间：{{ tag.updated_at | date }}</span>
            </div>
            <p>博客列表：</p>
            <div class="article-item" v-for="post in tag.posts" :key="post.id">
                <g-link :to="`/post/${post.id}`">{{ post.title }}</g-link>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query ($id: Int) {
  tag: strapiTag (id: $id) {
    id
    title
    created_at
    updated_at
    posts {
      id
      title
    }
  }
}
</page-query>

<script>
export default {
    name: 'TagPage',
    computed: {
        tag () {
            return this.$page.tag
        }
    },
    mounted () {
        console.log(this.$page);
    }
}
</script>

<style scoped>
    .tag-header {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }
    .tag-time {
        margin-bottom: 16px;
        font-size: 13px;
        color: #888;
    }
    .article-item {
        margin-bottom: 20px;
    }
</style>
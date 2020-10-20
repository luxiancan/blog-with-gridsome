<template>
    <Layout>
        
        <header class="post-header">
            <el-button class="btn" type="primary">
                <g-link to="/posts">返回博客列表</g-link>
            </el-button>
        </header>
        
        <article>
            <h1>{{ post.title }}</h1>
            <ul class="tags-content">
                <li class="tag-item" v-for="tag in post.tags" :key="tag.id" @click="goTagPage(tag.id)">
                    {{ tag.title }}
                </li>
            </ul>
            <div class="article-time">
                <span>创建时间：{{ post.created_at | date }}</span>&nbsp;&nbsp;
                <span>更新时间：{{ post.updated_at | date }}</span>
            </div>
            <div class="article-cover" v-if="post.cover" :style="{ width: post.cover.width + 'px' }">
                <img :src="GRIDSOME_API_URL + post.cover.url" alt="">
            </div>
            <div v-html="articleBody"></div>
        </article>
    </Layout>
</template>

<page-query>
query ($id: Int) {
  post: strapiPost (id: $id) {
    id
    title
    content
    is_publish
    published_at
    created_at
    updated_at
    tags {
      id
      title
    }
    cover {
      url
      width
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'

export default {
    name: 'PostPage',
    data () {
        return {
            articleBody: ''
        }
    },
    computed: {
        post () {
            return this.$page.post
        }
    },
    mounted () {
        const md = new MarkdownIt()
        this.articleBody = md.render(this.post.content)
    },
    methods: {
        goTagPage (id) {
            this.$router.push(`/tag/${id}`)
        }
    }
}
</script>

<style scoped>
    .post-header {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }
    .tags-content {
        margin: 0 0 10px 0;
        padding: 0;
        list-style: none;
    }
    .tag-item {
        display: inline-block;
        margin-right: 6px;
        line-height: 22px;
        padding: 0 6px;
        border-radius: 2px;
        font-size: 12px;
        color: #004a2e;
        background-color: rgba(0,150,94,.2);
        cursor: pointer;
    }
    .article-time {
        margin-bottom: 16px;
        font-size: 13px;
        color: #888;
    }
    .article-cover {
        max-width: 100%;
        /* height: 200px; */
    }
    .article-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
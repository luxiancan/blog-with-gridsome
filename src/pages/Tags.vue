<template>
    <Layout>
        <div class="tags-container">
            <ul class="tags-content">
                <li class="tag-item" v-for="edge in $page.tags.edges" :key="edge.node.id" @click="goDetails(edge.node.id)">
                    {{ edge.node.title }}
                    <span>({{ edge.node.posts.length }})</span>
                </li>
            </ul>
        </div>
    </Layout>
</template>

<page-query>
query {
  tags: allStrapiTag {
    edges {
      node {
        id
        title
        posts {
          title
        }
      }
    }
  }
}
</page-query>

<script>
export default {
    name: 'TagsPage',
    mounted () {

    },
    methods: {
        goDetails (id) {
            this.$router.push(`/tag/${id}`)
        }
    }
}
</script>

<style scoped>
ul,
li {
    margin: 0;
    padding: 0;
    list-style: none;
}
.tags-container {
    padding: 30px 20px;
}
.tags-content {
    display: flex;
    flex-wrap: wrap;
}
.tag-item {
    margin: 0 12px 12px 0;
    padding: 6px 12px;
    line-height: 24px;
    border-radius: 2px;
    font-size: 16px;
    background-color: rgba(1,126,102,0.08);
    color: #017e66;
    cursor: pointer;
    transition: all .2s;
}
.tag-item:hover {
    background-color: #017e66;
    color: #fff;
}
</style>
<template>
    <Layout>
        <div v-html="readme.content"></div>
    </Layout>
</template>

<page-query>
query {
  allReadme {
    edges {
      node {
        id
        path
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
    name: 'ReadmePage',
    computed: {
        readme () {
            return this.$page.allReadme.edges[0].node
        }
    },
    mounted () {
        console.log(this.$page);
    }
}
</script>

<style scoped>

</style>
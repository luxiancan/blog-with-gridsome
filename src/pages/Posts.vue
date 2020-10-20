<template>
    <Layout>
        
        <el-card shadow="hover" v-for="(edge, index) in $page.posts.edges" :key="'p'+index" style="margin-bottom: 20px">
            <div slot="header">
                <el-row>
                    <el-col :span="16">
                        <span class="post-title" @click="goDetails(edge.node.id)">
                            <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{edge.node.title}}
                        </span>
                    </el-col>
                    <!-- <el-col :span="8">
                        <div style="text-align: right;">
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-edit"></el-button>
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-delete"></el-button>
                        </div>
                    </el-col> -->
                </el-row>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                最近更新 {{edge.node.updated_at | date}}
            </div>
            <ul class="tags-content">
                <li class="tag-item" v-for="tag in edge.node.tags" :key="tag.id" @click="goTagPage(tag.id)">
                    {{ tag.title }}
                </li>
            </ul>
        </el-card>

        <el-pagination
            class="page-container"
            background
            layout="prev, pager, next"
            :page-size="2"
            :total="$page.posts.pageInfo.totalPages * 2"
            @current-change="pageChange">
        </el-pagination>
    </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        created_at
        updated_at
        tags {
          id
          title
        }
      }
    }
  }
}
</page-query>

<script>
export default {
    name: 'PostsPage',
    mounted () {
        console.log(this.$page);
    },
    methods: {
        pageChange (page) {
            if (page === 1) {
                this.$router.push(`/posts`)
            } else {
                this.$router.push(`/posts/${page}`)
            }
        },
        goDetails (id) {
            this.$router.push(`/post/${id}`)
        },
        goTagPage (id) {
            this.$router.push(`/tag/${id}`)
        }
    }
}
</script>

<style scoped>
    .post-title {
        color: #1e6bb8;
        cursor: pointer;
    }
    .tags-content {
        height: 22px;
        margin: 10px 0 0 0;
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
    .page-container {
        text-align: center;
    }
</style>
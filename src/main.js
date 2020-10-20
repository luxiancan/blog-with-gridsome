// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '~/assets/css/normalize.css'
import DefaultLayout from '~/layouts/Default.vue'
import dayjs from 'dayjs'


export default function (Vue, { router, head, isClient }) {
  Vue.use(ElementUI)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // {{ 表达式 | 过滤器 }}
  Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(value).format(format)
  })

  Vue.mixin({
    data () {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
}

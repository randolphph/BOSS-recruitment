// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/rem'
import './assets/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Swipe, SwipeItem,NavBar,Icon,Sticky,Tabbar, TabbarItem,PullRefresh,Toast,Loading,
  Area,Grid, GridItem,ActionSheet

  } from 'vant';


Vue.config.productionTip = false
Vue.use(Button).use(Swipe).use(SwipeItem).use(NavBar).use(Icon).use(Sticky)
   .use(Tabbar).use(TabbarItem).use(PullRefresh).use(Toast).use(Loading)
   .use(Area).use(Grid).use(GridItem).use(ActionSheet)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

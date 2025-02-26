import './tailwind.css'
import DefaultTheme from 'vitepress/theme'
// import Demo from "./components/demo/index.vue";
import Demo from './components/demo.vue'
import EnumTable from './components/enumTable.vue'
import MyLayout from './components/MyLayout/index.vue'
// import API from './components/API/index.vue'
// import 'goal-design/fund_pro.css'
import './vars.css'
export default {
    ...DefaultTheme,
    Layout: MyLayout,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        ctx.app.component('VPDemo', Demo)
        ctx.app.component('VPEnum', EnumTable)
        // ctx.app.component('API', API)
    },
}

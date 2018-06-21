<template>
    <div>
    
        <router-view />

    <div id="footer" class="border-t">
      <ul class="flex-wrap">
        <li  @click="handleNav('frame0')" :class="{'flex-con': true, 'active': routerName === 'frame0' }">
          <span>首页</span>
        </li>
        <li  @click="handleNav('frame1')" :class="{'flex-con': true, 'active': routerName === 'frame1' }">
          <span>主题投资</span>
        </li>
        <li  @click="handleNav('frame2')" :class="{'flex-con': true, 'active': routerName === 'frame2' }">
          <span>自选</span>
        </li>
        <li @click="handleNav('frame3')" :class="{'flex-con': true, 'active': routerName === 'frame3' }">
          <span>龙虎榜</span>
        </li>
        <li @click="handleNav('frame4')" :class="{'flex-con': true, 'active': routerName === 'frame4' }">
          <span>资讯</span>
        </li>
      </ul>
    </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {

    data(){
        return {
            routerName: 'frame0'

        }
    },

    mounted(){
        this.requestMarket();
    },


    methods: {
        ...mapActions(['requestMarket']),
        handleNav(router){
            this.routerName = router;
            this.$router.push({
                path: `/${router}`
            })
        }
    }

};
</script>

<style>
</style>

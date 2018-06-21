<template>
        <div>
            <div class="min">
        <i class="user-btn" id="loginBtn"></i>
        <i class="search-btn" ></i>
    </div>
    <!-- 默认绿色 -->
    <ul class="box" id="sectionExponential" v-if="getMarket">
        <li v-for="market in getMarket" :class="market.changeRate>0?'hot':''">
        <h3> {{market.stockName}}</h3>
        <h4> {{toFixed(market.currentPoint)}} </h4>
        <p>
        <span>  {{toFixed(market.currentPrice)>0?'+'+toFixed(market.currentPrice):toFixed(market.currentPrice)}} </span>
        <span>  {{toFixed(market.changeRate)>0?'+' + toFixed(market.changeRate):toFixed(market.changeRate)}}%</span>
        </p>
        </li>
    </ul>
    <div class="txt-inlet">
        <a href="#" class="inforBtn" data-infor="3">独家内参</a>
        <a href="#" onclick="openWindow('businessDepartment',{},'push')">游资动向</a>
        <a href="#" class="inforBtn" data-infor="4">复盘笔记</a>
        <a href="#" class="inforBtn" data-infor="5">智能股库</a>
    </div>
    <!-- 今日领涨/跌主题 -->
    <div class="theme">
        <div class="title">
        <p id="tabBox">
            <span class="active">今日领涨主题</span>
            <span>今日领跌主题</span>
        </p>
        <div class="box-btn">
            <div class="more-btn" onclick="openWindow('moreThemeRankings',{},'push')"></div>
        </div>
        </div>
        <ul class="rise" id="upTheme"></ul>
        <ul class="rise rise-down" id="duTheme"></ul>
    </div>
    <!-- 最新资讯 -->
    <div class="info">
        <div class="title">最新资讯</div>
        <div id="newsList"></div>
    </div>
    <a href="#" class="btn-more-news">点击查看更多资讯</a>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {

        }
    },

    computed: {
        ...mapGetters(['getMarket', 'getLead', 'getInfo'])
    },


    methods: {
        toFixed(num){
        
            // let isNaN = isNaN(num * 1);
            if(!isNaN(num * 1)){

                return num.toFixed(2)
            }else{
                return '';
            }
        }
    }

};
</script>




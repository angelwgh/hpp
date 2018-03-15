<template>
  <div class="block banner" @click="next">
    <el-carousel trigger="click"
                 arrow="never"
                 :height="this.windowSize.height"
                 ref="carousel"
                 :autoplay="false">
      <el-carousel-item v-for="img in imgs" :key="img">
        <img :src="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    data () {

      return {
        imgs:[
          "/static/images/banner01.jpg",
          "/static/images/banner02.jpg"
        ],
        step:0,
        windowSize:{
          width:'0',
          height:'0'
        }
      }
      
    },
    computed: {
      bannerBoxWidth () {
        // console.log(this)
        return this.imgs.length * this.windowSize.width + 'px'
      }
    },
    methods: {
      getWindowSize() {
        // console.log(window.innerWidth)
        this.windowSize.width = window.innerWidth + 'px';
        this.windowSize.height = window.innerHeight + 'px';
        // console.log(this.windowSize)
      },
      next(){
        if(this.$refs.carousel.activeIndex >= (this.imgs.length -1)){
          return
        }
        this.$refs.carousel.next()
        // console.log(this.$refs.carousel.activeIndex)
      }
    },
    mounted () {
      this.getWindowSize()
    }
  }
</script>
<style>
  .banner{
    width: 100%;
    height: 100%;
  }

  .banner img{
    display: block;
    width: 100%;
    height: 100%;
  }

  .bannerbox li {
    float: left;
  }

  .banner .el-carousel__button{
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
</style>
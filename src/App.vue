<template>
  <div id="app">
    <transition name="slide-left">
       <router-view class="main-route"/>
    </transition>
   
  </div>
</template>

<script>
export default {
  name: 'hpp'
}
</script>

<style>
#app ,.main-route{
  width: 100%;
  height: 100%;
}
</style>

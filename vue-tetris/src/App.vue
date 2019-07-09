<template>
  <div id="app" :style="size">
    <div class="rect" :class="drop?'drop':''">
    </div>
    <Guide/>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './app.less';
@import './loader.less';
</style>
<script src="./app.js"></script>

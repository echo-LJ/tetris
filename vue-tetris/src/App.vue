<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import app from './app.js'
export default {
  name: 'App',
  mixins: [app]
}
</script>

<style lang="less">
@import './app.less';
@import './loader.less';
</style>

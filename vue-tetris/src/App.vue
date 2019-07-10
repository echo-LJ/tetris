<template>
  <div id="app" :style="size">
    <div class="rect" :class="drop?'drop':''">
    </div>
    <Keyboard :filling='filling' />
    <Guide/>
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
<script src="./pi.js"></script>

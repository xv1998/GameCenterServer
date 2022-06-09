<template>
  <div id="app">
    <FixHeight />
  </div>
</template>

<script>
import FixHeight from './pages/FixHeight'

export default {
  name: 'App',
  components: {
    FixHeight
  }
}
</script>
<style lang="scss">
body{
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
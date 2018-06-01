<template>
  <div class="__content" ref="container">
    本页为总览待开发
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    setHeight() {
      let h = document.documentElement.clientHeight || document.body.offsetHeight;
      this.$refs.container.style.minHeight = h - 60 - 80-40 +'px';
    },
  },
  mounted(){
    this.setHeight();
  }
}
</script>

<style lang="css">

</style>

<template>
  <div>
    <TheHeader/>
      <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from '~/components/common/TheHeader';
  import TheFooter from '~/components/common/TheFooter';

  export default{
    components:{
      TheHeader,
      TheFooter
    }
  }
</script>
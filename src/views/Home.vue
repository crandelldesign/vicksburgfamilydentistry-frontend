<template>
  <div class="home">
    <SectionIntro></SectionIntro>
    <SectionServices></SectionServices>
    <SectionContactUs></SectionContactUs>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionIntro from '@/components/SectionIntro.vue'
import SectionServices from '@/components/SectionServices.vue'
import SectionContactUs from '@/components/SectionContactUs.vue'
export default {
  name: 'Home',
  components: {
    SectionIntro,
    SectionServices,
    SectionContactUs
  }
}
</script>

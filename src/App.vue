<template>
   <NavBarComp />
  <router-view />
  <FooterComp />
</template>
<script>
import NavBarComp from "./components/NavbarComp.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  components: { NavBarComp, FooterComp },
};
</script>

<style src="@/assets/stylesheet/style.css">
</style>

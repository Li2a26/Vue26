<template>
    <div v-if="projects" class="projects py-5">
        <ProjectComp :project="projects"/>
    </div>
    <div v-else>loading</div>
</template>
<script>
    import ProjectComp from '@/components/ProjectComp.vue'
    export default {
        computed: {
            projects() {
                return this.$store.state.projects
            }
        },
        mounted() {
            this.$store.dispatch("fetchProjects")  
        },
        components:{ProjectComp}
    }
</script>
<style scoped>
  .projects {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 920px) {
    .projects {
        margin-bottom: 5rem;
    }
  }
</style>
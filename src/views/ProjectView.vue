<template>
    <div v-if="projects" class="projects row">
        <ProjectComp :project="projects" class="my"/>
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
    /* display: flex;
    flex-wrap: wrap;
    margin-bottom: 5rem; */
  }
  .my {
    margin-block: 3rem;
  }
  @media screen and (max-width: 920px) {
    .projects {
        margin-bottom: 5rem;
        padding-block: 5rem;
    }
  }
</style>
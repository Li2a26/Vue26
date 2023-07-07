<template>

<div class="container" id="skill">
    <div class="row">
      <div class="col">
        <h1>SKILLS</h1>
      </div>
    </div>
    <div class="row">
        <div class="col" id="cards">
          <div class="m-2" v-for="skill in skills" :key="skill.id" style="width: 10rem;">
              <img :src="skill.img" class="card-img-top" :alt="skill.id">
              <div class="progress mt-5" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 25%">{{skill.rate}}</div>
                </div>
                <!-- <p class="card-text">{{skill.rate}}</p> -->
            </div>
        </div>
        <div class="col-6">
          <div id="edu">
            <h1>EDUCATION</h1>
            <div class="card" v-for="education in Education" :key="education.id">
                
                <div class="card-body">
                  <p class="card-text">{{education.name}}</p>
                  <p class="card-text">{{education.desc}}</p>
                  <p class="card-text ">{{education.periods}}</p>
                </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>

    export default {
        computed: {
            Education() {
                return this.$store.state.Education
            },
            skills() {
                return this.$store.state.Skills
            }
        },
        mounted() {
            this.$store.dispatch("fetchEducation")
            this.$store.dispatch("fetchSkills")  
        },
        components:{}
    }
</script>

<style scoped>
#cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
</style>
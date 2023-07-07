<template>
  <!-- <div class="container-fluid d-flex justify-content-center">
        <div class="container" v-if="testimonials">
          <div class="row">
          <div
            v-for="item in testimonials" :testimonial="item"
            :key="item.id"
            class="col testimonials"
            data-aos="fade-right"
            data-aos-duration="750"
          >
           
              <img :src="item.img" :alt="item.title" id="testo" />
              <div class="container">
                <div id="body">
                  <h6 class="nam">{{ item.name }}</h6>
                  <p>{{ item.testimony }}</p>
                </div>
              </div>
             </router-link> -->
  <!-- </div>
        </div>
      </div>
      <div v-else>loading</div>
    </div>  -->
  <div class="container-fluid py-5 ">
      <div class="row justify-content-center">
          <div
          class="testimonials"
          v-for="item in testimonials"
          :testimonial="item"
          :key="item.id"
          data-aos="fade-right"
          data-aos-duration="750"
          >
          <div class="container">
        <div class="card" >
          <img :src="item.img" class="card-img-top" :alt="item.title" />
          <div class="card-body">
            <h6 class="nam">{{ item.name }}</h6>
            <p class="card-text">
              {{ item.testimony}}
            </p>
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
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>
<style scoped>
.col {
  width: 100% !important;
}

p {
  text-decoration: none !important;
}
.testimonials {
  width: 400px;
}
.row {
  width: 100% !important;
}

.container {
  margin: 0 !important;
}

a {
  width: 100%;
}

#testo {
  width : 380px;
  /* height: 30rem; */
}
#body {
  height: 23rem;
  margin: 0 !important;
}

.col {
  box-sizing: border-box;
  width: 300px !important;
  /* height: 300px; */
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
  padding-bottom: 50px;
}
.col:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.col:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
</style>
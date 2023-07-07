<template>
  <div class="container">
    <!-- <div class="row ">
      <div class="col-md-4">
        <div class="card m-3" style="width: 20rem">
          <router-link :to="{ name: 'projects', params: { id: project.id } }">
            <img :src="project.img" :alt="project.title" id="mbuwa" />
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a class="btn btn-primary" href="">View Code</a>
              <a class="btn btn-primary">View project</a>
            </div>
          </router-link>
        </div>
      </div>
    </div> -->
    <div class="row justify-content-center gap-3">
        <div class="card m-5 pb-5 box" style="width: 20rem" v-for="project in project" :key="project.id">
          <div :to="{ name: 'projects', params: { id: project.id } }">
            <img :src="project.img" :alt="project.title" id="pro" class="image mb-5" />
            <div class="card-body back">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text desc">{{ project.description }}</p>
              <div class="link-wrapper">
                <a class="btn btn-primary" :href="project.github"  target="_blank">View Code</a>
                <a class="btn btn-primary" :href="project.netlify" target="_blank">View project</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>

  <br>

</template>
<script>
export default {
  props: ["project"],
};
</script>
<style>
#pro {
  width: 300px !important;
  height: 290px !important;
  margin-bottom: 30%;
}
/* #card {
  width: 300px;
  height: 250px;
} */
/* #mbuwa {
  width: 300px;
  height: 300px;
} */

.desc{
  font-size: 15px;
}
.link-wrapper{
  display: flex;
  justify-content: space-between;
}
.btn{
  text-decoration: none !important;
  color: lightpink;
}

.box {
    position: relative;
  width: 400px;
  height: 200px;
  background-color: transparent;
  }
  @media (max-width: 800px) {
    .box{
      width: 300px;
      height: 150px;
    }
  }
  .image {
    opacity: 1;
    width: 300px !important;
    height: 150px !important;
    background-size: cover;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
    padding: 20px;
  }

  .back {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 60%;
    left: 40%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  .box:hover .image {
    opacity: 0.3;
  }
  .box:hover .back {
    opacity: 1;
  }
  .back {
    color: #000;
    padding: 20px ;
    margin: 30px;
    width: 300px;
  }

</style>


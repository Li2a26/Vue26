<template>
  <main>
    <div class="p-5 text-center hero">
        <h1 class="m-5">I am Lisa Mbuwa</h1>
        <h1 class="m-5">An aspiring developer</h1>
        <router-link to="/about" class="btn">Get to know me&#8594;</router-link>
      </div>
  </main>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
<style>
main {
    background-image: url(https://i.postimg.cc/L5mD9xJx/great.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.btn {
    background-color: antiquewhite;

}
/* .p-5 {
    position: absolute;
    top:  30%;
    left: 29%;
} */
.btn:hover {
    background-color: lightpink !important;
}
.m-5 {
    color: lightcoral;
    font-weight: bolder;
    font-size: 50px !important;
    margin-bottom: 10px !important;

}
.text-center {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 35px;
}
.m-5 {
    color: lightcoral;
    font-weight: bolder;
    font-size: 50px;
    animation: backInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; 

}
main {
    height:110vh;
} 
main {
    height:110vh;
}

</style>



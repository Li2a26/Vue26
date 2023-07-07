<template>
  
  <nav class="navbar navbar-expand-lg bg-">
  <div class="container-fluid">
    <img src="https://i.postimg.cc/Jz8F5pgx/LM-removebg-preview.png" alt="Logo" width="70" height="70" class="d-inline-block align-text-top">
    <router-link class="navbar-brand links text-white" to="/"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav m-auto gap-3">
        <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/testimonials">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links fw-bold text-white" to="/Resume">Resume</router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {};
</script>
<style scoped >
.navbar {
  background-color:rgb(238,197,158);;
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}


.navbar-toggler {
  background-color: lightcoral;
}




.links {
  float: left;
  color: #f2f2f2 ;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px; 
}
.links:hover {
  color: lightpink;
}


button {
 border-radius: 10px;
 border-color:lightpink;
}
.active {
  background-color:antiquewhite;
}
</style>


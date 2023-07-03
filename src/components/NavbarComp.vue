<template>
  <!-- <nav class="topnav">
    <router-link class="active" to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav> -->
  <nav class="navbar navbar-expand-lg bg-body-" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">TESTIMONIALS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">EDUCATION</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MORE
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">RESUME</a></li>
            <li><a class="dropdown-item" href="#">EXPERIENCE</a></li>
          </ul>
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
  background-color:rgb(168, 104, 28);
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

router-link {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.active {
  background-color:antiquewhite;
}
</style>

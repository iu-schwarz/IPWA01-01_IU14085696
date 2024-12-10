<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
</script>

<style scoped>
nav {
  padding: 10px 30px;
  background-color: silver;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0;
}

li {
  font-size: 18px;
}
</style>
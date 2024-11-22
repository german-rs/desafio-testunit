<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul> 
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav{
  margin-bottom: 2em;
}

ul{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  gap: 1em;
  padding: 1em 0;
}

li{
  list-style: none;
  margin: 0;
}

li a{
  text-decoration: none;
  color: #374151;
  padding: 1em;
  transition: all .5s ease;
}

a:hover{
  background: #374151;
  color: #f3f4f6;
}
</style>

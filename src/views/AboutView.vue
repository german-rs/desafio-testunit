<script>
import About from '@/components/About.vue';
import Footer from '@/components/Footer.vue';
export default{
  components:{
    About, 
    Footer
  }
}
</script>

<template>
  <div>
    <header class="container">
        <h1>Acerca de Vue y Vitest</h1>
        <p>Descubre cómo Vue y Vitest trabajan juntos para facilitar 
          el desarrollo y las pruebas de tus aplicaciones web.
        </p>
    </header>
    <About/>
  </div>
  <Footer/>
</template>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
}

p{
  max-width: 600px;
}
</style>
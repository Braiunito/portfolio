<template>
  <div id="app">
    <Navbar/>
    <Hero id="s1" class="page"/>
    <AboutMe id="s2" class="page"/>
    <Projects id="s3" class="page"/>
    <Contact id="s4" class="page footer"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './pages/Hero.vue'
import AboutMe from './pages/AboutMe.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    AboutMe,
    Projects,
    Contact
  }
}
</script>
<template>
  <div class="nav desktop">
    <b-navbar id="nav-bar" toggleable class="desktop col-sm-11">
      
      <b-navbar-brand id="logo" href="#"><strong>{{logo}}</strong></b-navbar-brand>
      <b-navbar-toggle id="navbar-toggle-trigger" target="navbar-toggle-collapse" class="navVisibility">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" class="desktop bar" is-nav>
        <Items classes="nav-items"/>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
import Items from './Items.vue';

export default {
  name: 'Navbar',
  data(){
    return { logo: "</>" }
  },
  components: {
    Items
  },
  methods:{
    makeNavSolid() {
        var firstTime = true;
        var nav = document.getElementById('nav-bar');
        window.addEventListener('scroll', ()=>{
          var scrollPos = window.scrollY;
          var winHeight = window.innerHeight;
          var docHeight = document.documentElement.scrollHeight;
          var perc = 100 * scrollPos / (docHeight - winHeight);
          if (perc >= 9) {
            nav.classList.add('solid');
            nav.classList.remove('transparent');
            firstTime = false;
          } else if (perc != 0 && !firstTime) {
              nav.classList.add('transparent');
              nav.classList.remove('solid');
            }
        })
    }
  },
  mounted(){
    this.makeNavSolid();
  }
}
</script>
<style lang="scss" scoped>
#nav-bar {
  width: 100vw;
  height: 100%;
  opacity: 0.98;
  border-radius: 0 0 20px 20px;
  text-align: center;

  svg {
    color: white;
  }
}
.navVisibility {
  display: block;
}
.nav {
  z-index: 9999;
  position: -webkit-sticky; /* Safari */
  position: fixed;
  top: 0;
}

@media only screen and (min-width: 800px) {
.navVisibility {
  display: none !important;
}
  #nav-bar {
    height: 65px;
  }
  .desktop {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .desktop.bar {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  ul.items {
    display: flex;
    flex-direction: row !important;
    margin: 0 !important;
  }
}
</style>

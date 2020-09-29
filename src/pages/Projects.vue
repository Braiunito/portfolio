<template>
  <div class="projects">
    <div class="container d-flex flex-column align-items-center">
      <div v-for="(project, index) in projects"  :key="index">
        <MyProjects :alternate = '((index%2)==0) ? "flex-row" : "flex-row-reverse"'
                    :subtitle = 'project.subtitle'
                    :title = 'project.title'
                    :textExplaining = 'project.textExplaining'
                    :photoSub = 'project.photoSub'
                    :photoTitle = 'project.photoTitle'
                    :imgSrc = 'project.imgSrc'
                    :siteURL = 'project.siteURL' />
      </div>
    </div>
  </div>
</template>

<script>
import MyProjects from '../components/MyProjects.vue';
import json from '../assets/data/data.json';

export default {
  name: 'Projects',
  components: {
    MyProjects,
  },
  data(){
    return {
      projects: []
    }
  },
  beforeMount() {
    this.projects = JSON.parse(JSON.stringify(json))['projects'];
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

</style>

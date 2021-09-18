<template>
  <div class="about">
    <div class="container d-flex flex-column align-items-center">
        

        <div class="row d-flex justify-content-between align-items-center w-100 h-100 mt-5">
          <div class="col-lg-5 pt-5 d-flex flex-column justify-content-start align-items-start">
            <p class="text-spaced">- Experience</p>
            <h1 class="noSelectable font-weight-bold" id="textChanger">How long have I been in this business?</h1>
            <br>
            <p class="text-justify">
              Well, I've studied this area for <strong>more than 7 years</strong>. Since I was 15, 
              I've been studying programming on my own because it is something that always caught my attention, 
              I started with languages like <strong>C ++ and Java</strong>. When I started high school, 
              I chose a technical college and opted for the informatics specialization, 
              in the 3rd year I enrolled in the "introduction to programming" subject with <strong>Pascal, C++, PHP and Java</strong> and by my 6th academic year 
              I already had my <strong>degree in "Professional and personal informatic"</strong>, 2 local awards, 1 provincial award and a <strong>National recognition in programming</strong>
              delivered by the INET (National institute of technological education).
            </p>
          </div> 
          <div class="col-lg-5 pt-5 d-flex flex-column justify-content-start align-items-start">
            <p class="text-spaced">- Nowadays</p>
            <h1 class="noSelectable font-weight-bold" id="textChanger">Current background and work.</h1>
            <br>
            <p class="text-justify">
              I've been working for more than {{Math.trunc((getTimeFromStartAtJob/12))}} year in a small company called 42mate as a full stack web developer under the agile framework (Scrum), 
              fulfilling development, maintenance and software management tasks, as well as some business analyst tasks. Also I learned 
              about how to perform some infrastructure tasks. Basically as I work in a small company and the roles were not well distributed, 
              I had the opportunity to learn a little about each "role", thus being able to face any situation more easily. 
              Regarding to my studies I'm currently studying the career of "Computer science" in the "Siglo21" university.
            </p>
          </div> 
        </div>


        <div class="row d-flex justify-content-between align-items-center w-100 h-100 mt-4">
          <div class="col-lg-5 pt-5 d-flex flex-column justify-content-start align-items-start">
            <br>
            <p class="text-spaced">{{drefyus}}</p>
            <h1 class="noSelectable font-weight-bold" id="textChanger">Technologies stack</h1>
            <br>

            <ul class="techs d-flex justify-content-center flex-wrap p-0">
                <li v-for="(stack, index) in stacks" :key="index" class="pr-2">  
                  <StackPercent 
                    :percent='stack.percent' :tech='stack.name' 
                    :classes='stack.class' v-on:lastElement="stackHovered"
                    :lastElement='stacks.length/(index+1) == 1'/>
                </li>
            </ul> And much more...

          </div> 
          <div class="col-lg-5 pt-5 d-flex flex-column justify-content-start align-items-start">
            <br>
            <h1 class="noSelectable font-weight-bold" id="textChanger">Courses and extras.</h1>
            <br>
            
            <h4>Courses</h4>
            <p class="text-justify">
              <ul>
                <li>Informatics Orientation in the High School
                  <br>Sponsor: EET N24 Simon de Iriondo
                  <br>Duration: 6 years</li>
                <li>111Mil Programadores
                  <br>Sponsor: Argentina government
                  <br>Duration: 1 year</li>
                <li>Informatorio
                  <br>Sponsor: <a href="https://www.globant.com/" target="_blank">Globant</a> and <a href="https://poloitchaco.org.ar/" target="_blank">PoloIT</a>
                  <br>Duration: 1 year</li>
                <li>CS50: Web programming with python and Javascript
                  <br>Sponsor: Harvard university
                  <br>Duration: 5 months</li>
              </ul>
            </p>

            <h4>Extras</h4>
            <p class="text-justify">
              <ul>
                <li>I founded my own furniture business
                  <br>Name: 
                  <strong>MabElick 
                    <a class='pl-1' href="https://www.instagram.com/muebles_mabelick/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                    <a class='pl-2' href="https://www.facebook.com/mabelick/" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                    <a class='pl-2' :href="getImgUrl('inProgress.jpg')" target="_blank"><font-awesome-icon :icon="['fab', 'amazon']" /></a>
                  </strong>
                  <br>Sponsor: Myself
                  <br>Duration: {{getTimeFromFoundation}} months to Nowadays</li>
                <li>I'm currently coursing my university career
                  <br>Name: Computer Science
                  <br>University: Siglo21
                  <br>Duration: {{getTimeFromStartUniversity}} months. Currently in stand-by</li>
              </ul>
            </p>

          </div> 
        </div>


    </div>
  </div>
</template>

<script>
import StackPercent from '../components/StackPercent.vue';
import data from '../assets/data/data.json';

export default {
  name: 'AboutMe',
  components: {
    StackPercent,
  },
  data(){
    return {
      stacks: [],
      stackTypes: [],
      drefyus: '<- Competent To Proficient ->'
    }
  },
  computed: {
    getTimeFromFoundation() {
      return this.fromDateToNowadays("2020/06/05");
    },
    getTimeFromStartUniversity() {
      return this.fromDateToNowadays("2019/03/02", 6);
    },
    getTimeFromStartAtJob() {
      return this.fromDateToNowadays("2019/09/14");
    }
  },
  methods: {
    getImgUrl(pic) {
      let path = null;
      try {
          path = (pic != '' && pic != null) ? require('../assets/images/'+pic) : "";
      } catch (error) {
          path = require('../assets/images/404.png');
          console.error('Ups! the image: "'+pic+'" was not found on the server. Please contact with the developer!')
      }
      return path;
    },
    fromDateToNowadays(fromDate, yearsFormat = 12) {
      let startDate = new Date(fromDate);
      let nowTime = new Date(Date.now());
      let years = (nowTime.getFullYear() - startDate.getFullYear()) * yearsFormat;
      let timeElapsed = (nowTime.getMonth() + years) - startDate.getMonth();
      
      return timeElapsed
    },
    fillPercentage() {
      let circleStacks = document.getElementsByClassName('stack');
      circleStacks.forEach(element => {
        let value = element.getElementsByClassName('number')[0].innerHTML+'px';
        let fillPercent = element.getElementsByClassName('fillPercent')[0];
        let fillPercentTop = element.getElementsByClassName('fillPercent')[1];
        fillPercent.style = 'margin-top: calc(100px - '+value+');';
        fillPercentTop.style = 'margin-top: calc(100px - '+value+' - 2px);';
      });
    },
    decoratorClasses(func, stackTypes = this.stackTypes) {
      stackTypes.forEach(techs=> {
        techs.forEach(element => {
          func(element);
        });
      });
    },
    applyStackStyles(classToStyle) {
      this.decoratorClasses((element)=>{
        element.classList.add('noHovered');
        if (element.dataset.tech == classToStyle) {
          element.classList.remove('noHovered');
          element.classList.add('hovered');
        }
      });
    },
    disapplyStackStyles() {
      this.decoratorClasses((element)=>{
        element.classList.remove('noHovered');
        element.classList.remove('hovered');
      });
    },
    stackHovered(stackClass) {
      this.stackTypes = stackClass;

      // The listener for the mouse over
      this.decoratorClasses((element)=>{
        element.addEventListener("mouseover", ()=>{
          this.applyStackStyles(element.dataset.tech);
        });
      }, stackClass);

      // The listener for the mouse leave
      this.decoratorClasses((element)=>{
        element.addEventListener("mouseleave", ()=>{
          this.disapplyStackStyles(element.dataset.tech);
        });
      }, stackClass);
    }
  },
  beforeMount(){
    // Transforming the observer returned by the Json into a json and after that into a JS Object.
    this.stacks = JSON.parse(JSON.stringify(data))['stacks']
  },
  mounted(){
    this.fillPercentage();
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.techs {
  list-style-type:none;
}
.hovered {
  opacity: 1;   
}
.noHovered {
  opacity: 0.5;
}
</style>

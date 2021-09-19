<template>
  <div class="hero" style="display: flex; flex-direction: column">
    <div class="container">
      <div class="mainContent row d-flex align-items-center w-100 h-100 mx-0">
        <div class="col-lg-6 d-flex flex-column align-items-center">
          <div
            class="highlight noSelectable d-flex flex-column align-items-center"
          >
            <strong>Braian</strong>
            <strong class="lastName"><u>M</u>aciel</strong>
            <Socials class="w-100 pt-5" />
          </div>
        </div>
        <div
          class="col-lg-6 pt-5 d-flex flex-column justify-content-start align-items-start"
        >
          <p class="text-spaced">- Introduction</p>
          <h1 class="noSelectable font-weight-bold" id="textChanger">
            <span class="text-capitalize highlight">{{ text }},</span> based in
            Argentina.
          </h1>
          <br />
          <p class="text-justify">
            Passionate full stack web developer, young, full of energy and
            innovation. Willing to offer agile, scalable and dynamic solutions.
            Easy adaptation to changing environments. Looking for new
            challenges.
          </p>
        </div>
      </div>
      <div class="row w-100 d-flex justify-content-center"></div>
    </div>
  </div>
</template>

<script>
import Socials from "../components/Socials.vue";

export default {
  name: "Hero",
  data() {
    return {
      stacks: [
        "full-stack web developer",
        "back-end developer",
        "front-end developer",
        "Dev-Ops developer",
      ],
      text: null,
      time: 0,
    };
  },
  components: {
    Socials,
  },
  methods: {
    actionChange() {
      let time = this.time;
      this.time = time >= 3 ? 0 : time + 1;
      this.text = this.stacks[time];
    },
    changeText() {
      let delay = 5000;
      let text = document.getElementById("textChanger");
      let auto = setInterval(() => {
        this.actionChange();
      }, delay);

      text.addEventListener("click", () => {
        this.actionChange();
        clearInterval(auto);
        auto = setInterval(() => {
          this.actionChange();
        }, delay);
      });
    },
  },
  mounted() {
    this.text = this.stacks[0];
    this.changeText();
  },
};
</script>

<style lang="scss" scoped>
.mainContent {
  margin-top: 50px !important;
  padding-top: 50px !important;
}
.iconsHero {
  margin-top: 16px;
  padding-top: 50px;
}
.lastName {
  text-underline-position: under;
}
#textChanger {
  cursor: pointer;
  text-align: start;
}
.highlight {
  display: flex;
  widows: 100%;
  justify-content: center;
  strong {
    text-align: start;
    line-height: 110px;
    display: flex;
    justify-content: center;
    width: 50%;
    font-size: 8rem;
  }
}
.items {
  display: flex;
  flex-direction: row;
  margin: 0 !important;
  height: 50px;
}
h3 {
  padding: 40px 0 0;
}
ul {
  margin: 0;
  list-style-type: none;
  padding: 20px 0;
}
li {
  display: inline-block;
  padding: 0 10px;
}
a {
  color: #42b983;
}

@media only screen and (max-width: 800px) {
  .mainContent {
    margin-top: 0;
    padding-top: 0;
  }
  .highlight {
    display: flex;
    widows: 100%;
    justify-content: center;
    strong {
      text-align: start;
      width: 100%;
      line-height: 65px;
      font-size: 5rem;
    }
  }
}
</style>

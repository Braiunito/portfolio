<template>
    <div :data-tech="classes" :class="classes + ' hability d-flex flex-column justify-content-center align-items-center'">
        <h4>{{tech}}</h4>
        <span class="stack">
            <span class="percentage">%</span><span class="number noSelectable">{{percent}}</span>
            <span class="fillPercent top"></span>
            <span class="fillPercent back"></span>
        </span>
    </div>    
</template>

<script>
import data from '../assets/data/data.json';

export default {
    name: 'StackPercent',
    data() {
        return {
            stack: [],
            newClasses: [],
            techGroups: [],    
        }
    },
    props: {
        percent: String,
        tech: String,
        classes: String,
        lastElement: Boolean
    },
    methods: {
        renderClasses() {
            this.stack.forEach(e => {
                let type = e.class;
                if (this.newClasses.includes(type) != true) {
                    this.newClasses.push(type);
                    let classToStyle = document.getElementsByClassName(type);
                    this.techGroups.push(classToStyle);
                }
            });
        },
        checkLastElement() {
            if (this.lastElement == true) {
                this.$emit('lastElement', this.techGroups);
            }
        }
    },
    beforeMount() {
        this.stack = JSON.parse(JSON.stringify(data))['stacks'];
    },
    mounted() {
        this.renderClasses();
        this.checkLastElement();
    }
}
</script>

<style lang="scss" scoped>
.hability {
    width: 130px;
    height: 150px;
}
.stack {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 7px solid;
  border-radius: 100%;
  width: 80px;
  height: 80px;
}
.number,
.percentage {
  position: relative;
  z-index: 1;
}
.fillPercent {
  width: 80px;
  height: 66px;
  border-radius: 34%;
  position: absolute;
  background-color: #da468b;
  &.back {
    margin-left: -4px;
    animation: balanced 1s alternate infinite;
  }
  &.top {
    margin-right: -13px;
    animation: balanced 1s alternate infinite;
    animation-delay: 0.5s;
  }
}
.hovered {
    .fillPercent {
        animation: balanced 1s alternate infinite, fillContainer 2s;
    }
}
</style>
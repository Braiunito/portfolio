<template>
    <b-navbar-nav :class="defaultClass+classes">
        <b-nav-item class="scrollTo" data-section='s1'>Home<span class="dot hide">.</span></b-nav-item>
        <b-nav-item class="scrollTo" data-section='s2'>About Me<span class="dot hide">.</span></b-nav-item>
        <b-nav-item class="scrollTo" data-section='s3'>Projects<span class="dot hide">.</span></b-nav-item>
        <b-nav-item class="scrollTo" data-section='s4'>Contact<span class="dot hide">.</span></b-nav-item>
        <b-nav-item class="scrollTo" href='./cv.pdf' target="_blank">CV<span class="dot hide">.</span></b-nav-item>
    </b-navbar-nav>
</template>

<script>


export default {
    name: 'Items',
    data() {
        return {
            defaultClass: 'ml-auto items ',
        }
    },
    props: {
        classes: String
    },
    methods: {
        scrollTo() {
            var initScroll = window.scrollY;
            window.scroll({top: 0, left: 0});
            var scrolls = document.getElementsByClassName("scrollTo");
            var sections = [];

            scrolls.forEach(element => {
                var position = document.getElementById(element.dataset.section);
                position = (position != null) ? position.offsetTop : 9999;
                var section = [element.dataset.section, position];
                sections.push(section);

                element.addEventListener("click", ()=>{
                    let move = sections.find((e)=>{ return e[0] == element.dataset.section });
                    window.scroll({top: move[1], left: 0, behavior: 'smooth'});
                });
            window.scroll({top: initScroll, left: 0})
            });

            this.itemSelected(window.scrollY, sections);
            window.addEventListener("scroll", ()=>{
                this.itemSelected(window.scrollY, sections);
            });
            console.log(sections);
        },
        detectRezise() {
            window.addEventListener("resize", ()=>{
                this.scrollTo()
            });
        },
        itemSelected(pos, sec) {
            var navItems = document.getElementsByClassName('nav-items')[0];
            navItems = navItems.getElementsByClassName('nav-item');
            
            sec.forEach(e => {
                if (pos >= e[1]) {
                    this.removeAll(navItems);
                    let currentSection = null;
                    navItems.forEach( item => {
                        if (item.dataset.section == e[0]) {
                            currentSection = item;
                        }
                    });
                    currentSection.getElementsByTagName('a')[0].classList.add('selected');
                    currentSection.getElementsByTagName('span')[0].classList.add('selected');
                }
            });
        },
        removeAll(list) {
            list.forEach( e => {
                e.getElementsByTagName('a')[0].classList.remove('selected');
                e.getElementsByTagName('span')[0].classList.remove('selected');
            });
            
        }
    },
    mounted() {
        this.scrollTo();
        this.detectRezise();
    }
}
</script>

<style lang="scss" scoped>
ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
        display: flex;
        align-items: center;
        width: 122px;
        height: 35px;
    }
    a {
        margin: 0;
        padding: 0;
        min-width: 80px;
        display: flex;
        justify-content: flex-start;
        padding-left: 8px !important;
        animation: linkIn 0.5s forwards;
    }
    a.selected {
        color: white !important;
        font-size: 1.5rem !important;
        display: flex; 
        flex-direction: column; 
        line-height: 6px;
    }
    span.selected {
        display: block !important;
        color: #fbc45e;
        font-size: 3.2rem;
        margin-bottom: -10px;
    }
    li:hover a {
        animation: linkOut 0.5s forwards;
    }
}

ul.hero {
  li {
    justify-content: center;
  }
}

ul.nav-items {
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px 0;

  li {
    justify-content: center;
    align-items: center;
    transform: scale(1.1);
    a {
        font-weight: bold;
    }
  }
}

@media only screen and (max-width: 800px) {
    ul.nav-items {     
        li {
            margin-left: 30px;
            justify-content: flex-start !important;
        }
    }
    a.selected {
        flex-direction: row !important; 
    }
    span.selected {
        position: absolute;
        left: -10px;
        bottom: 38px;
    }
}
</style>
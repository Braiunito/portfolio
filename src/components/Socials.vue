<template>
    <div class="d-flex justify-content-center aling-items-center">
        <div class="icons col-sm-12 mt-3 d-flex justify-content-between">
            <a href="mailto:braiantablet@gmail.com" target="_blank"><font-awesome-icon :icon="['fab', 'google-plus-square']" /></a>
            <a href="https://wa.me/5493625209840" target="_blank"><font-awesome-icon :icon="['fab', 'whatsapp-square']" /></a>
            <a href="https://www.linkedin.com/in/braianarielmaciel/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a href="https://github.com/Braiunito" target="_blank"><font-awesome-icon :icon="['fab', 'github-square']" /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Socials'
}
</script>

<style lang="scss" scoped>
.icons {
    height: 50px;
    font-size: 1.8rem;
    margin: 0 !important;
  svg {
    animation: linkIn 0.5s forwards; 
  }
  svg:hover {
    animation: linkOut 0.5s forwards;
  }
}
</style>
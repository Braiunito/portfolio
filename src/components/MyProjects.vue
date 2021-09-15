<template>
    <!-- This component take 7 arguments:
    (alternate, subtitle, title, textExplaining, photoSub, photoTitle, imgSrc)

    1. alternate: That just its for put the text at the left side and the image at the right side or inverse to that.
    2. subtitle: Its the subtitle of the explanation.
    3. title: Its the title of the explanation.
    4. textExplaining: The text that explain the project.
    5. photoSub: The subtitle of the photo.
    6. photoTitle: The title of the photo.
    7. imgSrc: the path of the photo of the web project. -->
    <div>
        <!-- here you can swap with class flex-row and flex-row-reverse -->
        <div :class="'row d-flex '+alternate+' justify-content-between align-items-center w-100 h-100 mt-5'">
          <div class="col-lg-5 pt-5 d-flex flex-column justify-content-start align-items-start">
            <p class="text-spaced m-0">{{(subtitle != '') ? 'Role: '+subtitle : ''}}</p>
            <p v-if="tech" class="m-0">
                <small>{{(tech != '') ? 'Stack: '+tech : ''}}</small>
            </p>
            <h1 class="noSelectable font-weight-bold mt-2" id="textChanger"><a :href="siteURL" target="_blank">{{title}}</a></h1>
            <br>
            <p class="text-justify">
              {{textExplaining}}
            </p>
          </div> 
          <div class="col-lg-6 pt-5 d-flex flex-column justify-content-start align-items-start">
            <p class="text-spaced">{{(photoSub != '') ? '- '+photoSub : ''}}</p>
            <a class="noStyle" :href="siteURL" target="_blank">
                <h1 class="noSelectable font-weight-bold" id="textChanger">{{photoTitle}}</h1>
            </a>
            <span class="text-justify imgProject">
              <a :href="siteURL" target="_blank">
                <img :src="getImgUrl(imgSrc)" alt="Porject image">
              </a>
            </span>
          </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: "MyProjects",
    props: {
        alternate: String,
        subtitle: String,
        title: String,
        textExplaining: String,
        photoSub: String,
        photoTitle: String,
        imgSrc: String,
        siteURL: String,
        tech: String
    },
    methods: {
        getImgUrl(pic) {
            let path = null;
            try {
                path = (pic != '' && pic != null) ? require('../assets/images/pages/'+pic) : "";
            } catch (error) {
                path = require('../assets/images/404.png');
                console.error('Ups! the image: "'+pic+'" was not found on the server. Please contact with the developer!')
            }
            return path;
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    color: goldenrod !important;
}
a.noStyle {
    color: unset !important;
    text-decoration: none !important;
}
span {
    margin: 0 !important;
    padding: 0;
}
.imgProject {
    width: 100%;
    height: 100%;
    margin: 20px;
    img{
        margin: 0 !important;
        animation: imgIn 1s forwards;
        width: 100%;
        height: 100%;
        margin: 20px;
    }
    img:hover {
        animation: imgOut 1s forwards;
    }
}
</style>
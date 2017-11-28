var Cat = ({
    props:["id"],
    template: `
  <div >
  <div class="image"
   <img class="picture" src="http://kaifolog.ru/uploads/posts/2014-03/1396231060_020.jpg"/>
   </div>
  </div>
 `
})
var Dog = ({
    props:["id"],
    template: `
  <div >
   <img class="picture" src="http://zoo-dom.com.ua/upload/fotogallery/ru/20141125071441.jpg"/>
  </div>
 `
})
var Frog = ({
    props:["id"],
    template: `
  <div >
   <img class="picture" src="http://katyaburg.ru/sites/default/files/pictures/prikoly/prikolnye_lyagushki_i_gaby_foto_02.jpg"/>
  </div>
 `
})
var Selectenimal = ({
    template: `<div>
     <div class="select">
       <router-link class="link" :to="{ name:'cat' }">
          Cat
      </router-link>
     </div> 
     <div class="select">
       <router-link class="link" :to="{ name:'dog' }">
          Dog
      </router-link>
      </div>
      <div class="select">
      <router-link class="link" :to="{ name:'frog' }">
          Frog
      </router-link>
      </div>
      <router-view ></router-view>
              </div>`
})

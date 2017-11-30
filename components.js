const BaseDropdownMenu = ('dropdown-menu',{
    props:{
        options:{
            type:Array,
        }
    },
    data:function () {
        return {
            visibleStatus: false
        }
    },
    methods:{
        changeMenuVisibility: function ( event ) {
            this.visibleStatus = !this.visibleStatus

        },
        selectOptionHandler: function ( event ) {
            /*this.visibleStatus = false*/
            this.$parent.$emit ( 'menuSelect', event.target.innerHTML.trim() )
        },
        exitImg: function () {
            this.$parent.$emit ( 'exitimg')
        }
    },
    template:`
    <div>
       <div class='left-dropdown-menu-button'  @click="changeMenuVisibility">Select Animals</div>
       <div class="option-menu" v-if = "visibleStatus" >
           <div class="option-menu-drop" @click="selectOptionHandler" 
               v-for="item in options"
               :key="item" @mouseleave = "exitImg"
               :id="item"
            >
            <router-link  class="link" :to="{ name: 'baseDropdownMenu', params: { id: item }}">{{item}}</router-link></div>
       </div>
     <!--<router-view></router-view> -->
    </div>
    `
})

const Animal = ( 'show-img-items', {
    props:["optionSelect"],
    data:function () {
        return {
            visibleStatus1: true

        }
    },
    methods: {
        changeMenuVisibility1: function (event) {
            this.visibleStatus1 = !this.visibleStatus1
        }
    },
    template: `
  
   
      
    <img class="show-img" src="optionSelect" v-if="visibleStatus1" >`

})
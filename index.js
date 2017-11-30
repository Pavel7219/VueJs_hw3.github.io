var vm = new Vue({
    el:'#app',
    data:{
        mainMenuOptions:[
            "select cat",
            "select dog",
            "select frog"
        ],
        optionsText:foto,
        optionSelect:''
    },
    router,
    components:{
        'dropdown-menu':BaseDropdownMenu,
        'show-img-items':Animal
    },
})
vm.$on ( 'menuSelect', function ( val ) {
    this.optionSelect = this.optionsText [ val ]
    console.log(val)
})

vm.$on ( 'exitimg', function ( ) {
    this.optionSelect = "";
})
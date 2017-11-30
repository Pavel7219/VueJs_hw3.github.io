const router = new VueRouter({
    props:['id'],
    routes: [
        {
            path: '/:id',
            component: BaseDropdownMenu,
            props: true,
            name: "baseDropdownMenu",
            children: [

            ]
        }
    ]
})
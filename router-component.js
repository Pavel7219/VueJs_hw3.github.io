const router = new VueRouter({
    props:['id'],
    routes: [
        {
            path: '/:id',
            component: Selectenimal,
            props: true,
            name: "enimal",
            children: [
                {
                    path: '/:id/cat',
                    component: Cat,
                    props: true,
                    name: 'cat',
                },
                {
                    path: '/:id/dog',
                    component: Dog,
                    name: 'dog'

                },
                {
                    path: '/:id/frog',
                    component: Frog,
                    props: true,
                    name: 'frog',
                },

            ]
        }
       ]
})
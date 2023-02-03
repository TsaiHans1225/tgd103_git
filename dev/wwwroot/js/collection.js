
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            collections: [
                {
                    src: "./wwwroot/img/shopBag7.png",
                    title: 'PORTER SNACK PACK',
                    name: '托特包',
                    pno: '11716-00475',
                    color: '藍色',
                    price: 17050,
                    clid: 'clid0',
                },
                {
                    src: "./wwwroot/img/shopBag2.png",
                    title: 'PORTER BOOTH PACK',
                    name: '行李袋',
                    pno: '11716-00479',
                    color: '藍色',
                    price: 35200,
                    clid: 'clid1',
                },
                {
                    src: "./wwwroot/img/shopBag3.png",
                    title: 'PORTER SMOKY',
                    name: '行李袋',
                    pno: '11716-00478',
                    color: '棕色',
                    price: 26950,
                    clid: 'clid2',
                },
                {
                    src: "./wwwroot/img/shopBag4.png",
                    title: 'PORTER LIFT',
                    name: '公事包',
                    pno: '11716-00477',
                    color: '軍綠色',
                    price: 47300,
                    clid: 'clid3',
                },
                {
                    src: "./wwwroot/img/shopBag5.png",
                    title: 'PORTER SNACK PACK',
                    name: '行李袋',
                    pno: '11716-00471',
                    color: '軍綠色',
                    price: 17050,
                    clid: 'clid4',
                }
            ],
        }
    },
    methods: {
        delete1(e, r) {
            let temp = document.getElementById(r);
            // console.log(r);
            Swal.fire({
                title: '確定移除收藏?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '已成功移除'
                    )

                    $(`#clid${r}`).remove();
                }
            })
        },
        add1(e, r) {
            // console.log(e.src);
            Swal.fire({
                imageUrl: e.src,
                // icon: 'success',
                // text: 'Modal with a custom image.',
                title: '成功加入購物車 !',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'Custom image',
            })
        },
    }
}).mount('#app')

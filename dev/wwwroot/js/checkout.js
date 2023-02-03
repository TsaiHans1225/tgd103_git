
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            checkoutTexts: [
                {
                    src: "./wwwroot/img/shopBag1.png",
                    title: 'Sacoche type',
                    name: '波士頓包',
                    type: '新品上市',
                    color: '深藍色',
                    price: 4250,
                    subtotal: 4250,
                    amount: [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }],
                    dis: true,
                    listid: "listid0",


                },
                {
                    src: "./wwwroot/img/detailpic1.png",
                    title: 'LPORTER ALOOF',
                    name: '雙肩包',
                    type: '新品上市',
                    color: '黑色',
                    price: 5250,
                    subtotal: 5250,
                    amount: [{ val: 1 }, { val: 2 }, { val: 3 }],
                    dis: true,
                    listid: "listid1",

                },
                {
                    src: "./wwwroot/img/shopWallet1.png",
                    title: 'PORTER SPLENDOR',
                    name: '皮夾',
                    type: '贈品',
                    color: '深藍色',
                    price: 0,
                    subtotal: 0,
                    amount: [{ val: 1 }],
                    dis: true,
                    listid: "listid2",

                }
            ],
            prices: 9360,
            productPrice: 9500,
            dis: true,
            num: 3,
        }
    },
    methods: {
        add1(e, r) {

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: '已加入收藏',
                showConfirmButton: false,
                timer: 1000
            })

            // $(`#listid${r}`).remove();

        },
        delete1(e, r) {
            let temp = document.getElementById(r);
            // console.log(e.checkoutTexts[r].price);
            // console.log(this.prices-e.checkoutTexts[r].subtotal);

            // console.log(this.prices);
            Swal.fire({
                title: '確定刪除?',

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
                    this.prices = this.prices - e.checkoutTexts[r].subtotal;
                    if (this.prices < 0) {
                        this.prices = 0;
                    }
                    $(`#listid${r}`).remove();

                }
            })
        },
        change1(e, r) {
            let temp = document.getElementById(r).value
            this.num = Number(temp)
            e.checkoutTexts[r].subtotal = e.checkoutTexts[r].price * temp;
            let total = 0;
            this.checkoutTexts.forEach((e) => {
                total += e.subtotal;
                this.prices = total - 140;
                this.productPrice = total;
                return this.prices;
            });
        },
        tt() {
            if (this.prices == 0) {
                Swal.fire({
                    icon: 'error',
                    title: '金額錯誤!',
                    text: '不可以只買贈品 || 金額不可為0',
                    footer: '<a href="./shop.html?type=3">繼續購物</a>'
                })
            }
            else {
                let timerInterval
                Swal.fire({
                    title: '送出訂單',
                    html: '',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('OK')
                        location.href = "./orderdetail.html";
                    }
                })
            }
        },
    }
}).mount('#app')

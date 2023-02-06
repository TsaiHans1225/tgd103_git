const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      checkoutTexts: [
        {
          imgSrc: "./wwwroot/img/shopBag1.png",
          name: "Sacoche type",
          type: "波士頓包",
          new: "新品上市",
          color: "深藍色",
          price: 4250,
          subtotal: 4250,
          stock: 5,
          dis: true,
          listid: "listid0",
        },
        {
          imgSrc: "./wwwroot/img/detailpic1.png",
          name: "LPORTER ALOOF",
          type: "雙肩包",
          new: "新品上市",
          color: "黑色",
          price: 5250,
          subtotal: 5250,
          stock: 3,
          dis: true,
          listid: "listid1",
        },
        {
          imgSrc: "./wwwroot/img/shopWallet1.png",
          name: "PORTER SPLENDOR",
          type: "皮夾",
          new: "贈品",
          color: "深藍色",
          price: 0,
          subtotal: 0,
          stock: 1,
          dis: true,
          listid: "listid2",
        },
      ],
      productPrice: 9500,
      prices: 9360,
      dis: true,
      num: 0,
    };
  },
  methods: {
    heart_fun(e) {
      console.log(e);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "已加入收藏",
        showConfirmButton: false,
        timer: 1000,
      });
    },
    delete_fun(index) {
      Swal.fire({
        title: "確定刪除?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("已成功移除");
          let temp = this.checkoutTexts[index];
          this.checkoutTexts.forEach((e) => {
            if (e.listid == temp.listid) {
              this.checkoutTexts.splice(0, 1);
            }
          });
          document.cookie = `Cart=${JSON.stringify(this.checkoutTexts)}`;
          this.cart_fun();
        }
      });
    },
    select_fun(e, r) {
      let temp = document.getElementById(r).value;
      this.num = Number(temp);
      e.checkoutTexts[r].subtotal = e.checkoutTexts[r].price * temp;
      let total = 0;
      this.checkoutTexts.forEach((e) => {
        total += e.subtotal;
        this.productPrice = total;
        this.prices = total - 140;
        return this.prices;
      });
    },
    check_fun() {
      if (this.prices == 0) {
        Swal.fire({
          icon: "error",
          title: "金額錯誤!",
          text: "不可以只買贈品 || 金額不可為0",
          footer: '<a href="./shop.html?type=3">繼續購物</a>',
        });
      } else {
        let timerInterval;
        Swal.fire({
          title: "送出訂單",
          html: "",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("OK");
            location.href = "./orderdetail.html";
          }
        });
      }
    },
    cart_fun() {
      _this=this;
      let temp = document.cookie;
      let obj = JSON.parse(temp.slice(5, 1000));
      // console.log(obj);
      let newobj = {};
      let newarr = [];
      let count = 0;
      obj.forEach(function (e, index) {
        newobj = {};
        newobj.imgSrc = e.imgSrc;
        newobj.name = e.name;
        newobj.type = e.type;
        newobj.new = "新品上市";
        newobj.color = "藍色";
        newobj.price = e.price;
        newobj.subtotal = e.price;
        newobj.stock = e.stock;
        newobj.dis = true;
        newobj.color = e.color;
        newobj.listid = `listid${index}`;
        newarr.push(newobj);
        count += e.price;
      });
      this.prices = count;
      this.checkoutTexts = newarr;
    },
  },
  mounted() {
    this.cart_fun();
  },
});
app.mount("#app");

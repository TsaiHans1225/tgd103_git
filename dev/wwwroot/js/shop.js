const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      banner: "./wwwroot/img/2000/bag.jpg",
      title: "",
      shop: [],
      shopBag: [
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopBag1.png",
          type: "托特包",
          typenum: 0,
          price: 17050,
          new: "新品",
          pid: 0,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER BOOTH PACK",
          imgSrc: "./wwwroot/img/shopBag2.png",
          type: "腰包",
          typenum: 1,
          price: 35200,
          new: "新品",
          pid: 1,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopBag3.png",
          type: "後背包",
          typenum: 2,
          price: 26950,
          new: "新品",
          pid: 2,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopBag4.png",
          type: "手提包",
          typenum: 3,
          price: 47300,
          new: "新品",
          pid: 3,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopBag5.png",
          type: "水桶包",
          typenum: 4,
          price: 17050,
          new: "新品",
          pid: 4,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopBag6.png",
          type: "斜背包",
          typenum: 5,
          price: 35200,
          new: "新品",
          pid: 5,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopBag7.png",
          type: "郵差包",
          typenum: 6,
          price: 26950,
          new: "新品",
          pid: 6,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopBag8.png",
          type: "斜背包",
          typenum: 5,
          price: 47300,
          new: "新品",
          pid: 7,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopBag9.png",
          type: "水桶包",
          typenum: 4,
          price: 17050,
          new: "新品",
          pid: 8,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER BOOTH PACK",
          imgSrc: "./wwwroot/img/shopBag10.png",
          type: "手提包",
          typenum: 3,
          price: 35200,
          new: "新品",
          pid: 9,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopBag11.png",
          type: "後背包",
          typenum: 2,
          price: 26950,
          new: "新品",
          pid: 10,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopBag12.png",
          type: "腰包",
          typenum: 1,
          price: 47300,
          new: "新品",
          pid: 11,
          pdisplay:true,
        },
      ],
      shopWallet: [
        {
          detail: "./detailBag.html",
          name: "PORTER SPLENDOR",
          imgSrc: "./wwwroot/img/shopWallet1.png",
          type: "零錢包",
          price: 45100,
          new: "新品",
          pid: 0,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "SHRINK",
          imgSrc: "./wwwroot/img/shopWallet2.png",
          type: "零錢包",
          price: 6650,
          new: "新品",
          pid: 1,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER ENCHASE",
          imgSrc: "./wwwroot/img/shopWallet3.png",
          type: "中/短夾",
          price: 29700,
          new: "新品",
          pid: 2,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WALL",
          imgSrc: "./wwwroot/img/shopWallet4.png",
          type: "零錢包",
          price: 11000,
          new: "新品",
          pid: 3,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SPLENDOR",
          imgSrc: "./wwwroot/img/shopWallet5.png",
          type: "中/短夾",
          price: 45100,
          new: "新品",
          pid: 4,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "SHRINK",
          imgSrc: "./wwwroot/img/shopWallet6.png",
          type: "中/短夾",
          price: 6650,
          new: "新品",
          pid: 5,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER ENCHASE",
          imgSrc: "./wwwroot/img/shopWallet7.png",
          type: "長夾",
          price: 29700,
          new: "新品",
          pid: 6,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WALL",
          imgSrc: "./wwwroot/img/shopWallet8.png",
          type: "零錢包",
          price: 11000,
          new: "新品",
          pid: 7,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SPLENDOR",
          imgSrc: "./wwwroot/img/shopWallet9.png",
          type: "中/短夾",
          price: 45100,
          new: "新品",
          pid: 8,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "NEW HEAT JET BLACK",
          imgSrc: "./wwwroot/img/shopWallet10.png",
          type: "中/短夾",
          price: 6650,
          new: "新品",
          pid: 9,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER ENCHASE",
          imgSrc: "./wwwroot/img/shopWallet11.png",
          type: "零錢包",
          price: 29700,
          new: "新品",
          pid: 10,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "SHRINK",
          imgSrc: "./wwwroot/img/shopWallet12.png",
          type: "零錢包",
          price: 35750,
          new: "新品",
          pid: 11,
          pdisplay:true,
        },
      ],
      shopShoulderbag: [
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag1.png",
          type: "DUKE-X",
          price: 6650,
          new: "新品",
          pid: 0,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag2.png",
          type: "HARDY",
          price: 30250,
          new: "新品",
          pid: 1,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag3.png",
          type: "MORI",
          price: 26180,
          new: "新品",
          pid: 2,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag4.png",
          type: "LUXY",
          price: 29700,
          new: "新品",
          pid: 3,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag5.png",
          type: "SPIRIT",
          price: 6650,
          new: "新品",
          pid: 4,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag6.png",
          type: "DUKE-X",
          price: 30250,
          new: "新品",
          pid: 5,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag7.png",
          type: "HARDY",
          price: 26180,
          new: "新品",
          pid: 6,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag8.png",
          type: "MORI",
          price: 29700,
          new: "新品",
          pid: 7,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag9.png",
          type: "LUXY",
          price: 6650,
          new: "新品",
          pid: 8,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag10.png",
          type: "SPIRIT",
          price: 30250,
          new: "新品",
          pid: 9,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag11.png",
          type: "DUKE-X",
          price: 26180,
          new: "新品",
          pid: 10,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag12.png",
          type: "HARDY",
          price: 29700,
          new: "新品",
          pid: 11,
          pdisplay:true,
        },
      ],
      shopAccessories: [
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopAccessories1.png",
          type: "酒瓶袋",
          price: 17050,
          new: "新品",
          pid: 0,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER BOOTH PACK",
          imgSrc: "./wwwroot/img/shopAccessories2.png",
          type: "名片夾",
          price: 35200,
          new: "新品",
          pid: 1,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopAccessories3.png",
          type: "腰掛包",
          price: 26950,
          new: "新品",
          pid: 2,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopAccessories4.png",
          type: "證件套",
          price: 47300,
          new: "新品",
          pid: 3,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopAccessories5.png",
          type: "鑰匙包",
          price: 17050,
          new: "新品",
          pid: 4,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopAccessories6.png",
          type: "頸掛小袋",
          price: 35200,
          new: "新品",
          pid: 5,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopAccessories7.png",
          type: "頸掛小袋",
          price: 26950,
          new: "新品",
          pid: 6,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopAccessories8.png",
          type: "名片夾",
          price: 47300,
          new: "新品",
          pid: 7,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopAccessories9.png",
          type: "證件套",
          price: 17050,
          new: "新品",
          pid: 8,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER BOOTH PACK",
          imgSrc: "./wwwroot/img/shopAccessories10.png",
          type: "電腦包",
          price: 35200,
          new: "新品",
          pid: 9,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopAccessories11.png",
          type: "名片夾",
          price: 26950,
          new: "新品",
          pid: 10,
          pdisplay:true,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopAccessories12.png",
          type: "酒瓶袋",
          price: 47300,
          new: "新品",
          pid: 11,
          pdisplay:true,
          pdisplay:true,
        },
      ],
      shopNewproduct: [
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag1.png",
          type: "DUKE-X",
          price: 6650,
          new: "新品",
          pid: 0,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag2.png",
          type: "HARDY",
          price: 30250,
          new: "新品",
          pid: 1,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag3.png",
          type: "MORI",
          price: 26180,
          new: "新品",
          pid: 2,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag4.png",
          type: "LUXY",
          price: 29700,
          new: "新品",
          pid: 3,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag5.png",
          type: "SPIRIT",
          price: 6650,
          new: "新品",
          pid: 4,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag6.png",
          type: "DUKE-X",
          price: 30250,
          new: "新品",
          pid: 5,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag7.png",
          type: "HARDY",
          price: 26180,
          new: "新品",
          pid: 6,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag8.png",
          type: "MORI",
          price: 29700,
          new: "新品",
          pid: 7,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag9.png",
          type: "LUXY",
          price: 6650,
          new: "新品",
          pid: 8,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag10.png",
          type: "SPIRIT",
          price: 30250,
          new: "新品",
          pid: 9,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag11.png",
          type: "DUKE-X",
          price: 26180,
          new: "新品",
          pid: 10,
          pdisplay:true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag12.png",
          type: "HARDY",
          price: 29700,
          new: "新品",
          pid: 11,
          pdisplay:true,
        },
      ],
      menu: [],
      pageNum: 1,
      titlebgc:"background-color: #ff9148;color: #fff;",
    };
  },
  methods: {
    filter_type(e, index) {
      let test = document.getElementsByClassName("shop-card");
      // console.log(test);
      for (let i = 0; i < test.length; i++) {
        test[i].style.display = "none";
      }

      this.shop.forEach((t) => {
        if (t.type == e) {
          let test2 = document.getElementById(t.pid);
          console.log(t.pid);
          test2.style.display = "block";
        }
      });
    },
    filter_all() {
      let test = document.getElementsByClassName("shop-card");
      // console.log(test);
      for (let i = 0; i < test.length; i++) {
        test[i].style.display = "block";
      }
      // window.scrollTo({
      //   top: 0,
      //   left: 0,
      //   behavior: "smooth",
      // });
    },
    url_fun() {
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("type");
      this.pageNum = num;
      console.log(num);
      if (num == 1) {
        this.shop = this.shopBag;
        this.title = "袋包";
        this.menu = [
          "托特包",
          "腰包",
          "後背包",
          "手提包",
          "水桶包",
          "斜背包",
          "郵差包",
        ];
        this.banner = "./wwwroot/img/2000/bag.jpg";
        document.title = `${this.title} - SHIBAINU`;
      }
      if (num == 2) {
        this.shop = this.shopWallet;
        this.title = "皮夾";
        this.menu = ["中/短夾", "長夾", "零錢包"];
        this.banner = "./wwwroot/img/2000/wallet.jpg";
        document.title = `${this.title} - SHIBAINU`;
        this.titlebgc="background-color: #002742;color: #fff;";
      }
      if (num == 3) {
        this.shop = this.shopShoulderbag;
        this.title = "經典系列";
        this.menu = ["DUKE-X", "HARDY", "MORI", "LUXY", "SPIRIT"];
        this.banner = "./wwwroot/img/2000/slingbag.jpg";
        document.title = `${this.title} - SHIBAINU`;
        this.titlebgc="background-color: #717659;color: #fff;";
      }
      if (num == 4) {
        this.shop = this.shopAccessories;
        this.title = "配件";
        this.menu = [
          "酒瓶袋",
          "腰掛包",
          "頸掛小袋",
          "證件套",
          "電腦包",
          "鑰匙包",
          "名片夾",
        ];
        this.banner = "./wwwroot/img/2000/accessories.jpg";
        document.title = `${this.title} - SHIBAINU`;
        this.titlebgc="background-color: #c3c3c3;color: #fff;";
      }
      if (num == 5) {
        this.shop = this.shopNewproduct;
        this.title = "新品";
        this.menu = ["DUKE-X", "HARDY", "MORI", "LUXY", "SPIRIT"];
        this.banner = "./wwwroot/img/2000/new.jpg";
        document.title = `${this.title} - SHIBAINU`;
        this.titlebgc="background-color: #bc965c;color: #fff;";
      }
    },
    test() {
      if (
        document.getElementsByClassName("shop-menu")[0].style.display == "block"
      ) {
        document.getElementsByClassName("shop-menu")[0].style.display = "none";
        // console.log(1);
      } else {
        document.getElementsByClassName("shop-menu")[0].style.display = "block";
        // console.log(2);
      }
    },
  },
  mounted() {
    this.url_fun();
  },
});
app.mount("#app");

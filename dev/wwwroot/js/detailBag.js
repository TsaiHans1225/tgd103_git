const app = Vue.createApp({
  data() {
    return {
      detailsmallpic: [
        { src: "./wwwroot/img/shopShoulderbag5.png", sid: 10 },
        { src: "./wwwroot/img/shopBag1.png", sid: 11 },
        { src: "./wwwroot/img/shopWallet6.png", sid: 12 },
        { src: "./wwwroot/img/shopBriefcase6.png", sid: 13 },
        { src: "./wwwroot/img/shopShoulderbag7.png", sid: 14 },
      ],
      shopBag: [
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopBag1.png",
          type: "托特包",
          typenum: 0,
          price: 17050,
          new: "新品",
          pid: 1,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER BOOTH PACK",
          imgSrc: "./wwwroot/img/shopBag2.png",
          type: "腰包",
          typenum: 1,
          price: 35200,
          new: "新品",
          pid: 2,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopBag3.png",
          type: "後背包",
          typenum: 2,
          price: 26950,
          new: "新品",
          pid: 3,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopBag4.png",
          type: "手提包",
          typenum: 3,
          price: 47300,
          new: "新品",
          pid: 4,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopBag5.png",
          type: "水桶包",
          typenum: 4,
          price: 17050,
          new: "新品",
          pid: 5,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopBag6.png",
          type: "斜背包",
          typenum: 5,
          price: 35200,
          new: "新品",
          pid: 6,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopBag7.png",
          type: "郵差包",
          typenum: 6,
          price: 26950,
          new: "新品",
          pid: 7,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopBag8.png",
          type: "斜背包",
          typenum: 5,
          price: 47300,
          new: "新品",
          pid: 8,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopBag9.png",
          type: "水桶包",
          typenum: 4,
          price: 17050,
          new: "新品",
          pid: 9,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER BOOTH PACK",
          imgSrc: "./wwwroot/img/shopBag10.png",
          type: "手提包",
          typenum: 3,
          price: 35200,
          new: "新品",
          pid: 10,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopBag11.png",
          type: "後背包",
          typenum: 2,
          price: 26950,
          new: "新品",
          pid: 11,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopBag12.png",
          type: "腰包",
          typenum: 1,
          price: 47300,
          new: "新品",
          pid: 12,
          pdisplay: true,
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
          pid: 13,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "SHRINK",
          imgSrc: "./wwwroot/img/shopWallet2.png",
          type: "零錢包",
          price: 6650,
          new: "新品",
          pid: 14,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER ENCHASE",
          imgSrc: "./wwwroot/img/shopWallet3.png",
          type: "中/短夾",
          price: 29700,
          new: "新品",
          pid: 15,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WALL",
          imgSrc: "./wwwroot/img/shopWallet4.png",
          type: "零錢包",
          price: 11000,
          new: "新品",
          pid: 16,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SPLENDOR",
          imgSrc: "./wwwroot/img/shopWallet5.png",
          type: "中/短夾",
          price: 45100,
          new: "新品",
          pid: 17,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "SHRINK",
          imgSrc: "./wwwroot/img/shopWallet6.png",
          type: "中/短夾",
          price: 6650,
          new: "新品",
          pid: 18,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER ENCHASE",
          imgSrc: "./wwwroot/img/shopWallet7.png",
          type: "長夾",
          price: 29700,
          new: "新品",
          pid: 19,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WALL",
          imgSrc: "./wwwroot/img/shopWallet8.png",
          type: "零錢包",
          price: 11000,
          new: "新品",
          pid: 20,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SPLENDOR",
          imgSrc: "./wwwroot/img/shopWallet9.png",
          type: "中/短夾",
          price: 45100,
          new: "新品",
          pid: 21,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "NEW HEAT JET BLACK",
          imgSrc: "./wwwroot/img/shopWallet10.png",
          type: "中/短夾",
          price: 6650,
          new: "新品",
          pid: 22,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER ENCHASE",
          imgSrc: "./wwwroot/img/shopWallet11.png",
          type: "零錢包",
          price: 29700,
          new: "新品",
          pid: 23,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "SHRINK",
          imgSrc: "./wwwroot/img/shopWallet12.png",
          type: "零錢包",
          price: 35750,
          new: "新品",
          pid: 24,
          pdisplay: true,
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
          pid: 25,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag2.png",
          type: "HARDY",
          price: 30250,
          new: "新品",
          pid: 26,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag3.png",
          type: "MORI",
          price: 26180,
          new: "新品",
          pid: 27,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag4.png",
          type: "LUXY",
          price: 29700,
          new: "新品",
          pid: 28,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag5.png",
          type: "SPIRIT",
          price: 6650,
          new: "新品",
          pid: 29,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag6.png",
          type: "DUKE-X",
          price: 30250,
          new: "新品",
          pid: 30,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag7.png",
          type: "HARDY",
          price: 26180,
          new: "新品",
          pid: 31,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag8.png",
          type: "MORI",
          price: 29700,
          new: "新品",
          pid: 32,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag9.png",
          type: "LUXY",
          price: 6650,
          new: "新品",
          pid: 33,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag10.png",
          type: "SPIRIT",
          price: 30250,
          new: "新品",
          pid: 34,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag11.png",
          type: "DUKE-X",
          price: 26180,
          new: "新品",
          pid: 35,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag12.png",
          type: "HARDY",
          price: 29700,
          new: "新品",
          pid: 36,
          pdisplay: true,
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
          pid: 37,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER BOOTH PACK",
          imgSrc: "./wwwroot/img/shopAccessories2.png",
          type: "名片夾",
          price: 35200,
          new: "新品",
          pid: 38,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopAccessories3.png",
          type: "腰掛包",
          price: 26950,
          new: "新品",
          pid: 39,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopAccessories4.png",
          type: "證件套",
          price: 47300,
          new: "新品",
          pid: 40,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopAccessories5.png",
          type: "鑰匙包",
          price: 17050,
          new: "新品",
          pid: 41,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopAccessories6.png",
          type: "頸掛小袋",
          price: 35200,
          new: "新品",
          pid: 42,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopAccessories7.png",
          type: "頸掛小袋",
          price: 26950,
          new: "新品",
          pid: 43,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopAccessories8.png",
          type: "名片夾",
          price: 47300,
          new: "新品",
          pid: 44,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SNACK PACK",
          imgSrc: "./wwwroot/img/shopAccessories9.png",
          type: "證件套",
          price: 17050,
          new: "新品",
          pid: 45,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER BOOTH PACK",
          imgSrc: "./wwwroot/img/shopAccessories10.png",
          type: "電腦包",
          price: 35200,
          new: "新品",
          pid: 46,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SMOKY",
          imgSrc: "./wwwroot/img/shopAccessories11.png",
          type: "名片夾",
          price: 26950,
          new: "新品",
          pid: 47,
          pdisplay: true,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER LIFT",
          imgSrc: "./wwwroot/img/shopAccessories12.png",
          type: "酒瓶袋",
          price: 47300,
          new: "新品",
          pid: 48,
          pdisplay: true,
          pdisplay: true,
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
          pid: 49,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag2.png",
          type: "HARDY",
          price: 30250,
          new: "新品",
          pid: 50,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag3.png",
          type: "MORI",
          price: 26180,
          new: "新品",
          pid: 51,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag4.png",
          type: "LUXY",
          price: 29700,
          new: "新品",
          pid: 52,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag5.png",
          type: "SPIRIT",
          price: 6650,
          new: "新品",
          pid: 53,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag6.png",
          type: "DUKE-X",
          price: 30250,
          new: "新品",
          pid: 54,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag7.png",
          type: "HARDY",
          price: 26180,
          new: "新品",
          pid: 55,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag8.png",
          type: "MORI",
          price: 29700,
          new: "新品",
          pid: 56,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PX TANKER",
          imgSrc: "./wwwroot/img/shopShoulderbag9.png",
          type: "LUXY",
          price: 6650,
          new: "新品",
          pid: 57,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER WILLOW",
          imgSrc: "./wwwroot/img/shopShoulderbag10.png",
          type: "SPIRIT",
          price: 30250,
          new: "新品",
          pid: 58,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER SENSES",
          imgSrc: "./wwwroot/img/shopShoulderbag11.png",
          type: "DUKE-X",
          price: 26180,
          new: "新品",
          pid: 59,
          pdisplay: true,
        },
        {
          detail: "./detailBag.html",
          name: "PORTER CISCO",
          imgSrc: "./wwwroot/img/shopShoulderbag12.png",
          type: "HARDY",
          price: 29700,
          new: "新品",
          pid: 60,
          pdisplay: true,
        },
      ],
      detailpic: [
        "./wwwroot/img/detailpic1-2.png",
        "./wwwroot/img/detailpic2.png",
        "./wwwroot/img/detailpic3.png",
        "./wwwroot/img/detailpic4.png",
        "./wwwroot/img/detailpic5.png",
      ],
      detailtype: [],
      num: 0,
      pdnum: 1,
      faHeartO: true,
      faHeart: false,
      pagetype: 1,
      detailtitle: "",
      bigpic: "./wwwroot/img/detailpic1.png",
      pageid: 1,
      detailobj: {},
    };
  },
  methods: {
    kann(e) {
      this.bigpic = this.detailpic[e];
    },
    kann2() {
      // console.log(this.num);
      this.num++;
      if (this.num > 4) {
        this.num = 0;
        this.bigpic = this.detailpic[this.num];
      } else {
        this.bigpic = this.detailpic[this.num];
      }
    },
    zukokann() {
      if (document.getElementById("10").style.display == "block") {
        for (i = 10; i <= 13; i++) {
          let aaa = document.getElementById(i);
          let ccc = document.getElementById(14).childNodes[0].childNodes[0];
          // console.log(ccc.src);
          aaa.style.display = "none";
          ccc.src = "./wwwroot/img/shopWallet1.png";
        }
      }
    },
    zukokann2() {
      if (document.getElementById("10").style.display == "none") {
        for (i = 10; i <= 14; i++) {
          let aaa = document.getElementById(i);
          let bbb = document.getElementById(14).childNodes[0].childNodes[0];
          let ccc = document.getElementById(13).childNodes[0].childNodes[0];
          let ddd = document.getElementById(12).childNodes[0].childNodes[0];
          let eee = document.getElementById(11).childNodes[0].childNodes[0];
          let fff = document.getElementById(10).childNodes[0].childNodes[0];

          let reds = String(Math.floor(Math.random() * 11));
          if (reds == "0") {
            reds = "1";
            // console.log(reds);
          }
          aaa.style.display = "block";
          bbb.src = `./wwwroot/img/shopBriefcase${reds}.png`;
          ccc.src = `./wwwroot/img/shopWallet${reds}.png`;
          ddd.src = `./wwwroot/img/shopBag${reds}.png`;
          eee.src = `./wwwroot/img/shopAccessories${reds}.png`;
          fff.src = `./wwwroot/img/shopShoulderbag${reds}.png`;
        }
      }
    },
    cart_fun() {
      let oldarr = document.cookie;
      if (oldarr == "") {
        let newarr = [];
        let obj = this.detailobj;
        newarr.push(obj);
        document.cookie = `Cart=${JSON.stringify(newarr)}`;
        // let show = document.cookie;
        // console.log(JSON.parse(show.slice(5, 1000)));
      }
      else{
        let newarr = JSON.parse(oldarr.slice(5, 1000));
        let obj = this.detailobj;
        newarr.push(obj);
        document.cookie = `Cart=${JSON.stringify(newarr)}`;
        // let show = document.cookie;
        // console.log(JSON.parse(show.slice(5, 1000)));
      }
      console.log(this.pdnum);
      let show = document.cookie;
      let obj = JSON.parse(show.slice(5, 1000));
      console.log(obj);
      obj.forEach((e)=>{
        console.log(e);
      })
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "已加入購物車",
        showConfirmButton: false,
        timer: 1000,
      });
    },
    heart_fun() {
      let temp = sessionStorage.getItem("heart");
      if (this.faHeartO == true) {
        this.faHeartO = false;
        this.faHeart = true;
        sessionStorage.setItem("heart", "isReds");
        Swal.fire("已加入收藏");
      } else {
        this.faHeartO = true;
        this.faHeart = false;
        sessionStorage.removeItem("heart");
        Swal.fire("已取消收藏");
      }
    },
    heart_show_fun() {
      let temp = sessionStorage.getItem("heart");
      if (temp == "isReds") {
        this.faHeartO = false;
        this.faHeart = true;
        console.log(sessionStorage);
      }
    },
    page_fun() {
      let urlParams = new URLSearchParams(window.location.search);
      temp1 = urlParams.get("type");
      temp2 = urlParams.get("id");
      temp3 = {};
      if (temp1 == null) {
        temp1 = 1;
      }
      this.pagetype = temp1;
      this.pageid = temp2;
      if (this.pagetype == 1) {
        this.detailtitle = "袋包";
        this.shopBag.forEach((e) => {
          if (e.pid == this.pageid) {
            // console.log(e);
            this.pageobj_fun(e);
          }
        });
      }
      if (this.pagetype == 2) {
        this.detailtitle = "皮夾";
        this.shopWallet.forEach((e) => {
          if (e.pid == this.pageid) {
            // console.log(e);
            this.pageobj_fun(e);
          }
        });
      }
      if (this.pagetype == 3) {
        this.detailtitle = "經典系列";
        this.shopShoulderbag.forEach((e) => {
          if (e.pid == this.pageid) {
            // console.log(e);
            this.pageobj_fun(e);
          }
        });
      }
      if (this.pagetype == 4) {
        this.detailtitle = "配件";
        this.shopAccessories.forEach((e) => {
          if (e.pid == this.pageid) {
            // console.log(e);
            this.pageobj_fun(e);
          }
        });
      }
      if (this.pagetype == 5) {
        this.detailtitle = "新品";
        this.shopNewproduct.forEach((e) => {
          if (e.pid == this.pageid) {
            // console.log(e);
            this.pageobj_fun(e);
          }
        });
      }
    },
    pageobj_fun(e) {
      this.detailobj.pid = e.pid;
      this.detailobj.type = e.type;
      this.detailobj.name = e.name;
      this.detailobj.imgSrc = e.imgSrc;
      this.detailobj.price = e.price;
      let arr = this.detailobj.name.split(" ");
      this.detailobj.series = arr[arr.length - 1];
      this.detailobj.color='亞麻色';
      // console.log(this.detailobj.price.toString().split(""));
      let xyzw = this.detailobj.price.toString().split("");
      // console.log(xyzw);
      this.detailobj.x = xyzw[0] + xyzw[1] + xyzw[2];
      this.detailobj.y = xyzw[0] + xyzw[2] + xyzw[1];
      this.detailobj.z = xyzw[0] + xyzw[1];
      this.detailobj.w = xyzw[0] + xyzw[2] + xyzw[3];
      this.detailtype = [
        `#${this.detailtitle}`,
        `#${this.detailobj.type}`,
        `#${this.detailobj.series}`,
        `#POTER`,
      ];
      let Reds = Math.floor(Math.random() * 20);
      if (Reds == 0) {
        Reds = 1;
      }
      this.detailobj.stock = Reds;
    },
  },
  computed: {
    total() {
      return this.detailobj.price * this.pdnum;
    },
  },
  mounted() {
    this.heart_show_fun();
    this.page_fun();
  },
});
app.mount("#app");

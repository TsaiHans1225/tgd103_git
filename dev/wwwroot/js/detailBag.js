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
      detailpic: [
        "./wwwroot/img/detailpic1-2.png",
        "./wwwroot/img/detailpic2.png",
        "./wwwroot/img/detailpic3.png",
        "./wwwroot/img/detailpic4.png",
        "./wwwroot/img/detailpic5.png",
      ],
      detailtype: ["＃ALOOF", "＃雙肩包", "＃黑色", "#PORTER"],
      bigpic: "./wwwroot/img/detailpic1.png",
      num: 0,
      pdnum: 1,
      pdprice: 4250,
      faHeartO: true,
      faHeart: false,
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
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "已加入購物車",
        showConfirmButton: false,
        timer: 1000,
      });
    },
    heart_fun() {
      let temp=sessionStorage.getItem('heart');
      if (this.faHeartO == true) {
        this.faHeartO = false;
        this.faHeart = true;
        sessionStorage.setItem("heart", 'isReds');
        Swal.fire("已加入收藏");
      } else {
        this.faHeartO = true;
        this.faHeart = false;
        sessionStorage.removeItem("heart");
        Swal.fire("已取消收藏");
      }
    },
    heart_show_fun(){
      let temp=sessionStorage.getItem('heart');
      if (temp=="isReds")
      {
        this.faHeartO = false;
        this.faHeart = true;
        console.log(sessionStorage);
      }
    },
  },
  computed: {
    total() {
      return this.pdprice * this.pdnum;
    },
  },
  mounted(){
    this.heart_show_fun()
  }
});
app.mount("#app");

$(document).ready(function () {
  $("#heart").click(function () {});
});

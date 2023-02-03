const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Hello Vue!",
      carousels: [
        {
          href: "./shop.html?type=1",
          src: "./wwwroot/img/2000/2000x800-2.png",
        },
        {
          href: "./shop.html?type=2",
          src: "./wwwroot/img/2000/2000x800-1.png",
        },
        {
          href: "./shop.html?type=3",
          src: "./wwwroot/img/2000/2000x800-5.png",
        },
        {
          href: "./shop.html?type=4",
          src: "./wwwroot/img/2000/2000x800-4.png",
        },
        {
          href: "./shop.html?type=5",
          src: "./wwwroot/img/2000/2000x800-3.png",
        },
      ],
      mids: [
        {
          href: "./shop.html?type=1",
          src: "./wwwroot/img/index4.jpg",
          if: true,
        },
        {
          href: "./shop.html?type=2",
          src: "./wwwroot/img/index2.jpg",
          if: true,
        },
        {
          href: "./shop.html?type=3",
          src: "./wwwroot/img/index1.jpg",
          if: true,
        },
        {
          href: "./shop.html?type=4",
          src: "./wwwroot/img/index6.jpg",
          if: true,
        },
        {
          href: "./shop.html?type=5",
          src: "./wwwroot/img/index3.jpg",
          if: true,
        },
        {
          href: "./shop.html?type=3",
          src: "./wwwroot/img/index5.png",
          if: true,
        },
        {
          href: "./shop.html?type=2",
          src: "./wwwroot/img/other2.jpg",
          if: true,
        },
        {
          href: "./shop.html?type=1",
          src: "./wwwroot/img/other3.jpg",
          if: true,
        },
      ],
      bot_cards: [
        {
          title: "經典系列",
          content: `&emsp;&emsp;“HEAT”系列結合了兩種不同的材料，具有出色的耐用性和防水性，並具有堅固而時尚的設計。
                    <br>
                    自 2001 A/W 系列發布以來，我們增加了與當時的生活方式相匹配的商品，並擁有豐富的產品陣容，從商務包到小商品，都能被廣泛的人使用。
                    <br>
                    主要材料是日本製造的壓敏尼龍，用66尼龍線編織而成，也用於汽車安全氣囊和防彈背心，具有優異的耐熱性、耐磨性和撕裂強度。
                    <br>
                    一些部件由高度防水的篷布織物製成，用作工業材料。雖然是單一色調的黑色，但通過將不同質地的面料組合在​​一起，具有對比鮮明的時尚設計。`,
          href: "./shop.html?type=3",
          img: "./wwwroot/img/indexbriefcase.png",
        },
        {
          title: "配件",
          content: `&emsp;&emsp;這是一個皮革休閒系列“PORTER CISCO”，您可以在其中享受皮革的原始質地，如何使用它，以及它如何隨環境隨時間變化。
                    <br>
                    <br>
                    它的特點是圓形，利用材料的柔軟性，主皮足夠柔軟，可以用一般的植物單寧鞣製來表現。在鞣製階段，生皮會比平時更用特殊的油浸泡，並通過加熱去除油，使皮革收縮，從而使皮革既豐滿、柔軟又輕盈。越用越有質感，可以享受自己的老化。
                   
                    肩帶的底部由不同於主體的堅硬耐用的皮革製成，因此您可以享受皮革紋理的對比。內部由堅固的滌綸面料製成，以防止面料磨損，襯料用粗白線縫製，使包看起來美觀並突出設計。`,
          href: "./shop.html?type=4",
          img: "./wwwroot/img/shopAccessories9.png",
        },
        {
          title: "皮夾",
          content: `&emsp;&emsp;皮革錢包系列“PORTER ENCHASE”的設計點是整個外部壓印的PORTER標誌。
                    <br><br>
                    我們使用厚厚的北美牛肉作為主要材料。底色染色後，我們使用稱為“輥塗機”的機器通過旋轉多個浸有染料的輥子將染料塗在皮革上。這種染色方法通過施加壓力使皮革表面均勻，具有收緊纖維的效果，從而使皮革變得堅韌，耐磨損和划痕。還有一點就是用“輥塗機”重複染色4次，所以顯色性好。<br><br>
                    外部的標誌性
                    PORTER標誌由熟練的工匠通過調節熱量和壓力壓印在皮革表面。邊緣也經過精心打磨和精加工。內部由具有光澤感的優質人造絲斜紋布製成，皮革儲物袋上給品牌留下深刻印象的橙色增強了可視性和休閒感。`,
          href: "./shop.html?type=2",
          img: "./wwwroot/img/indexcoincase.png",
        },
        {
          title: "袋包",
          content: `&emsp;&emsp;具有柔軟皺紋和自然表情的休閒系列“PORTER WILLOW”。
                    <br><br>
                    厚實的尼龍面料經過鹽縮處理，可產生柔軟的皺紋和天然棉質外觀。
                    輕盈、柔軟，具有休閒的氛圍。
                    <br><br>
                    手柄部分具有緩衝性，使用手感良好的材料。這是一種即使在行李很重的情況下也易於握住的規格。`,
          href: "./shop.html?type=1",
          img: "./wwwroot/img/shopBag8.png",
        },
      ],
      slideIndex: 1,
    };
  },
  methods: {
    winsize() {
      this.size_check();
    },
    resize() {
      _this = this;
      window.addEventListener("resize", function () {
        _this.size_check();
      });
    },
    size_check() {
      _this = this;
      let temp = window.innerWidth;
      if (temp <= 1616) {
        _this.mids[6].if = false;
        _this.mids[7].if = false;
      }
      if (temp <= 1216) {
        _this.mids[0].if = false;
        _this.mids[2].if = false;
      }
      if (temp > 1216) {
        _this.mids[0].if = true;
        _this.mids[2].if = true;
      }
      if (temp > 1616) {
        _this.mids[0].if = true;
        _this.mids[2].if = true;
        _this.mids[6].if = true;
        _this.mids[7].if = true;
      }
    },
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
  mounted() {
    this.winsize();
    this.resize();
    this.showSlides(1);
  },
}).mount("#app");

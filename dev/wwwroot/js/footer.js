
    var aboutmeBtn = document.getElementById('aboutme');
    var memberBtn = document.getElementById('member');
    var supportBtn = document.getElementById('support');
    var footer_nav = document.getElementsByClassName('footer-navbar-wrap')[0].style;
    var footer_nav1 = document.getElementsByClassName('footer-navbar-wrap')[1].style;
    var footer_nav2 = document.getElementsByClassName('footer-navbar-wrap')[2].style;


    aboutmeBtn.addEventListener('click', () => {
        if (footer_nav.display == "") {
            footer_nav1.display = "";
            footer_nav2.display = "";
            footer_nav.display = "flex";
            footer_nav.justifyContent = "center";
        }
        else {
            footer_nav.display = "";
        }
    });


    memberBtn.addEventListener('click', () => {
        if (footer_nav1.display == "") {
            footer_nav.display = "";
            footer_nav2.display = "";
            footer_nav1.display = "flex";
            footer_nav1.justifyContent = "center";
        }
        else {
            footer_nav1.display = "";
        };
    });


    supportBtn.addEventListener('click', () => {
        if (footer_nav2.display == "") {
            footer_nav.display = "";
            footer_nav1.display = "";
            footer_nav2.display = "flex";
            footer_nav2.justifyContent = "center";
        }
        else {
            footer_nav2.display = "";
        };
    });

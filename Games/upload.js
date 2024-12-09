document.getElementById("cont").addEventListener('scroll', () => {
  if (document.getElementById("cont").scrollTop * 1 >= 100) {
    document.getElementById("BTT").style.display = "block";
  }
  else {
    document.getElementById("BTT").style.display = "none";
  }
  if (document.getElementById("menu").style.display != "none") {
    Clm();
  }
  setTimeout(() => {

  }, 2000)



  document.getElementById("BTT").addEventListener("click", () => {
    document.getElementById("cont").scrollTo({
      top: 0,
      behavior: 'smooth'
    })


  });

});


var Innh_val = innerHeight;
var Heightt_val = Innh_val - "136" + "px";
document.getElementById("cont").style.height = Heightt_val;
document.getElementById("menu").style.height = Innh_val + "px";

function Opm() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("menu").style.animationName = "example";
  document.getElementById("nav").style.animationName = "example2";
  document.getElementById("nav").style.webkitTransform = "rotate(-90deg)";
  /*document.getElementById("arrow").style.display = "none";
  document.getElementById("arrow2").style.display = "none";
  document.getElementById("arrow3").style.display = "none";
  document.getElementById("filterobj1").style.opacity = "0";
  document.getElementById("filterobj2").style.opacity = "0";
  document.getElementById("filterobj3").style.opacity = "0";
  document.getElementById("filterobj4").style.opacity = "0";*/
}


function Clm() {
  document.getElementById("menu").style.animationName = "exampleb";
  setTimeout(() => {
    document.getElementById("menu").style.display = "none";
  }, 1000);

  document.getElementById("nav").style.animationName = "example3";
  document.getElementById("nav").style.webkitTransform = "rotate(0deg)";
  setTimeout(() => {


 /*   document.getElementById("filterobj1").style.opacity = "1";
    document.getElementById("filterobj2").style.opacity = "1";
    document.getElementById("filterobj3").style.opacity = "1";
    document.getElementById("filterobj4").style.opacity = "1";
    document.getElementById("arrow").style.display = "block";
    document.getElementById("arrow2").style.display = "block";
    document.getElementById("arrow3").style.display = "block";*/
  }, 1000);
}


var Nav = {
  games: function() {
    if (document.getElementById("subb").style.display == "block") {
      document.getElementById("subb").style.display = "none";

      document.getElementById("game").innerHTML = "Games 🔻";
      document.getElementById("subb2").style.display = "none";
      document.getElementById("subb3").style.display = "none";

    }
    else if (document.getElementById("subb").style.display != "block") {
      document.getElementById("subb").style.display = "block";
      document.getElementById("subb2").style.display = "block";
      document.getElementById("subb3").style.display = "block";
      document.getElementById("game").innerHTML = "Games 🔺";
    }
  },
  music: function() {
    if (document.getElementById("msub").style.display == "block") {
      document.getElementById("msub").style.display = "none";

      document.getElementById("music").innerHTML = "Musics 🔻";
      document.getElementById("msub2").style.display = "none";
      document.getElementById("msub3").style.display = "none";

    }
    else if (document.getElementById("msub").style.display != "block") {
      document.getElementById("msub").style.display = "block";
      document.getElementById("msub2").style.display = "block";
      document.getElementById("msub3").style.display = "block";
      document.getElementById("music").innerHTML = "Musics 🔺";
    }
  },
  video: function() {
    if (document.getElementById("vsub").style.display == "block") {
      document.getElementById("vsub").style.display = "none";

      document.getElementById("video").innerHTML = "Videos 🔻";
      document.getElementById("vsub2").style.display = "none";
      document.getElementById("vsub3").style.display = "none";

    }
    else if (document.getElementById("vsub").style.display != "block") {
      document.getElementById("vsub").style.display = "block";
      document.getElementById("vsub2").style.display = "block";
      document.getElementById("vsub3").style.display = "block";
      document.getElementById("video").innerHTML = "Videos 🔺";
    }
  }
}


var Mode_val = sessionStorage.getItem("fancymode");
var txtdw = "light";
if (Mode_val == "dark" || txtdw == "dark") {

  document.getElementById("dtxt").style.color = "white";
  document.getElementById("darkm").style.animationName = "dark1";
  document.getElementById("darkm").style.marginLeft = "42px";
  document.getElementById("darkm").style.backgroundColor = "blue";
  document.getElementById("dcover").style.backgroundColor = "black";
  document.getElementById("dcover").style.border = "2px solid white";
  document.getElementById("bdy").style.backgroundImage = "url(/Images/darkbg.png)";

  document.getElementById("menu").style.backgroundColor = "black";
  
}
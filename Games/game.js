document.getElementById("cont").addEventListener('scroll', () => {
  document.getElementById("cont").style.height = innerHeight - 136 + "px";
  document.getElementById("menu").style.height = innerHeight + "px";
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
  /*
  document.getElementById("arrow").style.display = "none";
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

/*
    document.getElementById("filterobj1").style.opacity = "1";
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
 document.getElementById("bdy").className = "darkbdy";


  document.getElementById("menu").style.backgroundColor = "black";
  /*
  document.getElementById("android").style.borderBottom = "2px solid greenyellow";
  document.getElementById("android").style.backgroundColor = "black"
  document.getElementById("android").style.boxShadow = "1px 1px black";
  document.getElementById("bdrtxt").style.color = "white";
  document.getElementById("bdrtxt").style.textShadow = "1px 1px black";
  
  document.getElementById("java").style.borderBottom = "2px solid greenyellow";
  document.getElementById("java").style.backgroundColor = "black"
  document.getElementById("java").style.boxShadow = "1px 1px black";
  document.getElementById("bdrtxt2").style.color = "white";
  document.getElementById("bdrtxt2").style.textShadow = "1px 1px black";

document.getElementById("psp").style.borderBottom = "2px solid greenyellow";
document.getElementById("psp").style.backgroundColor = "black"
document.getElementById("psp").style.boxShadow = "1px 1px black";
document.getElementById("bdrtxt3").style.color = "white";
document.getElementById("bdrtxt3").style.textShadow = "1px 1px black";

document.getElementById("html5").style.borderBottom = "2px solid greenyellow";
document.getElementById("html5").style.backgroundColor = "black"
document.getElementById("html5").style.boxShadow = "1px 1px black";
document.getElementById("bdrtxt4").style.color = "white";
document.getElementById("bdrtxt4").style.textShadow = "1px 1px black";
document.getElementById("supbdr").style.backgroundColor = "black";
document.getElementById("supbdr").style.borderBottom = "2px solid greenyellow";
document.getElementById("supbdr2").style.backgroundColor = "black";
document.getElementById("supbdr2").style.borderBottom = "2px solid greenyellow";
    document.getElementById("supbdr3").style.backgroundColor = "black";
    document.getElementById("supbdr3").style.borderBottom = "2px solid greenyellow";
    document.getElementById("supbdr4").style.backgroundColor = "black";
    document.getElementById("supbdr4").style.borderBottom = "2px solid greenyellow";*/
}


function Dark() {
  Sendmessage("mode", null);  
  if (Mode_val == "dark" || txtdw == "dark") {
    sessionStorage.setItem("fancymode", "light");
    txtdw = "light";
  
    document.getElementById("dtxt").style.color = "black";

    document.getElementById("darkm").style.animationName = "dark";
    document.getElementById("darkm").style.marginLeft = "4px";
    document.getElementById("darkm").style.backgroundColor = "green";
    document.getElementById("dcover").style.backgroundColor = "white";
    document.getElementById("dcover").style.border = "2px solid black";
  document.getElementById("bdy").className = "lightbdy";

    document.getElementById("menu").style.backgroundColor = "green";
    
    /*document.getElementById("android").style.borderBottom = "5px solid #e6e6e6";
  document.getElementById("android").style.backgroundColor = "white"
  document.getElementById("android").style.boxShadow = "1px 1px black";
  document.getElementById("bdrtxt").style.color = "black";
  document.getElementById("bdrtxt").style.textShadow = "1px 1px white";
  
  
  document.getElementById("java").style.borderBottom = "5px solid #e6e6e6";
  document.getElementById("java").style.backgroundColor = "white"
  document.getElementById("java").style.boxShadow = "1px 1px black";
  document.getElementById("bdrtxt2").style.color = "black";
  document.getElementById("bdrtxt2").style.textShadow = "1px 1px white";
  
  document.getElementById("psp").style.borderBottom = "5px solid #e6e6e6";
  document.getElementById("psp").style.backgroundColor = "white"
  document.getElementById("psp").style.boxShadow = "1px 1px black";
  document.getElementById("bdrtxt3").style.color = "black";
  document.getElementById("bdrtxt3").style.textShadow = "1px 1px white";
  
  document.getElementById("html5").style.borderBottom = "5px solid #e6e6e6";
  document.getElementById("html5").style.backgroundColor = "white"
  document.getElementById("html5").style.boxShadow = "1px 1px black";
  document.getElementById("bdrtxt4").style.color = "black";
  document.getElementById("bdrtxt4").style.textShadow = "1px 1px white";
  document.getElementById("supbdr").style.backgroundColor = "white";
  document.getElementById("supbdr").style.borderBottom = "5px solid #e6e6e6";
  document.getElementById("supbdr2").style.backgroundColor = "white";
  document.getElementById("supbdr2").style.borderBottom = "5px solid #e6e6e6";
  document.getElementById("supbdr3").style.backgroundColor = "white";
  document.getElementById("supbdr3").style.borderBottom = "5px solid #e6e6e6";
  document.getElementById("supbdr4").style.backgroundColor = "white";
  document.getElementById("supbdr4").style.borderBottom = "5px solid #e6e6e6";*/
  }
  else if (Mode_val == "light" || txtdw == "light") {
    sessionStorage.setItem("fancymode", "dark");
    txtdw = "dark";
    document.getElementById("dtxt").style.color = "white";
    document.getElementById("darkm").style.animationName = "dark1";
    document.getElementById("darkm").style.marginLeft = "42px";
    document.getElementById("darkm").style.backgroundColor = "blue";
    document.getElementById("dcover").style.backgroundColor = "black";
    document.getElementById("dcover").style.border = "2px solid white";
 document.getElementById("bdy").className = "darkbdy";

  
    document.getElementById("menu").style.backgroundColor = "black";
   /* document.getElementById("android").style.borderBottom = "2px solid greenyellow";
    document.getElementById("android").style.backgroundColor = "black"
    document.getElementById("android").style.boxShadow = "1px 1px black";
    document.getElementById("bdrtxt").style.color = "white";
    document.getElementById("bdrtxt").style.textShadow = "1px 1px black";
    
    document.getElementById("java").style.borderBottom = "2px solid greenyellow";
    document.getElementById("java").style.backgroundColor = "black"
    document.getElementById("java").style.boxShadow = "1px 1px black";
    document.getElementById("bdrtxt2").style.color = "white";
    document.getElementById("bdrtxt2").style.textShadow = "1px 1px black";
    
    document.getElementById("psp").style.borderBottom = "2px solid greenyellow";
    document.getElementById("psp").style.backgroundColor = "black"
    document.getElementById("psp").style.boxShadow = "1px 1px black";
    document.getElementById("bdrtxt3").style.color = "white";
    document.getElementById("bdrtxt3").style.textShadow = "1px 1px black";
    
    document.getElementById("html5").style.borderBottom = "2px solid greenyellow";
    document.getElementById("html5").style.backgroundColor = "black"
    document.getElementById("html5").style.boxShadow = "1px 1px black";
    document.getElementById("bdrtxt4").style.color = "white";
    document.getElementById("bdrtxt4").style.textShadow = "1px 1px black";
    document.getElementById("supbdr").style.backgroundColor = "black";
    document.getElementById("supbdr").style.borderBottom = "2px solid greenyellow";
    document.getElementById("supbdr2").style.backgroundColor = "black";
    document.getElementById("supbdr2").style.borderBottom = "2px solid greenyellow";
    document.getElementById("supbdr3").style.backgroundColor = "black";
    document.getElementById("supbdr3").style.borderBottom = "2px solid greenyellow";
    document.getElementById("supbdr4").style.backgroundColor = "black";
    document.getElementById("supbdr4").style.borderBottom = "2px solid greenyellow";*/
  }
}

setInterval(() => {
  document.getElementById("cont").style.height = innerHeight -136 + "px";
  document.getElementById("menu").style.height = innerHeight + "px";
}, 50);
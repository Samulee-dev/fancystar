
function Opm() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("menu").style.animationName = "example";
  document.getElementById("nav").style.animationName = "example2";
  document.getElementById("nav").style.webkitTransform = "rotate(-90deg)";
  
}
function Clm() {
  document.getElementById("menu").style.animationName = "exampleb";
  setTimeout(() => {
    document.getElementById("menu").style.display = "none";
  }, 1000);

  document.getElementById("nav").style.animationName = "example3";
  document.getElementById("nav").style.webkitTransform = "rotate(0deg)";
  
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
  
  
}

document.getElementById("bdy").innerHTML += `<link rel='stylesheet' href='/styles/dark.css'>`;
try {
document.getElementById("inlkcp").style.height = "0px";
  document.getElementById("inlkcp").style.width = "0px";
  document.getElementById("inlkcp").style.marginLeft = "100px";
  document.getElementById("inlkcp").style.marginTop = "100px";
}
catch(e) {
  //err();
}
  
  function Dark() {
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
    }
  }
  
document.getElementById("gcontg").addEventListener('scroll', () => {
        
        if (document.getElementById("menu").style.display != "none") {
          Clm();
        }
  })
  
  
  
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
  try {
  document.getElementById("lked").style.height = '1px';
  }
  catch(e) {
    //err(e);
}
  /*document.getElementById("lked").style.width = '1px';
  */
  var iframed = false;
 document.getElementById("menu").style.marginTop = '5px';
 window.addEventListener("message", (event) => {
   
   if (event.data.type == "subd"&& event.data.message == "fancystar") {
     
     document.querySelector(".top").style.display = "none";
  try {
    document.getElementById("cont").style.height = innerHeight + "px";
    
  }  
  catch(e) {
    //alert(e)
  }
     var datac = {
       type: "pgtitle",
       message: document.getElementById("pgtotle").innerText,
     }
     parent.postMessage(datac, "*");
   }
else if (event.data.type == "mode") {
Dark();
}
 })
 document.getElementById("gcontg").style.height = innerHeight + "px";
function Aclick() {

  this.datac = {
    type: "load",
    message: null
  }
  parent.postMessage(this.datac, "*");

}
function Aopen() {

  this.datac = {
    type: "tab",
    message: null
  }
  parent.postMessage(this.datac, "*");

}

function Aplay(href) {
this.href = href.toString().replace("index", "index1")
  this.datac = {
    type: "tabp",
    message: this.href,
  }
  parent.postMessage(this.datac, "*");

}
document.getElementById("menu").style.height = innerHeight + "px";
  
  
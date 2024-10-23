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
  document.getElementById("arrow").style.display = "none";
  document.getElementById("arrow2").style.display = "none";
  document.getElementById("arrow5").style.display = "none";
}
function Opm2() {
  document.getElementById("sglasss").style.display = "none";
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
  setTimeout(() => {
    

document.getElementById("arrow").style.display = "block";
document.getElementById("arrow2").style.display = "block";
document.getElementById("arrow5").style.display = "block";
}, 1000);
}
function Clm2() {
  document.getElementById("sglasss").style.display = "block";
  document.getElementById("menu").style.animationName = "exampleb";
  setTimeout(() => {
    document.getElementById("menu").style.display = "none";
  }, 1000);

  document.getElementById("nav").style.animationName = "example3";
  document.getElementById("nav").style.webkitTransform = "rotate(0deg)";

}
//document.getElementById("SUL").style.display = "none";
function Search() {
  var Input_val = document.getElementById("search").value;
  if (Input_val != "") {
  document.getElementById("SUUL").style.display = "none";
  document.getElementById("SUL").style.display = "block";
  
  document.getElementById("sug").innerHTML = "Search Result For "+"'"+Input_val+"'";
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("search");
      filter = input.value.toUpperCase();
      ul = document.getElementById("SUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          
        } else {
          li[i].style.display = "none";
          
        }
      }
  }
  else {
    
  }
}
function Search2() {
  window.location.href = "#sug"
  document.getElementById("SUUL").style.display = "none";
  document.getElementById("SUL").style.display = "block";
  var Input_val = document.getElementById("search").value;
  document.getElementById("sug").innerHTML = "Search Result For " + "'" + Input_val + "'";
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("SUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
var Nav = {
  games : function() {
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
  music : function() {
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
function Gamedd() {
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
}

function Musicdd() {
  if (document.getElementById("msub").style.display == "block") {
    document.getElementById("msub").style.display = "none";
    
    document.getElementById("music").innerHTML = "Musics 🔻";
      //document.getElementById("subb2").style.display = "none";
       // document.getElementById("subb3").style.display = "none";
        
  }
  else if (document.getElementById("msub").style.display != "block") {
  document.getElementById("msub").style.display = "block";
   // document.getElementById("subb2").style.display = "block";
      //document.getElementById("subb3").style.display = "block";
    document.getElementById("music").innerHTML = "Musics 🔺";
}
}



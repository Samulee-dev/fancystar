var Mode_val = sessionStorage.getItem("fancymode");
var txtdw = "light";
if (Mode_val == "dark"|| txtdw == "dark") {

  document.getElementById("dtxt").style.color = "white";
  document.getElementById("darkm").style.animationName = "dark1";
  document.getElementById("darkm").style.marginLeft = "42px";
  document.getElementById("darkm").style.backgroundColor = "blue";
  document.getElementById("dcover").style.backgroundColor = "black";
  document.getElementById("dcover").style.border = "2px solid white";
  document.getElementById("bdy").style.backgroundImage = "url('../Images/darkbg.png')";
  
  document.getElementById("menu").style.backgroundColor = "black";
  document.getElementById("bdr1").style.backgroundColor = "black";
  document.getElementById("bdr1").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdr2").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdr1").style.boxShadow = "1px 1px black";
  document.getElementById("bdrtxt1").style.color = "white";
  document.getElementById("bdrtxt1").style.textShadow = "1px 1px black";
  document.getElementById("bdrtxt2").style.textShadow = "1px 1px black";
  document.getElementById("ssearch").style.backgroundColor = "black";
  document.getElementById("bdr2").style.backgroundColor = "black";
  document.getElementById("bdrtxt2").style.color = "white";
  document.getElementById("bdr3").style.backgroundColor = "black";
  document.getElementById("bdrtxt3").style.color = "white";
  document.getElementById("bdr3").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdrtxt3").style.textShadow = "1px 1px black";
  document.getElementById("bdr4").style.backgroundColor = "black";
  document.getElementById("bdrtxt4").style.color = "white";
  document.getElementById("bdr4").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdrtxt4").style.textShadow = "1px 1px black";
  document.getElementById("bdr5").style.backgroundColor = "black";
  document.getElementById("bdrtxt5").style.color = "white";
  document.getElementById("bdr5").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdrtxt5").style.textShadow = "1px 1px black";
  document.getElementById("bdr6").style.backgroundColor = "black";
  document.getElementById("bdrtxt6").style.color = "white";
  document.getElementById("bdr6").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdrtxt6").style.textShadow = "1px 1px black";
  document.getElementById("bdr7").style.backgroundColor = "black";
  document.getElementById("bdrtxt7").style.color = "white";
  document.getElementById("bdr7").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdrtxt7").style.textShadow = "1px 1px black";
  document.getElementById("supbdr").style.backgroundColor = "black";
  document.getElementById("supbdr").style.borderBottom = "2px solid greenyellow";
  document.getElementById("supbdr2").style.backgroundColor = "black";
  document.getElementById("supbdr2").style.borderBottom = "2px solid greenyellow";
  document.getElementById("supbdr3").style.backgroundColor = "black";
  document.getElementById("supbdr3").style.borderBottom = "2px solid greenyellow";
  document.getElementById("supbdr4").style.backgroundColor = "black";
  document.getElementById("supbdr4").style.borderBottom = "2px solid greenyellow";
  document.getElementById("supbdr5").style.backgroundColor = "black";
  document.getElementById("supbdr5").style.borderBottom = "2px solid greenyellow";
  
  document.getElementById("bdr8").style.backgroundColor = "black";
  document.getElementById("bdrtxt8").style.color = "white";
  document.getElementById("bdr8").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdrtxt8").style.textShadow = "1px 1px black";
  
}
function Dark() {
  if (Mode_val == "dark"|| txtdw == "dark") {
      sessionStorage.setItem("fancymode", "light");
      txtdw = "light";
    document.getElementById("dtxt").style.color = "black";
 
    document.getElementById("darkm").style.animationName = "dark";
    document.getElementById("darkm").style.marginLeft = "4px";
    document.getElementById("darkm").style.backgroundColor = "green";
    document.getElementById("dcover").style.backgroundColor = "white";
    document.getElementById("dcover").style.border = "2px solid black";
    document.getElementById("bdy").style.backgroundImage = "url('../Images/sbg.png')";
    document.getElementById("menu").style.backgroundColor = "green";
    document.getElementById("bdr1").style.backgroundColor = "white";
    document.getElementById("bdr1").style.borderBottom = "2px solid #e6e6e6";
    document.getElementById("bdr2").style.borderBottom = "2px solid #e6e6e6";
    document.getElementById("bdr1").style.boxShadow = "1px 1px black";
    document.getElementById("bdrtxt1").style.color = "black";
    document.getElementById("bdrtxt1").style.textShadow = "1px 1px white";
    document.getElementById("bdrtxt2").style.textShadow = "1px 1px white";
    document.getElementById("ssearch").style.backgroundColor = "white";
    document.getElementById("bdr2").style.backgroundColor = "white";
    document.getElementById("bdrtxt2").style.color = "black";
    document.getElementById("bdr3").style.backgroundColor = "white";
    document.getElementById("bdrtxt3").style.color = "black";
    document.getElementById("bdr3").style.borderBottom = "2px solid #e6e6e6";
    document.getElementById("bdrtxt3").style.textShadow = "1px 1px white";
document.getElementById("bdr4").style.backgroundColor = "white";
document.getElementById("bdrtxt4").style.color = "black";
document.getElementById("bdr4").style.borderBottom = "2px solid #e6e6e6";
document.getElementById("bdrtxt4").style.textShadow = "1px 1px white";    

document.getElementById("bdr5").style.backgroundColor = "white";
document.getElementById("bdrtxt5").style.color = "black";
document.getElementById("bdr5").style.borderBottom = "2px solid #e6e6e6";
document.getElementById("bdrtxt5").style.textShadow = "1px 1px white";

document.getElementById("bdr6").style.backgroundColor = "white";
document.getElementById("bdrtxt6").style.color = "black";
document.getElementById("bdr6").style.borderBottom = "2px solid #e6e6e6";
document.getElementById("bdrtxt6").style.textShadow = "1px 1px white";
document.getElementById("bdr7").style.backgroundColor = "white";
document.getElementById("bdrtxt7").style.color = "black";
document.getElementById("bdr7").style.borderBottom = "2px solid #e6e6e6";
document.getElementById("bdrtxt7").style.textShadow = "1px 1px white";
document.getElementById("bdr8").style.backgroundColor = "white";
document.getElementById("bdrtxt8").style.color = "black";
document.getElementById("bdr8").style.borderBottom = "2px solid #e6e6e6";
document.getElementById("bdrtxt8").style.textShadow = "1px 1px white";
        document.getElementById("supbdr").style.backgroundColor = "white";
  document.getElementById("supbdr").style.borderBottom = "2px solid #e6e6e6";
  document.getElementById("supbdr2").style.backgroundColor = "white";
  document.getElementById("supbdr2").style.borderBottom = "2px solid #e6e6e6";
  
  document.getElementById("supbdr3").style.backgroundColor = "white";
  document.getElementById("supbdr3").style.borderBottom = "2px solid #e6e6e6";
  document.getElementById("supbdr4").style.backgroundColor = "white";
  document.getElementById("supbdr4").style.borderBottom = "2px solid #e6e6e6";
  document.getElementById("supbdr5").style.backgroundColor = "white";
  document.getElementById("supbdr5").style.borderBottom = "2px solid #e6e6e6";
  
  
  
  }
  else if (Mode_val == "light"|| txtdw == "light") {
      sessionStorage.setItem("fancymode", "dark");
      txtdw = "dark";
    document.getElementById("dtxt").style.color = "white";
  
  document.getElementById("darkm").style.animationName = "dark1";
    document.getElementById("darkm").style.marginLeft = "42px";
      document.getElementById("darkm").style.backgroundColor = "blue";
        document.getElementById("dcover").style.backgroundColor = "black";
          document.getElementById("dcover").style.border = "2px solid white";
            document.getElementById("bdy").style.backgroundImage = "url('../Images/darkbg.png')";
          document.getElementById("menu").style.backgroundColor = "black"; 
          document.getElementById("bdr1").style.backgroundColor = "black" ; 
            document.getElementById("bdr1").style.borderBottom = "2px solid greenyellow" ;
            document.getElementById("bdr2").style.borderBottom = "2px solid greenyellow" ; 
            document.getElementById("bdr1").style.boxShadow = "1px 1px black" ;   
          document.getElementById("bdrtxt1").style.color = "white" ;  
          document.getElementById("bdrtxt1").style.textShadow = "1px 1px black" ;  
          document.getElementById("bdrtxt2").style.textShadow = "1px 1px black" ;  
          document.getElementById("ssearch").style.backgroundColor = "black" ;
                      document.getElementById("bdr2").style.backgroundColor = "black";
                      document.getElementById("bdrtxt2").style.color = "white";
              document.getElementById("bdr3").style.backgroundColor = "black";
              document.getElementById("bdrtxt3").style.color = "white";
              document.getElementById("bdr3").style.borderBottom = "2px solid greenyellow";
              document.getElementById("bdrtxt3").style.textShadow = "1px 1px black";
  document.getElementById("bdr4").style.backgroundColor = "black";
  document.getElementById("bdrtxt4").style.color = "white";
  document.getElementById("bdr4").style.borderBottom = "2px solid greenyellow";
  document.getElementById("bdrtxt4").style.textShadow = "1px 1px black";           
 document.getElementById("bdr5").style.backgroundColor = "black";
 document.getElementById("bdrtxt5").style.color = "white";
 document.getElementById("bdr5").style.borderBottom = "2px solid greenyellow";
 document.getElementById("bdrtxt5").style.textShadow = "1px 1px black"; 
 document.getElementById("bdr6").style.backgroundColor = "black";
 document.getElementById("bdrtxt6").style.color = "white";
 document.getElementById("bdr6").style.borderBottom = "2px solid greenyellow";
 document.getElementById("bdrtxt6").style.textShadow = "1px 1px black";
 document.getElementById("bdr7").style.backgroundColor = "black";
 document.getElementById("bdrtxt7").style.color = "white";
 document.getElementById("bdr7").style.borderBottom = "2px solid greenyellow";
 document.getElementById("bdrtxt7").style.textShadow = "1px 1px black";
 document.getElementById("bdr8").style.backgroundColor = "black";
 document.getElementById("bdrtxt8").style.color = "white";
 document.getElementById("bdr8").style.borderBottom = "2px solid greenyellow";
 document.getElementById("bdrtxt8").style.textShadow = "1px 1px black";
              document.getElementById("supbdr").style.backgroundColor = "black";
  document.getElementById("supbdr").style.borderBottom = "2px solid greenyellow";
  document.getElementById("supbdr2").style.backgroundColor = "black";
  document.getElementById("supbdr2").style.borderBottom = "2px solid greenyellow";
  document.getElementById("supbdr3").style.backgroundColor = "black";
  document.getElementById("supbdr3").style.borderBottom = "2px solid greenyellow";
  document.getElementById("supbdr4").style.backgroundColor = "black";
  document.getElementById("supbdr4").style.borderBottom = "2px solid greenyellow";
  document.getElementById("supbdr5").style.backgroundColor = "black";
  document.getElementById("supbdr5").style.borderBottom = "2px solid greenyellow";
  
              }                 
}

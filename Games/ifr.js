var Ifr_ame = document.getElementById("cont");
var loading_img = document.getElementById("loadimg");
Ifr_ame.onload = function() {
  Sendmessage("subd", "fancystar");
  loading_img.style.display = "none";
let hrefl = window.location.href;
  if (hrefl.includes("#")) {
    let hrefl2 = hrefl.split("#");
    let id = "#"+hrefl2[1];
    Sendmessage("href", id);
  }
}
function Sendmessage(type, message) {
  var datac = {
    type: type,
    message: message,
  }
  Ifr_ame.contentWindow.postMessage(datac, "*");
}

window.addEventListener("message", (event) => {
  if (event.data.type == "load") {
    loading_img.style.display = "block";
  }
  else if (event.data.type == "tab") {
    loading_img.style.display = "block";
    Ifr_ame.src = "index2.html";
  window.location.href = "../index.html"; 
  
  } 
  
 else if (event.data.type == "pgtitle") {
  
    document.getElementById("titlepg").innerText = event.data.message;
  }
  
  else if (event.data.type == "tabp") {
  
   loading_img.style.display = "block";
   Ifr_ame.src = "index2.html";
   if (event.data.message.includes("#imgcont")) {
     event.data.message = event.data.message.toString().replace("#imgcont", "");
   }
   window.location.href = event.data.message;
   
  }
  
  else if (event.data.type == "loginpg") {
  Ifr_ame.src = "index2.html";
  window.location.href = "../Accounts/Login.html"
  }
  
})


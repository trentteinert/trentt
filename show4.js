function show4(){
  var x = document.getElementById("folderbox");
  if (x.style.display === "none") {x.style.display = "flex";} 
    else {x.style.display = "none";}
  var x = document.getElementById("folderbox2");
  if (x.style.display === "flex") {x.style.display = "none";} 
    else {x.style.display = "none";}
}
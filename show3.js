function show3(){
  var x = document.getElementById("folderbox2");
  if (x.style.display === "none") {x.style.display = "flex";} 
    else {x.style.display = "none";}
    if (event.target.value === "CV >") {event.target.value = "CV v";}
    else {event.target.value = "CV >";}
}
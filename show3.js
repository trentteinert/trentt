function show3(){
  var x = document.getElementById("cv-links");
  if (x.style.display === "none") {x.style.display = "block";} 
    else {x.style.display = "none";}
    if (event.target.value === "CV >") {event.target.value = "CV v";}
    else {event.target.value = "CV >";}
}
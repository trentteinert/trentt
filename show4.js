function show4(){
  var x = document.getElementById("folderbox");
  if (x.style.display === "none") {x.style.display = "block";} 
    else {x.style.display = "none";}
    if (event.target.value === "Work >") {event.target.value = "Work v";}
    else {event.target.value = "Work >";}
}
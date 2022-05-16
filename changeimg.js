function changeimg() {
  var Image_Id = document.getElementById('btnID1');
  if (Image_Id.src.match("/components/1closed.png")) {
      Image_Id.src = "/components/2open.png";
  }
  else {
      Image_Id.src = "/components/1closed.png";
  }
} 
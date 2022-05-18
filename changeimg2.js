function changeimg2() {
  var Image_Id = document.getElementById('btnID002');
  if (Image_Id.src.match("/components/CV_icon.png")) {
      Image_Id.src = "/components/CV_icon_open.png";
  }
  else {
      Image_Id.src = "/components/CV_icon.png";
  }
} 
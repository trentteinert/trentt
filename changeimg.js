function changeimg() {
  var Image_Id = document.getElementById('btnID1');
  if (Image_Id.src.match("/components/Work_icon.png")) {
      Image_Id.src = "/components/Work_icon_open.png";
  }
  else {
      Image_Id.src = "/components/Work_icon.png";
  }
  var Image_Id = document.getElementById('btnID002');
  if (Image_Id.src.match("/components/CV_icon_open.png")) {
      Image_Id.src = "/components/CV_icon.png";
  }
  else {
      Image_Id.src = "/components/CV_icon.png";
  }
} 

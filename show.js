function show() {
  let image = document.getElementById("img1");
    image.src ="/components/img1.jpg"
    image.style ="height:40%; width:40%; margin-left:35px; margin-bottom:0px; margin-top:0px;"
    document.getElementById("contentbtnID1")
      .style.display = "none";
    document.getElementById("contentbtnID2")
      .style.display = "inline-block";
}
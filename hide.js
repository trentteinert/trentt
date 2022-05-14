function hide() {
  let image = document.getElementById("img1");
    image.src ="/components/img1.jpg"
    image.style ="display:none; margin-left:25px; margin-bottom:0px;"
    document.getElementById("btnID1")
      .style.display = "inline-block";
    document.getElementById("btnID2")
      .style.display = "none";
}
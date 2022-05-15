function hide() {
  let image = document.getElementById("img1");
    image.src ="/components/img1.jpg"
    image.style ="display:none; margin-left:35px; margin-bottom:0px;"
    document.getElementById("contentbtnID1")
      .style.display = "inline-block";
    document.getElementById("contentbtnID2")
      .style.display = "none";
}
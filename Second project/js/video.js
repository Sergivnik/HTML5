button_play.onclick = function () {
  var sectionVideo = document.querySelector("section.video");
  var Beach_Video = document.createElement("video");
  Beach_Video.setAttribute("src", "Video/Beach.mp4");
  Beach_Video.setAttribute("autoplay", "autoplay");
  Beach_Video.className += "Beach";
  sectionVideo.appendChild(Beach_Video);
  button_play.className = "hidden";
  button_stop.className = "showed";
};
button_stop.onclick = function () {
  var sectionVideo = document.querySelector("section.video");
  var Beach_Video = document.querySelector("video");
  sectionVideo.removeChild(Beach_Video);
  button_play.className = "showed";
  button_stop.className = "hidden";
};

iframe1 = document.getElementById("gameIframe");
fullscreenBtn = document.getElementById("webButton");
fullscreenBtn.addEventListener("click", () => {
    if (iframe1.requestFullscreen) {
        iframe1.requestFullscreen();
    } else if (iframe1.mozRequestFullScreen) {
        iframe1.mozRequestFullScreen(); // Firefox
    } else if (iframe1.webkitRequestFullscreen) {
        iframe1.webkitRequestFullscreen(); // Chrome, Safari & Opera
    } else if (iframe1.msRequestFullscreen) {
        iframe1.msRequestFullscreen(); // Internet Explorer & Edge
    }
  });
closeBtn = document.getElementById("webButton1");
closeBtn.addEventListener("click", () => {
    document.location="/index.html";
  });
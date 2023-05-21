document.getElementById("shareButton").addEventListener("click", function () {
   var url = encodeURIComponent(window.location.href);
   var facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
   window.open(facebookShareUrl, "_blank");
});
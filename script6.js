document.getElementById("checkCookies").addEventListener("click", function() {
    alert(navigator.cookieEnabled ? "Cookies estão habilitados." : "Cookies estão desabilitados.");
});
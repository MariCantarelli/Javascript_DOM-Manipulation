function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("Não há uma página anterior no histórico.");
    }
}
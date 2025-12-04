function loadHTML(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(error => console.error('Chyba při načítání souboru:', error));
}
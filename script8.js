function detectKey(event) {
    console.log(`Tecla pressionada: ${event.key}`);
    
    // Exemplo extra: Impedir números
    if (!isNaN(event.key)) {
        event.preventDefault();
    }
}
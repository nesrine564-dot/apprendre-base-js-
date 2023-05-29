let interval= setInterval(() => {
    console.log('bonjour en retard');
}, 5000);



setTimeout(() => {
    clearInterval(interval);
}, 5500);
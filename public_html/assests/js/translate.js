let currentLocation = document.getElementsByTagName('html')[0].getAttribute('lang');

var button_ru = document.getElementById('ru');
var button_eng = document.getElementById('eng');
var button_esp = document.getElementById('esp');

if (currentLocation == 'ru') {
    button_esp.classList.add('disabled');
    button_eng.classList.add('disabled');
    button_ru.classList.remove('disabled');
}
if (currentLocation == 'en'){
    button_esp.classList.add('disabled');
    button_ru.classList.add('disabled');
    button_eng.classList.remove('disabled');
}
if (currentLocation == 'esp'){
    button_ru.classList.add('disabled');
    button_eng.classList.add('disabled');
    button_esp.classList.remove('disabled');
}

button_ru.addEventListener("click", function() {
    if(currentLocation != 'ru'){
        console.log('redirect ru');
        window.location.href = 'https://providenta.ru/index.php';
    }
});
button_eng.addEventListener("click", function() {
    if(currentLocation != 'en'){
        console.log('redirect en');
        window.location.href = 'https://providenta.ru/en/index.php';
    }
});
button_esp.addEventListener("click", function() {
    if(currentLocation != 'esp'){
        console.log('redirect en');
        window.location.href = 'https://providenta.ru/esp/index.php';
    }
});
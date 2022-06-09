var elements = document.querySelectorAll('.blur');

var options = {
    threshold: 0.5
}

elements.forEach((item, index) => {
    let observer = new IntersectionObserver(function (entries, obs) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible')

            } else {
                entry.target.classList.remove('visible')
            }
        });
    }, {threshold: [0.25]});

    // Задаем элемент для наблюдения
    let el = item;

    // Прикрепляем его к «наблюдателю»
    observer.observe(el);
});

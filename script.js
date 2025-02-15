// Получаем элементы
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохранённую тему
if (localStorage.getItem('theme') === 'light') {
    body.classList.replace('dark-theme', 'light-theme');
}

// Обработчик переключения темы
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});

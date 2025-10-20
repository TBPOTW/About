console.log("Сайт загружен! Добро пожаловать!");

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const icon = document.getElementById('theme-icon');

// Проверяем сохранённую тему из localStorage
let currentTheme = localStorage.getItem('theme') || 'light-theme';
body.classList.add(currentTheme);

// Переключение тем
toggleButton.addEventListener('click', () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
    icon.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'); // Иконка луны
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
    icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'); // Иконка солнца
    localStorage.setItem('theme', 'light-theme');
  }
});
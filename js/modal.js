// Получаем элементы
const modal = document.getElementById('feedbackModal');
const openButton = document.getElementById('openModalButton');
const closeButton = document.getElementById('closeModalButton');

// Открыть модальное окно
openButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрыть модальное окно
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрыть окно при клике вне модального контента
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

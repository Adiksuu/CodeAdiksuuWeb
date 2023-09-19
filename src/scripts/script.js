const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('h2');
    const answer = item.querySelector('.answer');
    const button = item.querySelector('button')

    question.addEventListener('click', () => {
        answer.classList.toggle('show'); // Toggle the 'show' class on click
        if (button.querySelector('i').classList.contains('fa-plus')) {
            button.querySelector('i').classList.replace('fa-plus', 'fa-minus')
        } else {
            button.querySelector('i').classList.replace('fa-minus', 'fa-plus')
        }
    });
});

const navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () => {
    navToggle.parentElement.classList.toggle('show')
})
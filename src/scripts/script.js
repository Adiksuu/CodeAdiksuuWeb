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


// OPEN LINKS FUNCTION
function openSiteInNewTab(url) {
    window.open(`https://${url}`, '_blank');
}

// REVEAL EFFECTS
window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("show");
        }
    }
}
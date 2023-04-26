const total_projects: HTMLParagraphElement = document.querySelector('#total_projects')
const total_time: HTMLParagraphElement = document.querySelector('#total_time')
const total_published: HTMLParagraphElement = document.querySelector('#total_published')

let total_projects_count = parseInt(total_projects.textContent.replace('+', ''))
let total_time_count = parseInt(total_time.textContent.replace('+', ''))
let total_published_count = parseInt(total_published.textContent.replace('+', ''))

let tpc = 0;
let ttc = 0;
let tppc = 0;
window.setInterval(() => {
    if (tpc < total_projects_count) {
    tpc++
        total_projects.innerHTML = `<i class="fa-solid fa-file-alt"></i> ${tpc} +`
    }
}, 28)
window.setInterval(() => {
    if (ttc < total_time_count) {
        ttc++
        total_time.innerHTML = `<i class="fa-solid fa-clock"></i> ${ttc}h +`
    }
}, 5)
window.setInterval(() => {
    if (tppc < total_published_count) {
    tppc++
    total_published.innerHTML = `<i class="fa-solid fa-share"></i> ${tppc} +`
    }
}, 80)
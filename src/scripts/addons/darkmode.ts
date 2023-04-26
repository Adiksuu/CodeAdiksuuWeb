const bodyElement: HTMLBodyElement = document.querySelector('body')
let toggleThemeButton: HTMLButtonElement = document.querySelector("#toggle");

let toggled: boolean = false

window.setTimeout(() => {
    toggleThemeButton = document.querySelector("#toggle");
    load()

    toggleThemeButton.addEventListener('click', function () {
        if (bodyElement.classList.contains('dark')) {
            bodyElement.classList.remove('dark')
            toggled = false
        } else {
            bodyElement.classList.add('dark')
            toggled = true
        }
        save()
    })
}, 100)

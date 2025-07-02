const titleEl = document.getElementById('page-title');
const countEl = document.getElementById('vanilla-count');
const button = document.getElementById('vanilla-btn');

let vanillaCount = 0;

button.addEventListener('click', () => {
    vanillaCount++;
    titleEl.textContent = `Title changed ${vanillaCount} time(s)!`;
    countEl.textContent = vanillaCount;
});
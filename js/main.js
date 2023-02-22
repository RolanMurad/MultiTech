// !Show-more
const btn = document.getElementById('show-more');
const projectsItem = Array.from(document.querySelectorAll('#projects__item'));
const invisibleItems = projectsItem.slice(3);

invisibleItems.forEach(function (e) {
  e.style.display = 'none';
})

btn.addEventListener('click', function () {
  invisibleItems.forEach(e => e.style.display = 'block');
  btn.style.display = 'none';
})


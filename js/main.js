// !Show-more
const btn = document?.getElementById('show-more');
const projectsItem = Array.from(document?.querySelectorAll('[data-projects]'));
const invisibleItems = projectsItem.slice(3);

invisibleItems?.forEach(function (e) {
  e.style.display = 'none';
})

btn?.addEventListener('click', function () {
  invisibleItems.forEach(e => e.style.display = 'block');
  btn.style.display = 'none';
})

// !Burger
const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelectorAll('[data-menu]');
burger?.addEventListener('click', function () {
  menu?.forEach(function (el) {
    el?.classList.toggle('md:translate-y-[-300%]');
  });
});

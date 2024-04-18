document.addEventListener("click", function () {
  const burgerButton = document.querySelector('.mobile-menu-burger-btn');
  const closeButton = document.querySelector('.mobile-menu-close-btn');
  const menuWrapper = document.querySelector('.mobile-menu-wrapper');
  const menuCloseLink = document.querySelector(".mobile-menu-container");
   menuCloseLink.addEventListener("click", event => {
    menuWrapper.classList.remove('is-open');
  });
  if (burgerButton && closeButton && menuWrapper) {
    burgerButton.addEventListener('click', function () {
      toggleMenu();
    });
    closeButton.addEventListener('click', function () {
      menuWrapper.classList.remove('is-open');
    });
  }

  function toggleMenu() {
    if (menuWrapper.classList.contains('is-open')) {
      menuWrapper.classList.remove('is-open');
    } else {
      menuWrapper.classList.add('is-open');
    }
  }
});

document.addEventListener('click', function (event) {
  const menuTitle = document.querySelector('.title-menu');
  const menuWrapper = document.querySelector('.tablet-menu-wrapper');
  if (event.target === menuTitle || event.target.closest('.tablet-menu-link')) {
    menuWrapper.classList.toggle('is-open');
  } else {
    menuWrapper.classList.remove('is-open');
  }

  const menuLinks = document.querySelectorAll('.tablet-menu-link');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuWrapper.classList.add('visually-hidden');
    });
  });

  const menuItems = document.querySelectorAll('.tablet-menu-item');
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      menuWrapper.classList.remove('is-open');
    });
  });
});


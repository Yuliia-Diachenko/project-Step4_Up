const refs = {
  coversWrapperMenuList: document.querySelectorAll('.covers-wrapper-menu-list'),
  coversContent: document.querySelector('.covers-content'),
};

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    for (let i = 0; i < refs.coversWrapperMenuList.length; i += 1) {
      refs.coversWrapperMenuList[i].classList.add('covers-animation');
    }
  } else {
    for (let i = 0; i < refs.coversWrapperMenuList.length; i += 1) {
      refs.coversWrapperMenuList[i].classList.remove('covers-animation');
    }
  }
});

observer.observe(refs.coversContent);

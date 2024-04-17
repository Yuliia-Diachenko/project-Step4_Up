// modal window open - close //
// const formFooterButton = document.querySelector(".footer-button-submit");
const modalWindow = document.querySelector(".modal-window");
const modalWindowClose = document.querySelector(".modal-close");

export function addClassIsOpenModal() {
    return modalWindow.classList.add("is-open");
};
function deleteClassIsOpenModal() {
    return modalWindow.classList.remove("is-open");
};
// const isOpenModalWindow = formFooterButton.addEventListener("click", addClassIsOpenModal); //open modal on submit form
const modalCloseButton = modalWindowClose.addEventListener("click", deleteClassIsOpenModal); // close moda on click x

//close modal keydown esc
const modalWindowCloseEsc = document.addEventListener("keydown", event => {
   if (event.key === "Escape") {       
        return modalWindow.classList.remove("is-open");
    };
  });

// close modal click backdrop
const modalWindowCloseBackDrop = modalWindow.addEventListener("click",event => {
    const clickedElement = event.target;
    console.log(clickedElement);
    if (clickedElement !== modalWindow) {
        return;
}
    return modalWindow.classList.remove("is-open");
})
// modal window open - close //
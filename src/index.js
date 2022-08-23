// Ввод данніх в инпут и по введенному запросу заросить массив из бєкенда
// Рендер полученного массива в HTML
// Убрать кнопку Load more если массив пуст
// 




import './css/style.css';
import { fetchPictures } from './js/fetchPictures';
import { renderPictures } from './js/renderPictures';
import { Notify } from 'notiflix';


const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
// const fetchPictures = fetchPictures;


let usersInput = '';
let page = 1;
const perPage = 40;



form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);


function onLoadMoreBtn() {
};

function onFormSubmit(e) {
    e.preventDefault()
    // loadMoreBtn.classList.add('is-hidden');
    //    const input = document.querySelector('input');
    // //  const textValue = e.target.value.trim();
    // if (input.value === '') {
    //     // warningEmptyInput()
    //     return Notify.warning("Sorry, there are no images matching your search query. Please try again.");
    // }
    // fetchPictures(input);
    // page = 1;
    // perPage = 40;

    page = 1;
    usersInput = e.currentTarget.searchQuery.value
    if (usersInput === '') {
        return Notify.warning("Sorry, there are no images matching your search query. Please try again.");
    }
    // loadMoreBtn.classList.add('is-hidden');
    gallery.innerHTML = '';
    // fetchPictures(usersInput, page, perPage)
    // renderPictures(fetchPictures)
fetchPictures(usersInput, page, perPage).then(({data}) => renderPictures(data.hits))
};

// fetchPictures(usersInput, page, perPage).then(({data}) => renderPictures(data.hits))




// function warningEmptyInput() {
//     return Notify.warning("Sorry, there are no images matching your search query. Please try again.");
// };
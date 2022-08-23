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
    page += 1;
    fetchPictures(usersInput, page, perPage).then(({ data }) => renderPictures(data.hits)).catch(error => console.log(error));;
    // Math.ceil(data.totalHits / perPage);
    
};

function onFormSubmit(e) {
    e.preventDefault()

    page = 1;
    usersInput = e.currentTarget.searchQuery.value
    loadMoreBtn.classList.add('is-hidden');
    gallery.innerHTML = '';
    if (usersInput === '') {
        return Notify.warning("Sorry, there are no images matching your search query. Please try again.");
    }
fetchPictures(usersInput, page, perPage).then(({ data }) => {
    if (data.totalHits === 0) {
        return Notify.failure('Images not found! Please, write correct request!')
    }
    else {
        
        if (data.totalHits === 1) {
                renderPictures(data.hits)
            Notify.success(`Yeap, we found ${data.totalHits} picture`);
            loadMoreBtn.classList.remove('is-hidden')
            return
        } else {
            renderPictures(data.hits)
            Notify.success(`Yeap, we found ${data.totalHits} pictures`);
            loadMoreBtn.classList.remove('is-hidden')
            return    
        }
    }
}).catch(error => console.log(error))
    .finally(() => {
      form.reset();
    });
};

// fetchPictures(usersInput, page, perPage).then(({data}) => renderPictures(data.hits))

// fetchPictures(usersInput, page, perPage).then(({ data }) => {
//     if (data.totalHits === 0) {
//         return Notify.failure('Images not found! Please, write correct request!')
//     }
//     else {
        
//         if (data.totalHits === 1) {
//                 renderPictures(data.hits)
//                  Notify.success(`Yeap, we found ${data.totalHits} picture`)
//             return
//         } else {
//             renderPictures(data.hits)
//             Notify.success(`Yeap, we found ${data.totalHits} pictures`)
//             return    
//         }
//     }
// })
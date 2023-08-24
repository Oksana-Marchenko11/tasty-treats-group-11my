import TestyApiService from './testyApiService';
import favApi from './favorites-api';

var debounce = require('lodash.debounce');
var throttle = require('lodash.throttle');

const testyApiService = new TestyApiService();
const categoryList = document.querySelector('.category-list');
const content = document.querySelector('.list-item');
const inputFilter = document.querySelector('.filter-input');
const areaFilter = document.querySelector('.area');
const ingredientsFilter = document.querySelector('.ingrediends');
const timeFilter = document.querySelector('.time');
const allCategoryBtn = document.querySelector('.all-category-btn');
const resetFilter = document.querySelector('.reset-filters');

resetFilter.addEventListener('click', e => {
    document.querySelector('.form-filters').reset();
    testyApiService.setResetFilters();
    renewRecipes();
});

for (let i = 5; i <= 120; i += 5) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i + ' min';
    timeFilter.appendChild(opt);
}

// triggers
inputFilter.addEventListener(
    'input',
    debounce(function (e) {
        console.log(e.target.value.trim());
        testyApiService.setSearchText(e.target.value.trim());
        renewRecipes();
    }, 300)
);

ingredientsFilter.addEventListener('change', function (e) {
    console.log(e.target.value);
    testyApiService.setSearchIngredient(e.target.value);
    renewRecipes();
});

areaFilter.addEventListener('change', function (e) {
    console.log(e.target.selectedOptions[0].dataset.param);
    testyApiService.setSearchArea(e.target.selectedOptions[0].dataset.param);
    renewRecipes();
});

categoryList.addEventListener('click', function (e) {
    categoryList.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active-button');
    });

    e.target.classList.add('active-button');
    console.log(e.target.dataset.recipeCategory);
    testyApiService.setCategory(e.target.dataset.recipeCategory);
    renewRecipes();
});

timeFilter.addEventListener('change', function (e) {
    console.log(e.target.value);
    testyApiService.setSearchTime(e.target.value);
    renewRecipes();
});

allCategoryBtn.addEventListener('click', function () {
    testyApiService.setCategory('');
    renewRecipes();
});

//ОТРИМУЄМО СПИСОК КАТЕГОРІЙ ПРИ ЗАВАНТАЖЕНІ СТОРІНКИ
testyApiService.getCategories().then(data => {
    data.forEach(category => {
        categoryList.innerHTML += `<li class="category-item-list"><button class="category-btn" data-recipe-category="${category.name}">${category.name}</button></li>`;
    });
});

//ОТРИМУЄМО СПИСОК КРАЇН
testyApiService.getAreas().then(data => {
    data.forEach(area => {
        const opt = document.createElement('option');
        opt.value = area._id;
        opt.innerHTML = area.name;
        opt.dataset.param = area.name;
        areaFilter.appendChild(opt);
    });
});

//ОТРИМУЄМО СПИСОК ІНГРІДІЄНТІВ
testyApiService.getIngredients().then(data => {
    data.forEach(element => {
        const opt = document.createElement('option');
        opt.value = element._id;
        opt.innerHTML = element.name;
        ingredientsFilter.appendChild(opt);
    });
});

window.onresize = throttle(function () {
    renewRecipes();
}, 500);

function perPage() {
    if (window.innerWidth < 768) testyApiService.setPerPage(6);
    else if (window.innerWidth < 1280) testyApiService.setPerPage(8);
    else testyApiService.setPerPage(9);
}

//ОТРИМУЄМО СПИСОК РЕЦЕПТІВ ПРИ ЗАВАНТАЖЕНІ СТОРІНКИ
renewRecipes();

const inactiveHeartSvg = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
        d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234
        5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912
        17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629
        19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219
        19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961
        13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434
        2.00948 12.8266 2.5652 10.9939 4.70783Z" stroke="#F8F8F8" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const activeHeartSvg = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path opacity="1" fill-rule="evenodd" clip-rule="evenodd"
        d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234
        5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912
        17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629
        19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219
        19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961
        13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434
        2.00948 12.8266 2.5652 10.9939 4.70783Z" stroke="#F8F8F8" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// functions
function createRatingStars(rating) {
    const starPath = `
        <path d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"></path>
    `;

    const ratingDiv = document.createElement('div');
    const dispRating = (Math.round(rating * 10) / 10).toFixed(1);
    ratingDiv.className = 'rating-recipe';
    ratingDiv.innerHTML = `<span class="rating-number-recipe">${dispRating}</span>`;

    const ul = document.createElement('ul');
    ul.className = 'stars';
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        if (i <= rating) {
            li.innerHTML = `
                <svg class="star star-filled" viewBox="0 0 34 32" data-rating="${i}" width="16" height="16">
                    ${starPath}
                </svg>            
            `;
        } else {
            li.innerHTML = `
                <svg class="star" viewBox="0 0 34 32" data-rating="${i}" width="16" height="16">
                    ${starPath}
                </svg>            
            `;
        }
        ul.appendChild(li);
    }

    ratingDiv.appendChild(ul);

    return ratingDiv;
}

function renewRecipes() {
    perPage();
    let favObj = favApi.getLs();
    testyApiService.getRecipes().then(data => {
        content.innerHTML = '';
        data.results.forEach(recipe => {
            let favClass = recipe._id in favObj ? 'favorite' : 'unfavorite';

            const li = document.createElement('li');
            li.className = 'item-cards';
            li.innerHTML = `    
                <div class="shadow-on-img" data-recipe-id="${recipe._id}">
                    <img class="card-img" src="${recipe.preview}" />
                </div>
                <button class="add-fav-btn ${favClass}"
                        data-recipe-id="${recipe._id}">
                    ${inactiveHeartSvg}
                </button>
                <span class="span-title" data-recipe-id="${recipe._id}">
                    ${recipe.title.toUpperCase()}
                </span>
                <span class="span-descr" data-recipe-id="${recipe._id}">
                    ${recipe.description}
                </span>
                <button class="main-see-recipe" data-recipe-id="${recipe._id}">
                    See recipe
                </button>
            `;

            li.appendChild(createRatingStars(recipe.rating));

            content.appendChild(li);
        });
        content.querySelectorAll('.add-fav-btn').forEach(button => {
            button.addEventListener('click', function (e) {
                let btn = e.target.closest('button');
                let res = favApi.togleFav(btn.getAttribute('data-recipe-id'));

                console.log('Result: ' + res);

                if (res) {
                    btn.innerHTML = activeHeartSvg;
                } else {
                    btn.innerHTML = inactiveHeartSvg;
                }
            });
        });
        content.querySelectorAll('.main-see-recipe').forEach(button => {
            let modal = require('./modal-recipe.js');
            button.addEventListener('click', e => {
                modal.default.open(e.target.dataset.recipeId);
            });
        });

        const container = document.querySelector('.pagination');
        pagination(data.page, data.totalPages, container, renewRecipes);
        console.log(data);
    });
}
// Пагінація*************************************************************************************
function pagination(page, total, container, callback) {
    page = Number(page);
    total = Number(total);
    let btns = window.innerWidth < 768 ? 2 : 3;
    console.log(page, total);

    if (total > 1) {
        container.innerHTML = '';
        if (page === 1) {
            // inactive prev b
            container.innerHTML += `<button class="main-pag-btn" disabled><<</button>`;
            container.innerHTML += `<button class="main-pag-btn" disabled><</button>`;
        } else {
            // active prev b
            container.innerHTML += `<button class="main-pag-btn main-pag-btn-green" data-topage="1"><<</button>`;
            container.innerHTML += `<button class="main-pag-btn main-pag-btn-green" data-topage="${
                page - 1
            }"><</button>`;
        }
        for (let i = page - btns; i <= page + btns; i++) {
            if (i > 0 && i <= total) {
                if (i === page) {
                    //current page b
                    container.innerHTML += `<button class="main-pag-btn main-pag-btn-green active"  data-topage="${i}">${i}</button>`;
                } else if (i === page + btns || i === page - btns) {
                    //other pages b
                    container.innerHTML += `<button class="main-pag-btn" data-topage="${i}">...</button>`;
                } else {
                    //other pages b
                    container.innerHTML += `<button class="main-pag-btn" data-topage="${i}">${i}</button>`;
                }
            }
        }
        if (page === total) {
            // inactive forward b
            container.innerHTML += `<button class="main-pag-btn" disabled>></button>`;
            container.innerHTML += `<button class="main-pag-btn" disabled>>></button>`;
        } else {
            // active forward b
            container.innerHTML += `<button class="main-pag-btn main-pag-btn-green" data-topage="${
                page + 1
            }">></button>`;
            container.innerHTML += `<button class="main-pag-btn main-pag-btn-green" data-topage="${total}">>></button>`;
        }
        container.querySelectorAll('[data-topage]').forEach(btn => {
            /* console.log(btn.dataset.topage); */
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                testyApiService.setPage(Number(e.target.dataset.topage));
                callback();
            });
        });
    }
}
// const buttonPag = document.querySelectorAll('.main-pag-btn');
// buttonPag.addEventListener('click',)

// 22 /08 /

function addToLocalStor(e) {
    console.log(e.target.dataset.recipeId);
    // localStorage.setItem(JSON.stringify(a))
}

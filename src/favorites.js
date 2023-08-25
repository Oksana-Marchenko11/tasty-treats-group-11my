// Оновлений JavaScript зі скролом
import {activeHeartSvg, inactiveHeartSvg, createRatingStars} from "./js/assets.js";

const throttle = require('lodash.throttle');

const categoryListFavorite = document.querySelector('.category-list-favorites');
const favoritesList = document.querySelector('.favorites-list');
const paginationDiv = document.querySelector('#pagination');
const emptyFavoritesMsg = document.querySelector('.favorites-wrap');
const categoriesBoxFavorites = document.querySelector(
    '.categories-box-favorites'
);

let favApi = require('./js/favorites-api').default;
let perPageLimit = 9;
let presentCategories = [];
let favCount = 0;
let currentCategory = '';

window.onresize = throttle(function () {
    renewRecipes();
}, 500);

function getFavoritesListLen() {
    return favoritesList.querySelectorAll(".item-cards").length;
}

function populateCategoryButtons() {
    categoryListFavorite.innerHTML = presentCategories.sort()
        .map(category => {
            return `<li class="favourites-list-btn"><button class="category-btn all-tags" data-recipe-category="${category}">${category}</button></li>`;
        })
        .join('');

    categoryListFavorite.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            currentCategory = e.target.dataset.recipeCategory;
            console.log(e.target.dataset.recipeCategory);
            // Оновлюємо вподобані рецепти
            renewRecipes();
        });
    });

    document.querySelector('.all-tags').addEventListener('click', () => {
        currentCategory = '';
        console.log('categories reset', currentCategory);
        // Оновлюємо вподобані рецепти
        renewRecipes();
    });
}

function populateCards(favValues, page, cardsArray) {
    let counter = 0;
    favValues.forEach(recipe => {
        let start = page === 1 ? 0 : (page - 1) * perPageLimit;
        let end = page === 1 ? perPageLimit : page * perPageLimit;
        if (!((currentCategory && recipe.category === currentCategory) ||
            !currentCategory)) {
            return;
        }

        counter++;
        if (!(cardsArray.length < perPageLimit &&
            counter > start &&
            counter <= end)) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'item-cards';
        li.innerHTML = `
            <div class="shadow-on-img" data-recipe-id="${recipe._id}">
                <img class="card-img" src="${recipe.preview}" />
            </div>
            <button class="add-fav-btn"
                    data-recipe-id="${recipe._id}">
                ${activeHeartSvg}
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
        favoritesList.appendChild(li);
    });
    return counter;
}

function collectCategories(favValues) {
    favValues.forEach(recipe => {
        if (!presentCategories.includes(recipe.category)) {
            presentCategories.push(recipe.category);
        }
    });

    if (!presentCategories.includes(currentCategory)) {
        currentCategory = '';
    }
}

function favNotEmpty() {
    return getFavoritesListLen() > 0;
}

function renewRecipes(page) {
    page ||= 1;
    page = Number(page);
    let favObj = favApi.getLs();
    let favValues = Object.values(favObj);
    let cardsArray = [];
    presentCategories = [];
    favCount = favObj.length;
    favoritesList.innerHTML = '';

    // Додати виклик функції setElementsPerPage для встановлення кількості карточок на сторінці
    setElementsPerPage();

    // Populate categories
    collectCategories(favValues);

    let counter = populateCards(favValues, page, cardsArray);

    populateCategoryButtons();

    categoriesBoxFavorites.addEventListener('scroll', event => {
        // Отримуємо поточну позицію прокрутки
        const scrollLeft = categoriesBoxFavorites.scrollLeft;

        // Отримуємо ширину контейнера і вираховуємо, чи потрібно показувати горизонтальний скрол
        const containerWidth = categoriesBoxFavorites.clientWidth;
        const contentWidth = categoriesBoxFavorites.scrollWidth;

        if (contentWidth <= containerWidth) {
            // Якщо контент поміщається в контейнер, приховуємо скрол
            categoriesBoxFavorites.style.overflowX = 'hidden';
        } else {
            // Інакше показуємо скрол
            categoriesBoxFavorites.style.overflowX = 'scroll';
        }

        // Опрацьовуємо подію при прокручуванні
        // Ви можете додати необхідний код тут, якщо потрібно
    });

    // if (favNotEmpty()) {
    //     if (contentWidth <= containerWidth) {
    //         // Якщо контент поміщається в контейнер, приховуємо скрол
    //         categoriesBoxFavorites.style.overflowX = 'hidden';
    //     } else {
    //         // Інакше показуємо скрол
    //         categoriesBoxFavorites.style.overflowX = 'scroll';
    //     }
    //
    //     // Опрацьовуємо подію при прокручуванні
    //     // Ви можете додати необхідний код тут, якщо потрібно
    // }


    if (favNotEmpty()) {
        favoritesList.querySelectorAll('.add-fav-btn').forEach(button => {
            button.addEventListener('click', function (e) {
                let btn = e.target.closest('button');
                let res = favApi.togleFav(btn.getAttribute('data-recipe-id'));

                console.log('Result: ' + res);

                if (res) {
                    btn.innerHTML = activeHeartSvg;
                } else {
                    btn.innerHTML = inactiveHeartSvg;
                }
                renewRecipes();
            });
        });

        favoritesList.querySelectorAll('.main-see-recipe').forEach(button => {
            let modal = require('./js/modal-recipe');
            button.addEventListener('click', e => {
                console.log(e.target.dataset);
                modal.default.open(e.target.dataset.recipeId);
            });
        });

        if (counter > perPageLimit) {
            pagination(
                page,
                Math.ceil(counter / perPageLimit),
                paginationDiv,
                renewRecipes
            );
        } else {
            paginationDiv.innerHTML = '';
        }
        emptyFavoritesMsg.style.display = 'none';
        document.querySelector('.tags-container').style.display = 'flex';
    } else {
        emptyFavoritesMsg.style.display = 'flex';
        document.querySelector('.tags-container').style.display = 'none';
    }
}

// Означення функції setElementsPerPage для встановлення кількості карточок на сторінці
function setElementsPerPage() {
    let cardsPerPage = 12; // Задайте бажану кількість карточок на сторінку

    if (window.innerWidth < 768) {
        cardsPerPage = 9; // Змініть це значення для мобільних пристроїв з меншою шириною
    }

    perPageLimit = cardsPerPage;
}

renewRecipes();

// pagination
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
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                callback(Number(e.target.dataset.topage));
            });
        });
    }
}

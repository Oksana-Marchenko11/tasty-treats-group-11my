const throttle = require('lodash.throttle');

const categoryListFavorite = document.querySelector('.category-list-favorites');
const favoriteCards = document.querySelector('.favorites-list');
const favorPagin = document.querySelector('#pagination');
const favCaptive = document.querySelector('.favorites-text');

let AllCategories = [];

let favCount = 0;
let perPageLimit = 3;
let currentCategory = '';

window.onresize = throttle(function () {
    renewRecipes();
}, 500);

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

export function createRatingStars(rating) {
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

// functions
function renewRecipes(page) {
    page ||= 1;
    page = Number(page);
    let favApi = require('./js/favorites-api').default;
    let favObj = favApi.getLs();
    let cardsArray = [];
    AllCategories = [];
    favCount = 0;
    perPageLimit = window.innerWidth < 768 ? 2 : 3;
    let counter = 0;
    Object.keys(favObj).forEach(id => {
        let recipe = favObj[id];
        //console.log(id, recipe);
        favCount++;
        if (!AllCategories.includes(recipe.category)) {
            AllCategories.push(recipe.category);
        }
    });
    currentCategory = AllCategories.includes(currentCategory)
        ? currentCategory
        : '';
    Object.keys(favObj).forEach(id => {
        let recipe = favObj[id];
        //console.log(recipe);
        let totalCards = 0;
        let start = page === 1 ? 0 : (page - 1) * perPageLimit;
        let end = page === 1 ? perPageLimit : page * perPageLimit;
        if (
            (currentCategory && recipe.category === currentCategory) ||
            !currentCategory
        ) {
            counter++;
            if (
                cardsArray.length < perPageLimit &&
                counter > start &&
                counter <= end
            ) {
                totalCards++;
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
                    <button class="main-see-recipe" data-recipe-id="${
                        recipe._id
                    }">
                        See recipe
                    </button>
                `;

                li.appendChild(createRatingStars(recipe.rating));

                favoriteCards.appendChild(li);
            }
        }
    });
    
    const markup = AllCategories.sort()
        .map(category => {
            return `<li class="favourites-list-btn"><button class="category-btn" data-recipe-category="${category}">${category}</button></li>`;
        })
        .join('');
    categoryListFavorite.innerHTML = markup;

    categoryListFavorite.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            currentCategory = e.target.dataset.recipeCategory;
            console.log(e.target.dataset.recipeCategory);
            // renew favors
            renewRecipes();
        });
    });

    document.querySelector('.all-tags').addEventListener('click', () => {
        currentCategory = '';
        console.log('categories reset', currentCategory);
        // renew favors
        renewRecipes();
    });
    if (favoriteCards.querySelectorAll(".item-cards").length) {
        favoriteCards.querySelectorAll('.add-fav-btn').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                let res = favApi.togleFav(e.target.dataset.recipeId);
                // console.log(res);
                renewRecipes(page);
                // if (res) togle class  'favorite' : 'unfavorite'
            });
        });
        favoriteCards.querySelectorAll('.main-see-recipe').forEach(button => {
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
                favorPagin,
                renewRecipes
            );
        } else {
            favorPagin.innerHTML = '';
        }
        favCaptive.style.display = 'none';
        document.querySelector('.favorites-tags').style.display = 'flex';
    } else {
        favCaptive.style.display = 'flex';
        document.querySelector('.favorites-tags').style.display = 'none';
    }
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
            /* console.log(btn.dataset.topage) */ btn.addEventListener(
                'click',
                function (e) {
                    e.preventDefault();
                    callback(Number(e.target.dataset.topage));
                }
            );
        });
    }
}

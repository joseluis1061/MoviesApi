searchFormBtn.addEventListener('click', () => {
    location.hash = '#search='+searchFormInput.value;
});
  
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});
  
arrowBtn.addEventListener('click', () => {
    history.back();
});
  
window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
  
function navigator() {
    location.hash.startsWith('#trends')?  trendsPage():
    location.hash.startsWith('#search')?  searchPage():
    location.hash.startsWith('#movie') ? movieDetailsPage():
    location.hash.startsWith('#category')? categoriesPage():homePage();
}

function homePage() {
    console.log('Home!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');   
    getTrendingMoviesPreview();
    getCategoriesPreview();    

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

function categoriesPage() {
    console.log('categories!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    //[category, id-name]
    const [_, categoryData] = location.hash.split('='); 
    const [idCategory, categoryName] = categoryData.split('-'); 
    headerCategoryTitle.innerHTML = categoryName;
    getMoviesByCategory(idCategory);

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function movieDetailsPage() {
    console.log('Movie!!');

    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    //[search, searchValue]
    const [_, movieId] = location.hash.split('=');
    if(movieId){
        getMovieById(movieId);
    }
}

function searchPage() {
    console.log('Search!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //[search, searchValue]
    const [_, query] = location.hash.split('=');
    if(query){
        getMoviesBySearch(query);
    }
}

function trendsPage() {
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



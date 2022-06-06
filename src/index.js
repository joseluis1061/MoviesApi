//Url de api para consumir
const trending = 'trending/movie/day?';
const genre = 'genre/movie/list?';
const movieGenres = 'discover/movie';
const searchMovie = 'search/movie';
const movieById = 'movie/'

const URL_IMG = 'https://image.tmdb.org/t/p/w300';
const URL_IMG500 = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-type': 'aplication/json;charset=utf-8'
    },
    params:{
        'api_key': Api_key,
    }
  });

//Utils
function createMovies(movies, container){
    container.innerHTML = '';
    const nodosMovies = movies.map(movie => {
        const divMovieContainer = document.createElement('DIV');
        divMovieContainer.className = 'movie-container';

        const imgMovieContainer = document.createElement('IMG');
        imgMovieContainer.className = 'movie-img';
        imgMovieContainer.setAttribute('alt', 'original_title');
        imgMovieContainer.setAttribute('src',  URL_IMG+movie.poster_path);
        divMovieContainer.appendChild(imgMovieContainer);    

        divMovieContainer.addEventListener('click', ()=>{
            location.hash = 'movie='+movie.id;
        });
        return divMovieContainer;
    });    
    container.append(...nodosMovies);

}

function createCategories(categories, container){
    container.innerHTML = '';
    const nodeGenrest = categories.map(genre =>{
        const divCategoryContainer = document.createElement('DIV');
        divCategoryContainer.className = 'category-container';

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.setAttribute('id','id'+genre.id);
        categoryTitle.textContent = genre.name;

        categoryTitle.addEventListener('click',()=>{
            location.hash = `#category=${genre.id}-${genre.name}`;
        });

        divCategoryContainer.appendChild(categoryTitle);
        return divCategoryContainer;
    });
    container.append(...nodeGenrest);
}

//Llamados a la api
async function getTrendingMoviesPreview(){
    const {data} = await api(trending);
    //const data = await res.json();
    const movies = data.results;
    //console.log(movies)
    const trendingPreviewMovieList = document.querySelector('#trendingPreview .trendingPreview-movieList');
    createMovies(movies, trendingPreviewMovieList);
}

async function getCategoriesPreview(){
    const {data} = await api(genre);
    const categories = data.genres; 
    createCategories(categories, categoriesPreviewList);
}

async function getMoviesByCategory(id){
    const {data} = await api(movieGenres,{
        params:{
            with_genres:id,
        }
    });
    const movies = data.results;
    createMovies(movies, genericSection);
}

async function getMoviesBySearch(query){
    const {data} = await api(searchMovie,{
        params:{
            query,
        }
    });
    const movies = data.results;
    createMovies(movies, genericSection);
}

async function getMovieById(id){
    const {data: movie} = await api(movieById+id);

    const movieImgUrl =  URL_IMG500+movie.poster_path;
    headerSection.style.background = `
    linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.35) 19.27%, 
        rgba(0, 0, 0, 0) 29.17%
    ),
    url(${movieImgUrl})
    `;    

    movieDetailTitle.textContent = movie.tittle;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;

    createCategories(movie.genres, movieDetailCategoriesList);
}
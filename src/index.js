const trending = 'trending/movie/day?';
const genre = 'genre/movie/list?';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-type': 'aplication/json;charset=utf-8'
    },
    params:{
        'api_key': Api_key,
    }
  });


const URL_IMG = 'https://image.tmdb.org/t/p/w300';

async function getTrendingMoviesPreview(){
    const {data} = await api(trending);
    //const data = await res.json();
    const movies = data.results;
    //console.log(movies)
    
    const nodosMovies = movies.map(movie => {
        const divMovieContainer = document.createElement('DIV');
        divMovieContainer.className = 'movie-container';

        const imgMovieContainer = document.createElement('IMG');
        imgMovieContainer.className = 'movie-img';
        imgMovieContainer.setAttribute('alt', 'original_title');
        imgMovieContainer.setAttribute('src',  URL_IMG+movie.poster_path);

        divMovieContainer.appendChild(imgMovieContainer);
    
        return divMovieContainer;
    });
    const trendingPreviewMovieList = document.querySelector('#trendingPreview .trendingPreview-movieList');
    trendingPreviewMovieList.append(...nodosMovies);
}
getTrendingMoviesPreview()


async function getCategoriesPreview(){
    const {data} = await api(genre);
    const categorys = data.genres; 

    const nodeGenrest = categorys.map(genre =>{
        const divCategoryContainer = document.createElement('DIV');
        divCategoryContainer.className = 'category-container';

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.setAttribute('id','id'+genre.id);
        categoryTitle.textContent = genre.name;

        divCategoryContainer.appendChild(categoryTitle);
        return divCategoryContainer;
    });

    const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list');

    categoriesPreviewList.append(...nodeGenrest);
}
getCategoriesPreview()
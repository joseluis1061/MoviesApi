const URL_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key='+Api_key;
const URL_IMG = 'https://image.tmdb.org/t/p/w300'
async function getTrendingMoviesPreview(URL_API){
    const res = await fetch(URL_API);
    const data = await res.json();
    const movies = data.results;
    console.log({data, movies});

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
getTrendingMoviesPreview(URL_API)
window.addEventListener('DOMContendLoaded', navigator, false);
window.addEventListener('DOMContendLoaded', navigator, false);

function navigator() {
    if(location.hash.startsWith('#trends')){
       return console.log(`Inicia con ${location.hash}`)
    }
    if(location.hash.startsWith('#search')){
        return console.log(`Inicia con ${location.hash}`)
    }
    if(location.hash.startsWith('#movie')){
        return console.log(`Inicia con ${location.hash}`)
    }
    if(location.hash.startsWith('#category')){
        return console.log(`Inicia con ${location.hash}`)
    }else{
        homePage()
    }
}
navigator()

function trendsPage(){
    console.log(`Inicia con ${location.hash}`);
}

function searchPage(){
    console.log(`Inicia con ${location.hash}`);
}

function moviePage(){
    console.log(`Inicia con ${location.hash}`);
}

function categoryPage(){
    console.log(`Inicia con ${location.hash}`);
}

function homePage(){
    console.log(`Inicia con ${location.hash}`);
    getTrendingMoviesPreview();
    getCategoriesPreview();
}


document.getElementById('TrendingMoviesbtn').addEventListener('click',TrendingMoviesFind);
const container =document.getElementById('Moviescontainer')
 async function TrendingMoviesFind() {
    const apikey=`https://api.themoviedb.org/3/trending/movie/day?api_key=7f0d76dbdf23f89379aae743b43ad679`;
    const response=await fetch(apikey);
    const data=await response.json();
    console.log(data);
    
    let movieList = '<h3>Trending Movies:</h3>';
        data.results.forEach(movie => {
            movieList += `
                <div>
                    <h4>${movie.title} (${movie.release_date})</h4>
                    
                    <p>Rating: ${movie.vote_average}</p>
                </div>
            `;
        
        container.innerHTML=movieList;
    });
    

}

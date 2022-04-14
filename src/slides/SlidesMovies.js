import React from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel"


const apiFilmes = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=bf998da7333199c258f7f90921d6e7fb&language=en-US&page=1"
})
export default class MoviesSlides extends React.Component{
    state = {
        movies: []
    }

    componentDidMount(){
        this.getMovies()
    }

    getMovies = async () => {
        const response = await apiFilmes.get()

        const filmes = response.data.results.map((item) => {
    return{
      ...item,
      poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
    };
  })

  this.setState({
      movies: filmes
  })

}

    render(){
        return(
            <div>
                <Carousel className="carousel-movies" itemsToShow={4}>
                    {this.state.movies.map((item) =>(
                        <img className="img-carousel" src={item.poster_path} alt={item.title}/>
                    ))}
                </Carousel>
            </div>
        )
    }
}
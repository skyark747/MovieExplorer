import Movie from "./Movie";
import Action from "./Movies";
import Adventure from "./Adventure";
import { useEffect, useState,useContext } from "react";
import MovieContext from "./Context";


const MovieList = () => {

    const [count, setCount] = useState(0);

    const { Movies, SetMovies } = useContext(MovieContext);


    useEffect(() => {
        alert("Movie Added to Favorites");
    }, [count]);
    
    function inc() {
        setCount(count + 1);
    }

    return (
        
        <div class=" w-full h-auto mt-4">
            <a href="#" className="w-full h-full" onClick={inc}>
            <div class="w-95 h-full gap-2 grid grid-cols-4">
                {Movies.map((item, index) => (
                    <Movie key={index}
                        img_src={item.url}
                        name={item.name}
                        rating={item.rating}
                        genre={item.genre}
                        date={item.date}
                    />
                ))}
                </div>
            </a>
        </div>
    );
}

export default MovieList;
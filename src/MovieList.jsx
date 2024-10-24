import Movie from "./Movie";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import MovieContext from "./Context";

const MovieList = () => {
    

    return (
        <div class=" w-full h-auto mt-4">
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
            </div>
    );
}

export default MovieList;
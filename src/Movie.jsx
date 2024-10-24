import { useEffect, useState } from "react";
import MovieContext from "./Context";

const Movie = ({ img_src, name, rating, genre, date }) => {
   
    return (
        <a href="#" className="h-11/12 w-full bg-red-300 rounded-2xl justify-center items-center">
            <div className="w-11/12 h-full ml-4 mt-2">
                <img src={img_src} alt="movie" className="w-full h-3/4 rounded-2xl" />
                <div className="w-full h-1/2">
                    <div className="flex justify-between">
                        <h2 className="font-semibold">{name}</h2>
                        <h2>{rating}</h2>
                    </div>
                    <p className="text-black">{genre}</p>
                    <p className="text-black">{date}</p>
                </div>
            </div>
            
        </a>
    );
}

export default Movie;
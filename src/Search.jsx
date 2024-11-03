import { useContext, useState, useEffect } from "react";
import Action from "./Movies";
import Adventure from "./Adventure";
import MovieContext from "./Context";
const Search = () => {
    const { Movies, SetMovies } = useContext(MovieContext);
    const [value, Setvalue] = useState('');
    function setMovies(value) {
        if (value === "Action") {
            SetMovies(Action);
        }
        else if (value === "Adventure") {
            SetMovies(Adventure);
        }
    }
    useEffect(() => {
        setMovies(value);
    }, [value]);
    return (
        <div className="w-full h-full bg-black mt-2">
            <input
                type="text"
                placeholder="Search"
                class="w-1/2 h-full bg-white mt-2 rounded-2xl"  onChange={(e) => Setvalue(e.target.value)}/>
        </div>
    );
}

export default Search;
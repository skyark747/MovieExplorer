import Search from "./Search";
const Navbar = () => {
    return (
        <div className="w-full h-24 bg-black flex justify-between">
            <div className="w-1/2 h-1/2 item-center justify-center">
                <h1 className="text-white text-2xl ml-10 mt-4">Soban's Movie Explorer</h1>
            </div>
            <div className="w-1/2 h-1/2 item-center justify-center">
                <Search />
            </div>
        </div>
    );
}

export default Navbar;
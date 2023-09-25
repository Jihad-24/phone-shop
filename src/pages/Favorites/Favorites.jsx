import { useEffect } from "react";
import { useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
    const [Favorites, setFavorites] = useState([]);
    const [noFavorites, setNoFavorites] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const favoriteItem = JSON.parse(localStorage.getItem('favorite'))
        if (favoriteItem) {
            setFavorites(favoriteItem);
            const total = favoriteItem.reduce((prevalue, curvalue) => prevalue + curvalue.price, 0)
            setTotalPrice(total)
            
        } else {
            setNoFavorites("You don't have any Favorites")
        }
    }, []);
    const handleRemove = () => {
        localStorage.clear()
        setFavorites([])
        setNoFavorites("You don't have any Favorites")
    }
    return (
        <div>
            {
                noFavorites ? <h1 className="h-[80vh] text-2xl font-bold italic flex justify-center items-center">{noFavorites}</h1> :
                    <div>
                        {Favorites.length > 0 && <div>
                            <button onClick={handleRemove} className="px-5 py-1 rounded-md bg-green-200 mx-auto block">Delete All Favorites</button>
                            <h1 className="px-5 py-2 rounded font-semibold mx-auto text-center">Total Price : ${totalPrice}</h1>
                        </div>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
                            {
                                isShow ? Favorites.map(phone => <FavoritesCard key={phone.id} phone={phone} ></FavoritesCard>)
                                    :
                                    Favorites.slice(0, 4).map(phone => <FavoritesCard key={phone.id} phone={phone} ></FavoritesCard>)
                            }
                        </div>
                        {Favorites.length > 4 ? <button onClick={() => setIsShow(!isShow)} className="px-5 py-2 rounded bg-green-200 mx-auto block">{isShow ? 'See Less' : 'See More'}</button> : ''}
                    </div>
            }
        </div>
    );
};

export default Favorites;
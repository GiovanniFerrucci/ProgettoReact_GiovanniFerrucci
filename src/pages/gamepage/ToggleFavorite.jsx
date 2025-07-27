import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoritesContext from "../context/FavoritesContext";

export default function ToggleFavorite({ data }) {
    const { favorites, addFavorites, removeFavorite } = useContext(FavoritesContext);
    
    const isFavorite = () => favorites.find((el) => +el.game_id === data?.id);
    
    return (
        <div>
        {isFavorite() ? (
            <button onClick={() => removeFavorite(data.id)}>
            <FaHeart />
            </button>
        ) : (
            <button onClick={() => addFavorites(data)}>
            <FaRegHeart />
            </button>
        )}
        </div>
    );
}


// import { useContext, useState } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import supabase from "../supabase/supabase-client";
// import SessionContext from "../context/SessionContext";

// export default function ToggleFavorite({ data }) {
//     const { session } = useContext(SessionContext);
//     const [favorites, setFavorites] = useState([]);

//     const isFavorite = () => favorites.find((el) => +el.game_id === data.id);

//     const addFavorites = async (game) => {
    //         const { data, error } = await supabase
//         .from("favorites")
//         .insert([
//             {
//                 user_id: session?.user.id,
//                 game_id: game.id,
//                 game_name: game.name,
//                 game_image: game.background_image,
//             },
//         ])
//         .select();
//         if (error) {
//             alert(error);
//         } else {
    //             setFavorites(data);
//         }
//     };

//     const removeFavorite = async (game) => {
    //         const { error } = await supabase
//         .from("favorites")
//         .delete()
//         .eq("game_id", game.id)
//         .eq("user_id", session?.user.id);
//         if (error) {
//             alert(error);
//         } else {
    //             setFavorites((prev) =>
        //                 prev.filter(
//                 (el) =>
    //                     el.game_id !== game.id &&
//                 el.user_id !== session?.user.id
//             )
//         );
//     }
// };

// return (
//     <div>
//     {isFavorite() ? (
//         <button onClick={() => removeFavorite(data)}>
//         <FaHeart />
//         </button>
//     ) : (
//         <button onClick={() => addFavorites(data)}>
//         <FaRegHeart />
//         </button>
//     )}
//     </div>
// );
// }

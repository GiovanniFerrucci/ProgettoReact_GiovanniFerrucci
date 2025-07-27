import { useParams } from "react-router";
import useFetchSolution from "../hooks/useFetchSolution";

export default function GamePage() {
    const { id } = useParams();
    const initialUrl = `https://api.rawg.io/api/games/${id}?key=926195194463d79a21dce8c87a`;
    
    const { data, loading, error } = useFetchSolution(initialUrl);
    
    return (
        <div>
        {loading && <p>Caricamento...</p>}
        {error && <p>Errore: {error}</p>}
        {data && (
            <>
            <h1>{data.name}</h1>
            <div className="style-game-info">
            <img src={data.background_image} alt={data.description_raw} />
            <h2>Rating: {data.rating}</h2>
            </div>
            <div className="style-chatbox">
            <Chatbox data={data && data} />
            </div>
            </>
        )}
        </div>
    );
}

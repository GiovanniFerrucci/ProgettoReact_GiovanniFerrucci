import { useParams } from "react-router";
import useFetchSolution from "../../hooks/useFetchSolution";
import CardGame from '../../components/CardGame';

export default function GenrePage() {
    const { genre } = useParams();
    
    const initialUrl = `https://api.rawg.io/api/games?key=9269195f491e44539d7a2d10ce87ab15&genres=${genre}&page=1`;
    
    const { data, loading, error } = useFetchSolution(initialUrl);
    
    return (
        <>
        <h2>Welcome to {genre} page</h2>
        {loading && <p>Caricamento...</p>}
        {error && <article>{error}</article>}
        <div className="grid-games-list">
        {data &&
            data.results.map((game) => (
                <CardGame key={game.id} game={game} />
            ))}
            </div>
            </>
        );
    }
    
    
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import CardGame from "../../components/CardGame";
import useFetchSolution from "../../hooks/useFetchSolution";

export default function SearchPage() {
    let [searchParams] = useSearchParams();
    const game = searchParams.get("query");
    
    const initialUrl = `https://api.rawg.io/api/games?key=9269195f491e44539d7a2d10ce87ab15&search=${game}`;
    
    const { loading, data, error, updateUrl } = useFetchSolution(initialUrl);
    
    useEffect(() => {
        updateUrl(initialUrl);
    }, [initialUrl, updateUrl]);
    
    return (
        <div className="container">
        <h1>Risultati per: {game} game</h1>
        {loading && <p>loading...</p>}
        {error && <h1>{error}</h1>}
        <div>
        {data &&
            data.results.map((game) => (
                <CardGame key={game.id} game={game} />
            ))}
            </div>
            </div>
        );
    }
    
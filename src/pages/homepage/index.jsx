import useFetchSolution from "../hooks/useFetchSolution";
import CardGame from "../components/CardGame";

export default function HomePage() {
    const initialUrl = `https://api.rawg.io/api/games?key=9269195f491e44539d7ad210ce87ab15&dates=2024-01-01,2024-12-31&page=1`;
    
    const { data, loading, error } = useFetchSolution(initialUrl);
    
    return (
        <>
        <h1>Home Page</h1>
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
    
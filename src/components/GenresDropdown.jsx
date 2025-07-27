import { Link } from 'react-router';
import useFetchSolution from '../hooks/useFetchSolution';

export default function GenresDropdown() {
    const initialUrl = "https://api.rawg.io/api/genres?key=9269195f491e44539d7a2d10ce87ab15";
    const { data: genres, loading, error } = useFetchSolution(initialUrl);
    
    return (
        <details className="dropdown">
        <summary>Genres</summary>
        {loading && <small>Caricamento generi...</small>}
        {error && <small>{error}</small>}
        <ul>
        {genres &&
            genres.results.map((genre) => (
                <li key={genre.id}>
                <Link to={`/games/${genre.slug}`}>{genre.name}</Link>
                </li>
            ))}
            </ul>
            </details>
        );
    }
    
    
    
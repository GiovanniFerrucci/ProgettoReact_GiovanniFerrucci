import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import supabase from "../supabase/supabase-client";
import SessionContext from "../context/SessionContext";

export default function Header() {
    const navigate = useNavigate();
    const { session } = useContext(SessionContext);
    
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) console.log(error);
        alert("Signed out 👋🏼");
        navigate("/");
    };
    
    return (
        <nav>
        <ul>
        <li>
        <strong>Rehacktor</strong>
        </li>
        {session ? (
            <ul>
            <details className="dropdown">
            <summary>Hey {session?.user.user_metadata.first_name} 👋🏼</summary>
            <ul dir="rtl">
            <li>
            <Link to="/account">Account</Link>
            </li>
            <li>
            <button onClick={signOut}>logout</button>
            </li>
            </ul>
            </details>
            </ul>
        ) : (
            <ul>
            <li>
            <Link to="/login" className="secondary">
            Login
            </Link>
            </li>
            <li>
            <Link to="/register" className="secondary">
            Register
            </Link>
            </li>
            </ul>
        )}
        </ul>
        </nav>
    );
}





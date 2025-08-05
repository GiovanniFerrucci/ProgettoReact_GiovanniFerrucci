import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/homepage/Homepage';
import Layout from '../layout/Layout';
import GenrePage from '../pages/genrePage/GenrePage';
import GamePage from '../pages/gamepage/GamePage';
import SearchPage from '../pages/SearchPage';
import ErrorPage from '../pages/Error';
import RegisterPage from '../pages/Register';
import LoginPage from '../pages/Login';
import AccountPage from '../pages/account/index';

export function Routing() {
    return (
        <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:genre" element={<GenrePage />} />
        <Route path="/games/:slug/:id" element={<GamePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/account" element={<AccountPage />}/>
        </Route>
        </Routes>
        </BrowserRouter>
    );
}

import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from '../pages/homepage/index';
import Layout from '../layout/Layout';
import GenrePage from '../pages/genrepage/GenrePage';
import GamePage from '../pages/gamepage/GamePage';
import SearchPage from '../pages/searchpage/index';
import ErrorPage from '../pages/error/index';
import RegisterPage from '../pages/register/index';
import LoginPage from '../pages/login/index';
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

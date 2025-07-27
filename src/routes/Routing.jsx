import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from '../pages/error/Homepage';
import Layout from '../layout/Layout';
import GenrePage from '../pages/genrepage/GenrePage';
import GamePage from '../pages/gamepage/GamePage';
import SearchPage from '../pages/searchpage/SearchPage';
import ErrorPage from '../pages/error/ErrorPage';
import RegisterPage from '../pages/registerpage/RegisterPage';
import LoginPage from '../pages/loginpage/LoginPage';
import AccountPage from '../pages/accountpage/AccountPage';

export function Routing() {
    return (
        <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/games/:genre" element={<GenrePage />} />
        <Route path="/games/:slug/:id" element={<GamePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/account" element={<AccountPage />}/>
        </Route>
        </Routes>
        </BrowserRouter>
    );
}

import { Routing } from "./routes/Routing";
import SessionProvider from "./context/SessionProvider";
import FavoritesProvider from './context/FavoritesProvider';

export default function App() {
  return (
    <SessionProvider>
      <FavoritesProvider>
        <Routing />
      </FavoritesProvider>
    </SessionProvider>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return (
//     <main className="flex justify-center p-5">
//     <h1 className="text-4xl font-bold text-sky-600">Rehacktor</h1>
//     </main>
//   )
// }

// export default App;

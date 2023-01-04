import './App.css';
import Ladingpage from './pages/Ladingpage';
import Blogdetails from './pages/Blogdetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import { useState } from 'react';

function App() {
  // Verwendet den "useState" Hook, um eine Zustandsvariable namens "posts" und eine Funktion namens "setPosts" zu definieren,
  // um den Zustand zu aktualisieren.
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Die erste "Route"-Komponente hat einen Pfad von "/" und rendert die "Ladingpage"-Komponente,
          indem sie ihr die "posts" und "setPosts" Props übergibt. */}
          <Route path="/" element={<Ladingpage posts={posts} setPosts={setPosts} />} />
          {/* Die zweite "Route"-Komponente hat einen Pfad von "/details/:id" und rendert die "Blogdetails"-Komponente,
          indem sie ihr das "posts"-Prop übergibt. */}
          <Route path="/details/:id" element={<Blogdetails posts={posts} />} />
          {/* Die dritte "Route"-Komponente hat einen Pfad von "/admin" und rendert die "Admin"-Komponente,
          indem sie ihr das "setPosts"-Prop übergibt. */}
          <Route path='/admin' element={<Admin setPosts={setPosts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

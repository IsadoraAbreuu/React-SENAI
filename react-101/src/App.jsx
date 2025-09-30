import './App.css'
import Profile from "./components/Profile";
import meuBackground from './assets/img-cenario.jpeg';

function App() {
  return (
    <main style={{ backgroundImage: `url(${meuBackground})` }}>
      <Profile />
    </main>
  );
}

export default App

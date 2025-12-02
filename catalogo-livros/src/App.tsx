import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { List } from './pages/List';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<List />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
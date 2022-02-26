import { Routes, Route} from "react-router-dom";
import { Home, Login, Menu, NotFound } from "./pages"
import { Layout } from "./components"
import "./App.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/"
          element={
              <Home />
          } 
        />
        <Route path="/menu"
          element={
              <Menu />
          } 
        />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Layout>
  );
}

export default App;

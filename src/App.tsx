import Header from "./features/Header/Header";
import Navbar from "./features/Navbar/Navbar";
import "./index.css";
import Detail from "./pages/Details/Detail";
import BreadCrumbs from "./shared/BredCrums/BreadCrumbs";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <BreadCrumbs>
        <li>Каталог</li>/<li>Обувь</li>/<li>Кроссовки</li>/<li>Беговые</li>
      </BreadCrumbs>
      <Detail />
    </div>
  );
};

export default App;

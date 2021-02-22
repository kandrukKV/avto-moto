import './app.scss';
import Header from "../header/header";
import {HEADER_NAV_LIST, FOOTER_NAV_LIST} from "../../const";
import {car} from "../../moks/moks";
import Main from "../main/main";
import Avto from "../avto/avto";
import Footer from "../footer/footer";

const App = () => {
  return (
    <div className="app">
      <Header navList={HEADER_NAV_LIST}/>
      <Main>
        <Avto car={car}/>
      </Main>
      <Footer navList={FOOTER_NAV_LIST}/>
    </div>
  );
}

export default App;

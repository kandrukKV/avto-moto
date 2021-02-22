import './header.scss';
import Logo from "../logo/logo";
import Nav from "../nav/nav";


const Header = ({navList}) => {
  return(
    <header className="header">
      <div className="header__wrapper">
        <Logo/>
        <Nav navList={navList}/>

      </div>


    </header>
  );
}

export default Header;

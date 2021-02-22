import "./footer.scss";

const Footer = ({navList}) => {
  return (
    <footer className="footer">
      <ul className="footer__nav-list">
        {
          navList.map((item, idx) => <li className="footer__nav-item" key={idx}>{item}</li>)
        }
      </ul>
    </footer>
  );
}

export default Footer;

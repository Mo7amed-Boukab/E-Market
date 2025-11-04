import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} E-Market. All rights reserved.</p>
        <p>Modern e-commerce platform built with React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;

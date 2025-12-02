import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sistema de Notas — Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;

import cartIcon from "../assets/photos/shopping-bag-white-icon.webp"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Paw Finder</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Find a Pet</a></li>
        <li><a href="#">Register</a></li>
        <li><a href="#">Shop</a></li>
        <li>
          <a href="#">
            <img src={cartIcon} alt="cart" />
          </a>
        </li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;

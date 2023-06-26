  <ul className="p-0">
    <li className="mb-3" style={{listStyle: 'none'}}>
      <Link className="text-dark" style={{textDecoration:'none'}} to="/">Home</Link>
    </li>
    <li className="mb-3" style={{listStyle: 'none'}}>
      <Link to="/category" className="text-dark" style={{textDecoration:'none'}}>Products</Link>
      
    </li>
    <li className="mb-3" style={{listStyle: 'none'}}>
      <a style={{textDecoration:'none'}} className="text-dark" href="/contact">Contact</a>
    </li>
    <li className="mb-3" style={{listStyle: 'none'}}>
      <div className="dropdown">
        <button
          className="btn btn-transparent border px-3 text-start dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu">
          <Link to="/category">Men's Clothing</Link>
          <Link to="/category">Women's Clothing</Link>
          <Link to="/category">Electronics</Link>
        </ul>
      </div>
      {/* <a href="/services">Services</a> */}
    </li>
    
    </ul>
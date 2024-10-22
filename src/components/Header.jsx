function Header() {
  return (
    <div className="navbar bg-primary-content text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
          >
            <li>
              <a>OVERVIEW</a>
            </li>
            <li>
              <a>ABOUT US</a>
            </li>
            <li>
              <a>SERVICES</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>PRODUCTS</a>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-extrabold text-slate-200">
          Noble Living
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <details>
              <summary>SERVICES</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>PRODUCTS</a>
          </li>
          <li>
            <a>CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <img
          src="/logo.webp"
          alt="logo of the business"
          className="h-12 w-auto object-contain mx-4 hover:scale-125 transition-transform duration-300"
        />
      </div>
    </div>
  );
}

export default Header;

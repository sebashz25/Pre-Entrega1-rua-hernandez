export const Categorias = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="/"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/">
          proteinas
        </a>
        <a className="dropdown-item" href="/">
          plantas
        </a>
        <a className="dropdown-item" href="/">
          homeopatico
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/">
          capsulas
        </a>
      </div>
    </li>
  );
};

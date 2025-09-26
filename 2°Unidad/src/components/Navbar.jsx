function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSuportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navegacion"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
                        
                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default Navbar
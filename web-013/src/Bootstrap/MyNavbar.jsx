import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NavBar</a>
                    <button className='navbar-toggler'type='button' data-bs-toggle="collapse" data-bs-target="#navbarS">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

        </div>
    )
}

export default MyNavbar;
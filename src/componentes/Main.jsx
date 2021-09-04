import { Link } from 'react-router-dom'


export const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-black">
            <a href="/home" className="navbar-brand">
                <h1 class="icon" alt="Eduardo">EDUARDO</h1>
            </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <ul className="navbar-nav ml-auto">
                    <div class="botao">
                   < button type="button" class="btn btn-outline-dark me-md-2">
                            <Link to={'/'} className="nav-link">Home</Link>
                            </button>
                            < button type="button" class="btn btn-outline-dark me-md-2">
                            <Link to={'/sobre'} className="nav-link">Sobre mim</Link>
                            </button>
                        <button type="button" class="btn btn-outline-dark me-md-2">
                            <Link to={'/fotos'} className="nav-link">Minhas fotos</Link>
                         </button>
                         < button type="button" class="btn btn-outline-dark me-md-2">                           <Link to={'/contato'} className="nav-link">Meu contato</Link>
                        </button>
                        </div>
                    </ul>

            </div>
        </nav>
        </>
    )
}

export const Footer = () => {
    return(
        <>
            <footer className="text-center bg-black">
                <p>Desenvolvido por Eduardo de Paiva Scarante</p>
            </footer>
        </>
    )
}

export const Banner = props => {
    return(
        <>
        <img src={props.imagem} alt={props.titulo} tilte={props.titulo} className="w-100"/>
        </>

    )
}

export const Fotos = props => {
    return (
        <>
            <div className="col-12 col-md-4">
                <div className="card">
                    
                    <img width="100%" height="320"
                    src={`imagens/img2.jpg${props.fotos}`}/>

                    <div className="card-body">
                        <h3>{props.titulo}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
    



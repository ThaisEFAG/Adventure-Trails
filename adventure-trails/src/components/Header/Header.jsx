import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {

    return(
        <header className="nav">
        <Link to="/">Adventure Trails</Link>
        <ul>
            <li>
                <Link to="/Cadastro">Cadastre uma trilha</Link>
            </li>
            <li>
                <Link to="/Lista">Escolha uma trilha</Link>
            </li>
        </ul>
        </header>
    )
}
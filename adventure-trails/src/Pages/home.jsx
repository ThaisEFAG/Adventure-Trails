// import './homeStyle.css'

function ShowHome(){
    return(
        <nav>
        <a href="/"> Adventure Trails </a>
        <ul>
            <li>
                <a href="/RecordTrailForm">Cadastre uma trilha</a>
            </li>
            <li>
                <a href="/CardTrail">Escolha uma trilha</a>
            </li>
        </ul>
        </nav>
    )
}

export default ShowHome
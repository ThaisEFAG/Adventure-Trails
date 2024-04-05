    import "./CardTraill.css";
    

    //um componente é uma função js que retorna um html (ES6 module)
const CardTrail = () => {
    return (
        <section className="cardTrai">
            <div className="card">
                <div className="img">
                    <figure className="photo">
                {/* jskjhdfjshdkfjhskfjhskd */}
                    </figure>
                </div>
                <div className="content">
                    <div className="title-one">
                    <h3 className="trail-name">Trilha Costa da Lagoa</h3> - 
                    <h3 className="city-estate">Florianópolis</h3>
                    </div>
                    <div className="icon">
                        <span className="favorite-img-icon"></span>
                    </div>
                    <div className="record-name">
                        <h5>Por: </h5>
                    </div>
                    <div className="info">
                        <span id="trail-duration"><h5>Duração:</h5></span>
                        <span id="trail-path"><h5>Trajeto:</h5></span>
                    </div>
                    <div className="bottom-row">

                    </div>

                </div>
            </div>
        </section>
    )
}

export default CardTrail
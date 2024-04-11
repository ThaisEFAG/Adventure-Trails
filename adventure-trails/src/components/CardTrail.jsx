    import "./CardTraill.css";
    import RecordTrailForm from "../../Pages/RecordTrailForm";
    
// [x] obter informações pelo formulario para informações das trilhas pelo inpur
//[] 

    //um componente é uma função js que retorna um html (ES6 module)
const CardTrail = () => {
    return (
        <>
        <RecordTrailForm/>
        <section className="cardTrai">
            <div className="card">
                <div className="img">
                    <figure className="photo">
                    </figure>
                </div>
                <div className="content">
                    <div className="all-title">
                    <h3 className="trail-name"></h3> - 
                    <h3 className="city-estate"></h3>
                    </div>
                    <div className="icon">
                        <span className="favorite-img-icon"></span>
                    </div>
                    <div className="record-name-autor">
                        <h5 className="autor">Por: </h5>
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

        
        </>
    )
}

export default CardTrail
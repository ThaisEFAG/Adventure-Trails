import React from 'react';
import "./CardTraill.css";

// obter informações pelo formulario para informações das trilhas pelo inpur
//[] 

//um componente é uma função js que retorna um html (ES6 module)

// USEEFECCT para traser as indormações do json e colocar as informações no card
const CardTrail = () => {

return (
    
    <section className="card-section">
    <div className="subtitle-cards"><h4>Explore trilhas incríveis</h4></div>
        <article className="card-article">
            <section className="card">
                    <figure className="photo">
                        <img src="" alt="" />
                    </figure>
                <div className="content">
                    <div className="all-title">
                    <h3 className="trail-name">{trilhas.nome} - </h3> - 
                    <h3 className="city-estate">{trilhas.local}</h3>
                    </div>
                    <div className="icon">
                        <span className="favorite-img-icon"></span>
                    </div>
                    <div className="record-name-autor">
                        <h5 className="autor">Por: {trilhas.criador} </h5>
                    </div>
                    <div className="info">
                        <span id="trail-duration"><h5>Duração: {trilhas.duracao}</h5></span>
                        <span id="trail-path"><h5>Trajeto: {trilhas.trajeto}</h5></span>
                    </div>
                    <div className="level">
                        <span id="difficulty"><h5>{trilhas.dificuldade}</h5></span>
                    </div>
                    <div className="bottom-row-stars">

                    </div>
                    </div>
                </section>
        </article>
    </section>
)
}

export default CardTrail
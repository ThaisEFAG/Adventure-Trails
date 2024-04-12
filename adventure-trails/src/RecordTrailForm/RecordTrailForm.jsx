import React from 'react';
import { useState } from "react";
import "./RecordTrailForm.css"

const RecordTrailForm = () => {
  const [text, setText] = useState("");

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="records">
      <div>
        <h3 className="fill">Preencha os dados da Trilha</h3>
      </div>
      <div>
        <form action="">
          <label for="" className="child-records">
            Nome da trilha:
          </label>
          <input
            type="text"
            class="input-form-record"
            onChange={handleChangeText}
          />
          <label for="" className="child-records">
            Cidade e Estado:
          </label>
          <input
            type="text"
            class="input-form-record"
            onChange={handleChangeText}
          />
          <label for="" className="child-records">
            Duração:
          </label>
          <input
            type="text"
            class="input-form-record"
            onChange={handleChangeText}
          />
          <label for="" className="child-records">
            Trajeto em km:
          </label>
          <input
            type="text"
            class="input-form-record"
            onChange={handleChangeText}
          />
          <label for="" className="child-records">
            Dificuldade:
          </label>
          <input
            type="text"
            class="input-form-record"
            onChange={handleChangeText}
          />
          <label for="" className="child-records">
            Nome do criador da trilha:
          </label>
          <input
            type="text"
            class="input-form-record"
            onChange={handleChangeText}/>
            <label htmlFor="" className="child-records" id="img-upload">Insira imagem para a trilha:</label>
            <input type="file" name='image' />
            <button type='submit'>Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default RecordTrailForm;

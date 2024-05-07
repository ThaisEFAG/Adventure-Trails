import React from 'react';
import { useState } from "react";
import "./RecordTrailForm.css"


function PaginaCadastroTrilha () {
const { register, handleSubmit } = useForm();

function onSubmit(formValue) {
  console.log
}
  // const [post, setPost] = useState(nomedatrilha,
  // "cidade e estado",
  // "duração",
  // "trajeto",
  // "dificuldade",
  // "tipo de trilha",
  // "nome do criador da trilha",
  // "url img trilha"
  // )
  // const handleChangeText = (event) => {
  //   setText(event.target.value);
  


  return (
    <div className="records">
      <div>
        <h3 className="fill">Preencha os dados da Trilha</h3>
      </div>
      <div>
        <form action="">
          <div>
          <label for="" className="child-records">
            Nome da trilha:
          </label>
          <input
            type="text" {...register("name", {
              required: "Este campo é obrigatório",
              maxLength: {value:100, message: "Este campo aceita no maximo 100 caracteres"}
            })}
            class="input-form-record"/>
          </div>
          <div>
          <label for="" className="child-records">
            Cidade:
          </label>
          <input
            type="text" {...register("city", {
              required: "Este campo é obrigatório",
              maxLength: {value: 15}
            })}
            class="input-form-record"/>
          </div>
          <div>
          <label for="" className="child-records">
            Estado:
            </label>
          <input
            type="text" {...register("state", {
              required: "Este campo é obrigatório",
              maxLength: {value: 2, messege:"Este campo aceita no máximo 2 caracteres"}
            })}
            class="input-form-record"/>
          </div>
          <div>
          <label for="" className="child-records">
            Duração (em minutos):
          </label>
          <input
            type='number' {...register("estimated-duration", {
              //required torna o campo obrigatório
              required: "Este campo é obrigatório"
            })}
            class="input-form-record"/>
            </div>
            <div>
          <label for="" className="child-records">
            Trajeto em km:
          </label>
          <input
            type='number' {...register("", {
              required: "Este campo é obrigatório"
            })}
            class="input-form-record"/>
            </div>
            <div>
          <label for="" className="child-records">
            Dificuldade:
          </label>
          <select
            name='dificuldade'
            type="text"
            class="input-form-record">
              <option value="">Iniciante</option>
              <option value="">Intermediaria</option>
              <option value="">Avançada</option>
          </select>
          </div>
          <div>
          <label for="" className="child-records">
            Nome do criador da trilha:
          </label>
          <input
            type="text"
            class="input-form-record"/>
            </div>
            <div>
            <label htmlFor="" className="child-records" id="img-upload">Insira imagem para a trilha:</label>
            <input type="file" class="input-form-record" name='image' />
            </div>
            <div>
            <button type='submit'>Salvar</button>
            <button type='submit'>Voltar</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default RecordTrailForm;

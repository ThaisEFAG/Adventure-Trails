import {useState} from "react"
function useFetch(url){

    //o array como parametro do use state indica um item do json, no caso um obj
    const [trilhas, setTrilhas] = useState({})

    fetch(url)
    // conversão dos dados para o padrão json 
    .then((response) => response.json())
    //o retorno da conversão cai no segundo then
    .then((trilha) => setTrilhas(trilha))
    .catch()
}



export default useFetch
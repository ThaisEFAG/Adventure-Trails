import RecordTrailForm from "./RecordTrailForm";

function ChamaCadastro() {
    return (
        <>
        <RecordTrailForm/>

        </>
    )
}

function ShowHome(){
    return(
        <>
        <p>Essa é a home</p>
        <button onClick={ChamaCadastro}>cadastrar</button>
        </>
    )
}

export default ShowHome
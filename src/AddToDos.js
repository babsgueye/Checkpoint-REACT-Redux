import { useState } from "react"

const AddToDos = ({onAddToDos}) => {
    const [newToDos, setNewToDos] = useState({
        description: "", 
        isDone: ""
    })
     const handleSubmit = (e) => {
        e.preventDefault()
        onAddToDos(newToDos)
        setNewToDos ({
            description: "", 
            isDone: ""
        })
    }
    return (
        <>
        <h2>Ajout d'une nouvelle Tache</h2>
    
        <input type = "text" value = {newToDos.description} placeholder = "Entrer une description" onChange = {(e) => setNewToDos({...newToDos, description: e.target.value})}/> <br/>
        <input type = "boolean" value = {newToDos.rate} placeholder = "Entrer un booleen" onChange = {(e) => setNewToDos({...newToDos, rate: e.target.value})}/><br/>

        <button onClick = {handleSubmit}>Ajouter</button>
        </>
    );
}

export default AddToDos;
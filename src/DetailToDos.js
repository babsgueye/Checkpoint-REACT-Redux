import { Link } from "react-router-dom"

const DetailToDos = ({match, toDos}) => {
    const toDo = toDos[match.params.id]
    if (!toDo){
        return <div>Aucune tache n'a ete trouvee</div>
    }
    return (
        <>
        <Link to="/" >Retour a l'accueil</Link>
        <p>description: {toDo.description}</p>
        <p>isDone: {toDo.isDone}</p>
        </>
    )

}
export default DetailToDos;
import { useState } from "react"

const Filter = ({onFilter}) => {

    const [filterIsDone, setFilterIsDone] = useState("");

    const handleFilter = () => {
        onFilter ({isDone: filterIsDone})
    }

    return (
        <>
        <input type = "boolean" value = {filterIsDone} placeholder = "Entrer true ou false" onChange = {(e) => setFilterIsDone(e.target.value)}/>
        <br/>
        <button onClick = {handleFilter}>Click Me</button>
        </>
    );
}
export default Filter;
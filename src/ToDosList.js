import ToDos from "./ToDos";
import ToDoCard from "./ToDoCard";

const ToDosList = ({toDos}) => {
    return(
        <div>
            {
                toDos.map((toDo)=>(
                    <ToDoCard key = {toDo.id}
                    {...toDo}/>
                ))
            }
        </div>
    );
};
export default ToDosList;
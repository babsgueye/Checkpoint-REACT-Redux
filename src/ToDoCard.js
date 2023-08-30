import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ToDoCard = ({id, description, isDone}) => 
{
    return (
        <>
            <Link to={"/toDos/"+id}>
                <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                    
                    <Card.Text>
                        
                        description: {description}
                        <br/>
                        isDone: {isDone}
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            </>
        );
  };
  export default ToDoCard;
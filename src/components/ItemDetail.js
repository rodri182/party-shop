import {Contador} from "./ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail =({items}) => {
    const onAdd = (qty) => {
        alert (" usted ha elejido el " + qty + "producto");
    }
    
  return (
    <>
    <Container>
      <Row>
        <Col xs={4}>
        <img src={items.producto} />
        </Col>
        <Col xs={8}>
            <h1>{items.titulo}</h1>
           
            <p>{items.cant} En Stock</p>
        </Col>
        <Col xs={4}>
            <Contador stock={items.cant} initial={1} onAdd={onAdd}/>
        </Col>
      </Row>
    </Container>
 </> 
 );
}

export default ItemDetail;

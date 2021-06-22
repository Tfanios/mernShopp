import React,{useEffect,useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import {fetchSingleProduct} from '../api/api'


const ProductScreen = (props) => {
    const [product, setProduct] = useState([]);
    const { id } = props.match.params;
    const editPath = `/product/${id}/edit`
    useEffect(() => {
        const productData = async () => {
            const { data } = await fetchSingleProduct(id);
            setProduct(data)
        };
        productData()
        
        
    },[id])
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <p>{product.name}</p>
                    <Link to={editPath}>Edit</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductScreen;
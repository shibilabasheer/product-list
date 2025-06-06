import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Product(props) {

    const addToCart = (productName) => {
        console.log(productName)
    }

    return (
        <>
            <Card className="h-100">
                <Card.Img variant="top" src={props.product.image} className='productImg' />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-inline-block text-truncate fs-5 fw-semibold"
                        style={{ maxWidth: '250px' }} title={props.product.title}>{props.product.title}</Card.Title>
                    <Card.Text>
                        {props.product.category}
                    </Card.Text>
                    <Card.Text>
                        Price : {props.product.price}
                    </Card.Text>
                    <Card.Text>
                        Rating : {props.product.rating.rate}
                    </Card.Text>
                    <div className="mt-auto">
                        <Button variant="primary" onClick={() => addToCart(props.product.title)}>Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Product;
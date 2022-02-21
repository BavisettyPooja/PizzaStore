import React from 'react'
import { Button, Card } from 'react-bootstrap';
import './Cards.css'

function Cards({data}) {
    return (
        <>  
        <div className="card-container">
            {data.map((product, index) => {
                return(
                <Card key={index} className="card">
                <Card.Img variant="top" src={product.img} alt={product.alt} className="card-img" />
                <Card.Body class="card-body">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Card.Title>{product.price}</Card.Title>
                <Button variant="warning">{product.button}</Button>
                </Card.Body>
                </Card>
                );})}
        </div>
        </>
    )
}

export default Cards

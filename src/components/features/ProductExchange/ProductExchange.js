import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const ProductExchange = (props) =>{

  console.log('productsID',props);
  console.log('ProductExchange');

  return(
    <Navbar fixed="bottom" expand="lg" variant="light" bg="light" sticky="bottom">
      <Container>
        <CardGroup className='card-footer'>
          {props.tabE.map(i=>(
            <Card key ={i}>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/bed/` + i.slice(-1) +'.jpg'} />
              <Card.Body>
                <Card.Title>{i}</Card.Title>
              </Card.Body>
            </Card>
          ))}  
          <Button variant="secondary" size="lg" active>
          Exchange
          </Button>{' '}
        </CardGroup>
      </Container>
    </Navbar>
  );
};

export default ProductExchange;
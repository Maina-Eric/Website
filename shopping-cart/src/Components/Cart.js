import React, { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import {Button, Col, FormControl, Image, ListGroup, Row} from "react-bootstrap"
import Rating from "./Rating"
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {

  const {state: {cart}, dispatch}= CartState();

  const [total, setTotal] = useState();

  useEffect(()=> {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
  },[cart])
  return (
    <div className="home" >
      <div className="productContainer">
          <ListGroup>
            {
              cart.map((prod) => (
                <ListGroup.Item key={prod.id}>
                  <Row>
                    <Col md={2}>
                      <Image src="./background.jpg" alt={prod.name} fluid rounded/>
                    </Col>
                    <Col md={2}>
                      <span>{prod.name}</span>
                    </Col>
                    <Col md={2}>Ksh {prod.price}</Col>
                    <Col md={2}>
                      <Rating rating={prod.ratings}/>
                    </Col>
                    <Col>
                      <FormControl as="select" value={prod.qty} 
                        onChange={(e)=> 
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: prod.id,
                              qty: e.target.value,
                            },
                          })
                        }>
                        {
                          [...Array(prod.inStock).keys()].map((x)=>(
                            <option key={x+1}>{x+1}</option>
                          ))
                        }
                      </FormControl>
                    </Col>
                    <Col md={2}>
                        <Button 
                          type="button"
                          id="button"
                          variant="light"
                          onClick ={() => 
                            dispatch ({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }>
                            <AiFillDelete fontSize="30px"/>
                        </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
         
          
      </div>
    
            <div className="filters summary">
              <span className="title">
                SubTotal ({cart.length}) items
               </span>
              <span style={{fontWeight: 700, fontSize: 20}}>
                Total: Ksh {total}
              </span>
              <Button type="button" disabled={cart.length ===0}>
                Proceed to Checkout
              </Button>
            </div>
          
    </div>
  )
}

export default Cart

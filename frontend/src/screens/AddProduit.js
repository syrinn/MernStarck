import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import NavBar from "../components/NavBar";
import Message from "../shared/Message";
import { Navigate } from "react-router-dom";

function AddProduit() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [categorie, setCategorie] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(
        "/api/produit/create",
        {
          name,
          price,
          categorie,
        },
        config
      );
      Message.Succes(" Product Added Successfuly");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className='addproduit'>
        <Container>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Enter product name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter product name'
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Price DT</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Enter category ID</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category ID'
                onChange={(e) => setCategorie(e.target.value)}
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default AddProduit;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import NavBar from "../components/NavBar";
function AddCategorie() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      await axios.post(
        "/api/categorie/create",
        {
          name,
          description,
        },
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='addcategorie'>
        <Container>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Enter category name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category name'
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Enter category description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category description'
                onChange={(e) => setDescription(e.target.value)}
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

export default AddCategorie;

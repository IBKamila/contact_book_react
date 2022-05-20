import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <Container>
      <div className="d-flex flex-wrap mt-5">
        {props.contacts.map((item, index) => (
          <Card className="m-3" key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.photo} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Title>{item.lastName}</Card.Title>
              <div className="d-flex justify-content-center">
                <Button
                  className="m-2"
                  onClick={() => props.handleDeleteContact(item.id)}
                >
                  Delete
                </Button>
                <Button
                  className="m-2"
                  onClick={() => props.handleEditIndex(index)}
                >
                  Edit
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ContactList;

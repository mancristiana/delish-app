import React, { Component } from 'react';
import './Recipes.css';
import {
  Input,
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Fa
} from 'mdbreact';

class Recipes extends Component {
  render() {
    return (
      <div className="p-3">
        <Input
          className="mb-5"
          label="Search for recipes"
          icon="search"
          type="search"
        />

        <div className="card-columns">
          <Card className="hoverable">
            <CardBody className="text-center">
              <CardTitle>New Recipe</CardTitle>
              <CardText>
                <Fa icon="plus" className="black-text fa-3x" />
              </CardText>
            </CardBody>
          </Card>

          <Card className="">
            <CardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button href="#">Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default Recipes;

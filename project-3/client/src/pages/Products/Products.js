import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Products extends Component {
  state = {
    products: [],
    product: "",
    quantity: "",
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ Products: res.data, product: "", quantity: ""})
      )
      .catch(err => console.log(err));
  };

  deleteProduct = id => {
    API.deleteProduct(id)
      .then(res => this.loadProducts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.product && this.state.quantity) {
      API.saveProduct({
        product: this.state.product,
        quantity: this.state.quantity
      })
        .then(res => this.loadProducts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Products Are Available?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.product}
                onChange={this.handleInputChange}
                name="product"
                placeholder="product (required)"
              />
              <Input
                value={this.state.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="quantity (required)"
              />
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(this.state.quantity && this.state.product)}
                onClick={this.handleFormSubmit}
              >
                Submit Product
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Products On My List</h1>
            </Jumbotron>
            {this.state.Products.length ? (
              <List>
                {this.state.Products.map(Product => (
                  <ListItem key={Product._id}>
                    <Link to={"/Products/" + Product._id}>
                      <strong>
                        {Product.product} by {Product.quantity}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProduct(Product._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;

import React, { Component } from "react";
import API from "../utils/API";


class EmployeeDash extends Component {
  state = {
    search: "",
    result: {},
    filter: []
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const value = event.target.value;
    
    this.setState({
      filter: ({filtered})
    });
  };
  render(){
    return(
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Name || "Search for a employee"}
            >
              {this.state.result.Title ? (
                <EmployeeInfo
                  name={this.state.result.Name}
                  src={this.state.result.Poster}
                  
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchEmployee
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
      
      
    )
  }
}


export default EmployeeDash;
import React, { Component } from "react";
import Search from "./Search";
import API from "../../utils/API";

class SearchHome extends Component {
    state={
        q: "",
        companies: []
    };

    getCompanies = () => {
      console.log("getCompanies firing");
      console.log(this.state.q);
        API.getCompanies(this.state.q)
          .then(res =>
            this.setState({
              companies: res.data
            })
          )
          .catch(() =>
            this.setState({
              companies: [],
              message: "nothing found"
            })
          );
      };

    // handleCompanyUpdateSubmit = event => {
    //     event.preventDefault();
    //     this.getCompanies();
    //   };

      handleInputChange = event => {
        console.log("handleInputChange code")
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleSearchFormSubmit = event => {
        event.preventDefault();
        console.log("Search button clicked");
        this.getCompanies();
      };

      render() {
          return(
              <div>
              <Search
              handleInputChange={this.handleInputChange}
              handleSearchFormSubmit={this.handleSearchFormSubmit}
              q={this.state.q} />
              </div>
          )
      }
};

export default SearchHome;

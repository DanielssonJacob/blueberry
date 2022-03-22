import React from 'react';
import axios from 'axios';

export default class CompanyList extends React.Component {
  state = {
    company: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/companies`)
      .then(res => {
        const company = res.data;
        this.setState({ company });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.company
            .map(company =>
              <li key={company.id}>{company.name}</li>
            )
        }
      </ul>
    )
  }
}
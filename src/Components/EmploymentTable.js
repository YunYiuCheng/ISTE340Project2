import * as React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import getData from '../util/getData';

export default class EmploymentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      employment: {}
    }
  }

  componentDidMount() {
    getData('employment/')
      .then((json) => {
        this.setState({
          employment: json,
          loaded: true
        })
      })
  }

  render() {
    const { employment, loaded } = this.state;

    if (!loaded) return (<div><h1>Tables</h1></div>);

    return (
      <div style={{ width: '750px', height:'300px', overflowY: 'scroll'}}>
        <Table compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>DEGREE</Table.HeaderCell>
              <Table.HeaderCell>EMPLOYER</Table.HeaderCell>
              <Table.HeaderCell>LOCATION</Table.HeaderCell>
              <Table.HeaderCell>TERM</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employment.coopTable.coopInformation.map((p) =>
              <Table.Row>
                <Table.Cell>{p.degree}</Table.Cell>
                <Table.Cell>{p.employer}</Table.Cell>
                <Table.Cell>{p.location}</Table.Cell>
                <Table.Cell>{p.term}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>

      </div>
    );
  }
}
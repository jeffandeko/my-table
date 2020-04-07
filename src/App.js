// @flow strict

import * as React from 'react';
import './App.css';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './counter';
import Area from './Area';
import Chat from './chat'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      adm: "",
      score: "",
      age: "",
      delete: [],
      students: []

    }
  }

  render() {
    const { name, adm, score, age } = this.state

    const tableBody = (student, index) => (
      <tr key={index}>
        <td>{student.name}</td>
        <td>{student.adm}</td>
        <td>{student.score}</td>
        <td>{student.age}</td>
        <td>{student.delete}</td>


      </tr>
    );


    return (
      <div className="App">
        <div>
          <input value={name} placeholder="name"
            onChange={(n) => this.setState({ name: n.target.value })} />
          <input placeholder="adm"
            onChange={(n) => this.setState({ adm: n.target.value })} />
          <input placeholder="score"
            onChange={(n) => this.setState({ score: n.target.value })} />
          <input placeholder="age" onChange={(n) => this.setState({ age: n.target.value })} />
          <input type={'button'} value={'Add'} onClick={() =>
            this.setState({
              students: [...this.state.students, { name, adm, score, age }],
              name: '',
              age: '',
              adm: '', score: ''
            })
          } />

        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>name</th>
              <th>Adm</th>
              <th>score</th>
              <th>age</th>
              <th type={'button'} value={'delete'} onClick={() => this.setState({})}>delete</th>

            </tr>
          </thead>
          <tbody>
            {this.state.students.map(tableBody)}
          </tbody>
        </Table> */}
        <Counter initial={10} name={"Brian"} />

        <Area />
        <Chat />

      </div>

    );
  }
}

export default App;
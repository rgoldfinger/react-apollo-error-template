import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class HasError extends Component {
  render() {
    const { data: { loading, people, error } } = this.props;
    return (
      <main>
        <h1>This component fetches an error</h1>
      </main>
    );
  }
}

const WrappedHasError = graphql(
  gql`query Error{
    errorPeople {
      id
      name
    }
  }`,
)(HasError);

class PeopleList extends Component {
  render() {
    const { data: { loading, people } } = this.props;
    return (
      <main>
        <h1>People: {people && people.map(p => p.name)}</h1>
      </main>
    );
  }
}

const WrappedPeopleList= graphql(
  gql`query Error{
    people {
      id
      name
    }
  }`,
)(PeopleList);

class App extends Component {
  state = {
    showPeople: false,
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({ showPeople: true });
      },
      1100,
    );
  }

  render() {
    return (
      this.state.showPeople ? <WrappedPeopleList /> : <WrappedHasError />
    );
  }
}

export default App;

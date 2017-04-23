import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Header from './Layout/Header';

import './App.css';

import Card from './Card';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CatalogPage from './CatalogPage';

class App extends Component {
    state={
        selectedItems:{},
        currentCategory: 1,
    };
    componentWillMount() {
        const selectedItems = JSON.parse(localStorage.getItem('card'));
        if (selectedItems) this.setState({selectedItems});
    }
    addToCard(item) {
        let modifiedSelectedItems = {...this.state.selectedItems};
        modifiedSelectedItems[item.positionId] = modifiedSelectedItems[item.positionId] ?
            {
                ...modifiedSelectedItems[item.positionId],
                count: modifiedSelectedItems[item.positionId].count + 1,
            }:
            {
                ...item,
                count: 1,
            };
        this.setState({selectedItems: modifiedSelectedItems});
    }
    removeFromCard (id) {
        let modifiedSelectedItems = {...this.state.selectedItems};
        delete modifiedSelectedItems[id];
        this.setState({selectedItems: modifiedSelectedItems});
    }
    changeCount(id, increment) {
        let modifiedSelectedItems = {...this.state.selectedItems};
        modifiedSelectedItems[id].count += increment;
        if (modifiedSelectedItems[id].count < 1)
            this.removeFromCard(id);
        else
            this.setState({selectedItems: modifiedSelectedItems});
    }
    changeCategory(id) {
        this.setState({ currentCategory: id });
    }
    componentDidUpdate() {
        localStorage.setItem('card', JSON.stringify(this.state.selectedItems));
    }
  render() {
    const { currentCategory, selectedItems } = this.state;
    return (
      <div className="App">
          <Card
              onRemove={this.removeFromCard.bind(this)}
              onIncreaseCount={id => this.changeCount(id, 1)}
              onDecreaseCount={id => this.changeCount(id, -1)}
              items={selectedItems}
          />
          <Router>
              <div>
                  <Header />
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/about" component={ () => <AboutPage text={'about us'} /> }/>
                  <Route
                      path="/catalog"
                      component={ props => <CatalogPage {...props} addToCard={this.addToCard.bind(this)} /> }
                  />
              </div>
          </Router>
      </div>
    );
  }
}

export default App;

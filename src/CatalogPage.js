import React, { Component } from 'react';
import Categories from './Layout/Categories';
import Catalog from './Catalog';
import './CatalogPage.css';
import CatalogItem from './CatalogItem';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

const items=[
    {
        name:'dress',
        price: 150,
        categoryId: 1,
        positionId: 1,
    },
    {
        name:'shoes',
        price: 100,
        categoryId: 1,
        positionId: 2,
    },
    {
        name:'jacket',
        price: 500,
        categoryId: 1,
        positionId: 3,
    },
    {
        name:'cup',
        price: 5,
        categoryId: 2,
        positionId: 4,
    }
];

class CatalogPage extends Component {
    render() {
        return (
            <div className="CatalogPage">
                <Route exact  path="/catalog/:id"
                       component={({match}) => <Catalog match={match} items={items} currentCategory={Number(match.params.id)} onAdd={this.props.addToCard} />}
                />
                <Route exact  path="/catalog/:id/:positionId"
                       component={({match}) => <CatalogItem item={items.filter(item => item.positionId == Number(match.params.positionId))[0]} onAdd={this.props.addToCard} />}
                />
            </div>
        );
    }
}
export default CatalogPage;

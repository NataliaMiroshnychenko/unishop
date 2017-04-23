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
        name:'Туристический рюкзак с отделением для ноутбука - Osprey Quantum 34',
        price: 150,
        categoryId: 1,
        positionId: 1,
        image: 'http://demoshop.imagecms.net/uploads/shop/products/medium/2d408577c1dd9614c1161835dd94d0d3.jpg',
    },
    {
        name:'Детские спортивные брюки Adidas из натуральной ткани',
        price: 100,
        categoryId: 1,
        positionId: 2,
        image: 'http://demoshop.imagecms.net/uploads/shop/products/medium/655447cae8976d7fedec35d4b7d3e4ab.jpg',
    },
    {
        name:'Кроссовки для бега - Adidas lk-sport CF K',
        price: 500,
        categoryId: 1,
        positionId: 3,
        image: 'http://demoshop.imagecms.net/uploads/shop/products/medium/daa5a957f567db38225c3ef5f73be2bc.jpg',
    },
    {
        name:'Футбол настольный',
        price: 5,
        categoryId: 2,
        positionId: 4,
        image: 'http://demoshop.imagecms.net/uploads/shop/products/medium/417d97a45aba9f80ee286172ba1ef14a.jpg',
    }
];

class CatalogPage extends Component {
    render() {
        return (
            <div className="CatalogPage">
                <Route exact path="/catalog/:id"
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

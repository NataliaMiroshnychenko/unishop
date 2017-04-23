import React, { Component } from 'react';
import CategoriesBar from './styled/CategoriesBar';
import CategoriesItem from './styled/CategoriesItem';
import {
    NavLink
} from 'react-router-dom';
const items=[
    {
        name:'Электроника',
        categoryId: 1,
    },
    {
        name:'Спортивные товары',
        categoryId: 2,
    },
    {
        name:'Дом и сад',
        categoryId: 3,
    },
    {
        name:'Детские товары',
        categoryId: 4,
    },
    {
        name:'Одежда',
        categoryId: 5,
    },
];

class Catalog extends Component {
    render() {
        return (
            <CategoriesBar>
                {
                    items.map(item =>
                        <CategoriesItem>
                            <NavLink activeClassName="active" to={`/catalog/${item.categoryId}`}>{item.name}</NavLink>
                        </CategoriesItem>
                    )
                }
            </CategoriesBar>
        );
    }
}
export default Catalog;

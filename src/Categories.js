import React, { Component } from 'react';
import './Categories.css';
import {
    NavLink
} from 'react-router-dom';
const items=[
    {
        name:'wear',
        categoryId: 1,
    },
    {
        name:'house',
        categoryId: 2,
    },
];


class Catalog extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="Categories">
                {
                    items.map(item =>
                        <div className="Categories__position">
                            <NavLink activeStyle={{ color: 'red' }} to={`${match.url}/${item.categoryId}`}>{item.name}</NavLink>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default Catalog;

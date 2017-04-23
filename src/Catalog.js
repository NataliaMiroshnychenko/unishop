import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';
import './Catalog.css';

class Catalog extends Component {
    render() {
        const { items, match } = this.props;
        return (
            <div className="Catalog">
                {
                    items.filter(item => item.categoryId === this.props.currentCategory).map(item =>
                        <div className="Catalog__position">
                            <NavLink to={`${match.url}/${item.positionId}`}>{item.name}</NavLink>
                            <div>{item.price}</div>
                            <div onClick={() => this.props.onAdd(item)}>Add to card</div>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default Catalog;

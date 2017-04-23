import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';
import './Catalog.css';
import BuyButton from './Catalog/styled/BuyButton';
import CatalogWrapper from './Catalog/styled/CatalogWrapper';
import CatalogItemWrapper from './Catalog/styled/CatalogItemWrapper';
import PositionLink from './Catalog/styled/PositionLink';

class Catalog extends Component {
    render() {
        const { items, match } = this.props;
        return (
            <CatalogWrapper>
                {
                    items.filter(item => item.categoryId === this.props.currentCategory).map(item =>
                        <CatalogItemWrapper>
                            <PositionLink>
                                <NavLink to={`${match.url}/${item.positionId}`}><img style={{height: '225px'}} src={item.image} />{item.name}</NavLink>
                            </PositionLink>
                            <div>{item.price}</div>
                            <BuyButton onClick={() => this.props.onAdd(item)}>Купить</BuyButton>
                        </CatalogItemWrapper>
                    )
                }
            </CatalogWrapper>
        );
    }
}
export default Catalog;

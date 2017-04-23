import React, { Component } from 'react';
import './Catalog.css';

class CatalogItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="Catalog">
                {
                    <div>
                        <img src={item.image} />
                        <div><h1>{item.name}</h1></div>
                        <div>{item.price}</div>
                        <div onClick={() => this.props.onAdd(item)}>Add to card</div>
                    </div>
                }
            </div>
        );
    }
}
export default CatalogItem;

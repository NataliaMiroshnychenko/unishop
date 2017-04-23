import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
    render() {
        const { items, onRemove, onDecreaseCount, onIncreaseCount } = this.props;
        return (
            <div className="Card">
                <div className="Card__position">
                    <div className="Card__cell">Name</div>
                    <div className="Card__cell">Price</div>
                    <div className="Card__cell">Count</div>
                    <div className="Card__cell" />
                </div>
                {
                    Object.keys(items).map(key => {
                        const item = items[key];
                        return (
                            <div className="Card__position">
                               <div className="Card__cell">{item.name}</div>
                               <div className="Card__cell">{item.price}</div>
                               <div className="Card__cell">
                                   <div className="Card__cell-content">
                                       <div onClick={ () => onDecreaseCount(item.positionId) }>-</div>
                                       {item.count}
                                       <div onClick={ () => onIncreaseCount(item.positionId) }>+</div>
                                   </div>
                               </div>
                               <div className="Card__cell" onClick={ () => onRemove(item.positionId) }>remove</div>
                            </div>);
                        }
                    )
                }
            </div>
        );
    }
}
export default Card;


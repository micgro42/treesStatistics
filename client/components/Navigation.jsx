import React from 'react';

export default class Navigation extends React.Component {

    render() {
        return (
            <div className="navWrapper">
                <ul>
                    {
                        Object.entries(this.props.cardStore).map(([key, cardData]) => {
                            let state;
                            let action;
                            let onClickHandler;
                            if (this.props.selectedCards.includes(key)) {
                                state = 'active';
                                action = 'Remove';
                                onClickHandler = this.props.removeCard;
                            } else {
                                state = 'inactive';
                                action = 'Add';
                                onClickHandler = this.props.addCard;
                            }
                            return (<li key={key}>
                                <button className={state} onClick={() => onClickHandler(key)}>
                                    {action} {cardData.parameter}
                                </button>
                            </li>);
                        })

                    }
                </ul>
            </div>
        );
    }
}

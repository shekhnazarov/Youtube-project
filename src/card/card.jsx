import React from "react";
import "../card/card.css"

export class Card extends React.Component {
    render() {
        const {data: {src, title}} = this.props;
        return <div>
            <div class="card">
                <img src={src} alt="Images" />
                <h3>{title}</h3>
            </div>
        </div>
    }
}

export default Card;
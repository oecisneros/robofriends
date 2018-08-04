import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => (
    <div>
        {robots.map(x => <Card key={x.id} robot={x} />)}
    </div>
);

export default CardList;
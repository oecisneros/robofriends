import React, { PureComponent } from "react";
//import CounterButton from "./CounterButton"

class Header extends PureComponent {
    //shouldComponentUpdate = () => false;

    render = () => (
        <div>
            <h1 className="f1">RoboFriends</h1>
            {/* <CounterButton color="red" /> */}
        </div>
    );
}

export default Header;
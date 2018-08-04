import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scrollbar from "../components/Scrollbar";
import * as Actions from "../actions";

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: ({ target }) => dispatch(Actions.setSearchField(target.value)),
    onRequestRobots: () => dispatch(Actions.requestRobots)
});

class App extends Component {
    componentDidMount = this.props.onRequestRobots;

    render = () => {
        const filteredRobots = this.props.robots.filter(x => x.name.includes(this.props.searchField));
        return (
            <div className="tc">
                <Header />
                <SearchBox onChange={this.props.onSearchChange} />
                <Scrollbar>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scrollbar>
            </div>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
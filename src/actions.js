import * as Constants from "./constants";

const createAction = (name, value) => ({
    type: name,
    payload: value
});

const createAsyncAction = (dispatch, name) => value => dispatch(createAction(name, value));

export const setSearchField = text =>
    createAction(Constants.CHANGE_SEARCH_FIELD, text);

export const requestRobots = dispatch => {
    dispatch(createAction(Constants.REQUEST_ROBOTS_PENDING));

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(createAsyncAction(dispatch, Constants.REQUEST_ROBOTS_SUCCESS))
        .catch(createAsyncAction(dispatch, Constants.REQUEST_ROBOTS_FAILED));
};
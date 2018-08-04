import * as Constants from "./constants";

const createReducer = (initialState, createPayload) => (state, action) =>
    Object.assign({}, state || initialState, createPayload(action || {}));

const createSimpleReducer = (key, initialState, createPayload) =>
    createReducer(initialState, action => (action.type === key) ? createPayload(action) : null);

const initialStateSearch = {
    searchField: ""
};

const initialStateRobots = {
    error: "",
    isPending: false,
    robots: []
};

export const searchRobots =
    createSimpleReducer(Constants.CHANGE_SEARCH_FIELD, initialStateSearch,
        action => ({ searchField: action.payload }));

export const requestRobots =
    createReducer(initialStateRobots, action => {
        switch (action.type) {
            case Constants.REQUEST_ROBOTS_PENDING:
                return { isPending: true };
            case Constants.REQUEST_ROBOTS_SUCCESS:
                return { isPending: false, robots: action.payload };
            case Constants.REQUEST_ROBOTS_FAILED:
                return { isPending: false, error: action.payload };
            default:
                return null;
        }
    });
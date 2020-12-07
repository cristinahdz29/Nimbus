
const initialState = {
    weather : {}
}

const reducer = (state = initialState, action) => {
    if(action.type == 'ON_FETCHED_WEATHER') {
        return {
            ...state,
            weather: action.payload
        }
    }
    return state
}

export default reducer
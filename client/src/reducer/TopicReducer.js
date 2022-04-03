export const TopicReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_ALL_TOPICS':
            return {
                ...state,
                topics: payload,
            }
        case 'CREATE_NEW_TOPIC':
            return {
                ...state,
                topics: [...state.topics, payload]
            }
        default:
            return state;
    }
}
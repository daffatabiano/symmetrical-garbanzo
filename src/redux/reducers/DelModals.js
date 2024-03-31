const initialState = {
    modalDeleteShow: false,
};

const DelModalsReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'modalDelete/show':
            return {
                ...state,
                modalDeleteShow: true,
            };
        case 'modalDelete/hide':
            return {
                ...state,
                modalDeleteShow: false,
            };
        default:
            return state;
    }
};

export const ShowDeleted = () => {
    return { type: 'modalDelete/show' };
};
export const hideDelete = () => {
    return { type: 'modalDelete/hide' };
};

export default DelModalsReducers;

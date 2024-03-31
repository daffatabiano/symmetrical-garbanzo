const initialState = {
    showModal: false,
};

const AddModalsReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'showModal/show':
            return {
                ...state,
                showModal: true,
            };
        case 'showModal/hide':
            return {
                ...state,
                showModal: false,
            };
        default:
            return state;
    }
};

export const show = () => ({ type: 'showModal/show' });
export const hide = () => ({ type: 'showModal/hide' });

export default AddModalsReducers;

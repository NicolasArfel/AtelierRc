/* --- creation of the state --- */

export const initialState = {
    furniture_name: '',
    type: '',
    editor: '',
    designer: '',
    date: '',
    dimensions: '',
    conditions: '',
    description: '',
    availability: true,
    photo_credit: '',
}

/* --- reducer contain all the action switch case --- */

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {



        default:
            return state;
    }
};

export default reducer;
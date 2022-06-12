const ProjetsMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {

        default:
            next(action);
    }
};

export default ProjetsMiddleware;
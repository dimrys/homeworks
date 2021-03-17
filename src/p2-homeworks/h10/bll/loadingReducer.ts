enum ActionType  {
    CHANGE_LOADING = 'CHANGE-LOADING'
}


type InitStateType = {
    loading: boolean
}
type LoadingType = {
    type: ActionType.CHANGE_LOADING
    loading: boolean
}


const initState = {
    loading: false
};

export const loadingReducer = (state:InitStateType = initState, action: LoadingType): InitStateType => { // fix any
    switch (action.type) {
        case ActionType.CHANGE_LOADING: {
            return {
                ...state,
                loading: action.loading
            };
        }
        default: return state;
    }
};

export const loadingAC = (loading: boolean): LoadingType => {
    return {
        type:ActionType.CHANGE_LOADING,
        loading
    }
}; // fix any
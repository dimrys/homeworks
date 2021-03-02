type ManType = {
    _id: number
    name: string
    age: number
}


export const homeWorkReducer = (state: Array<ManType>, action: any): Array<ManType> => {
    switch (action.type) {
        case "sort": {
            return action.payload === "up"
                ? [...state].sort((a, b) => a.name > b.name ? 1 : -1)
                : [...state].sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case "check": {
            return state.filter(pl => pl.age >= action.payload)
        }
        default:
            return state
    }
};
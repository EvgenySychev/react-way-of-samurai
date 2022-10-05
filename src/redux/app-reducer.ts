type authReducerActionType = setAuthUserDataActionType
type setAuthUserDataActionType = ReturnType<typeof setinitializedSuccess>
export type InitialStateType = {
    initialized: boolean,
}

const initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action: authReducerActionType): InitialStateType => {

    switch (action.type) {
        case "INITIALIZED_SUCCESS" :
            return {
                ...state,
                initialized:true
            }
        default:
            return state
    }
}

export const setinitializedSuccess = () => (
    {type: 'INITIALIZED_SUCCESS'} as const
)




type authReducerActionType = setAuthUserDataActionType;
type setAuthUserDataActionType = ReturnType<typeof setInitializedSuccess>;
export type InitialStateType = {
  initialized: boolean;
};

const initialState = {
  initialized: false,
};

export const appReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: authReducerActionType,
): InitialStateType => {
  switch (action.type) {
    case 'app/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({ type: 'app/INITIALIZED_SUCCESS' } as const);

import { useReducer } from 'react';

import { IAction, IState } from './interfaces';

export const initialState: IState = {
  myData: {},
  isLoading: true,
  hasError: false,
};

const reducer = (oldState: IState, { type, payload }: IAction): IState => {
  switch (type) {
    case 'REQUEST_COMPLETE':
      return {
        ...oldState,
        myData: payload.myData,
        isLoading: false,
        hasError: false,
      };
    case 'REQUEST_LOADING':
      return {
        ...oldState,
        isLoading: true,
      };
    case 'REQUEST_ERROR':
      return {
        ...oldState,
        isLoading: false,
        hasError: true,
      };
    default:
      return oldState;
  }
};

export const useMyDataReducer = () => useReducer(reducer, initialState);

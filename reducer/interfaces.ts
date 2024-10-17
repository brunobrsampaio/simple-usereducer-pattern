export interface IState {
  myData: Record<string, unknown>;
  isLoading: boolean;
  hasError: boolean;
}

export interface IRequestComplete {
  type: 'REQUEST_COMPLETE';
  payload: {
    myData: Record<string, unknown>;
  };
}

export interface IRequestLoading {
  type: 'REQUEST_LOADING';
  payload?: never;
}

export interface IRequestError {
  type: 'REQUEST_ERROR';
  payload?: never;
}

export type IAction =
| IRequestComplete
| IRequestLoading
| IRequestError;

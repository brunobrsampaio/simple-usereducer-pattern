import React, { useCallback, useMemo } from 'react';
import { useMyDataReducer } from './reducer/index';

export const useCustomHook = () => {
  const [{ myData, isLoading, hasError }, dispatch] = useMyDataReducer();

  const setData = useCallback((data: Record<string, unknown>) => {
    dispatch({
      type: 'REQUEST_COMPLETE',
      payload: {
        myData: data,
      },
    });
  }, [dispatch]);

  const load = useCallback(() => {
    dispatch({
      type: 'REQUEST_LOADING',
    });
  }, [dispatch]);

  const error = useCallback(() => {
    dispatch({
      type: 'REQUEST_ERROR',
    });
  }, [dispatch]);

  return useMemo(() => ({
    myData,
    isLoading,
    hasError,
    setData,
    load,
    error,
  }), [
    myData,
    isLoading,
    hasError,
    setData,
    load,
    error,
  ]);
};
import React, { useCallback, useEffect } from 'react';

import { useCustomHook } from "./useCustomHook";

export const Example = () => {
  const { myData, setData, isLoading } = useCustomHook();

  const setName = useCallback(() => {
    setData({
      name: 'John Doe',
    });
  }, [setData]);

  useEffect(() => {
    setName();
  }, [setName]);

  return (
    <p>
      {isLoading ? myData.name : 'loading...'}
    </p>
  );
};
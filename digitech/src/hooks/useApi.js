import { useState, useEffect, useCallback } from "react";

/**
 * @param {Function} apiFunc - The API function to call (should return a promise).
 * @param {Array} params -  parameters to pass to the API function.
 * @param {boolean} immediate - Whether to call the API immediately.
 */
export function useApi(apiFunc, params = [], immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...overrideParams) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunc(...(overrideParams.length ? overrideParams : params));
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "API error");
      setLoading(false);
      throw err;
    }
  }, [apiFunc, ...params]);

  useEffect(() => {
    if (immediate) execute();
  }, []);

  return { data, loading, error, refetch: execute };
}

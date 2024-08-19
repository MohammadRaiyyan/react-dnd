import { useCallback, useEffect, useState } from "react";

type Fetcher<T, P> = (params: P) => Promise<T>;

function useFetch<T, P>({
  fetcher,
  params,
}: {
  fetcher: Fetcher<T, P>;
  params: P;
}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(
    async (args: P) => {
      try {
        setLoading(true);
        const res = await fetcher(args);
        setData(res);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    },
    [fetcher]
  );

  const refetch = useCallback(() => {
    fetch(params);
  }, [params, fetch]);

  useEffect(() => {
    fetch(params);
  }, [fetch, params]);

  return {
    loading,
    data,
    refetch,
  };
}

export default useFetch;

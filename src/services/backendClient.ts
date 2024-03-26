import { TMethod, TOptions } from './d';

export const handleCall = async (
  endpoint: string,
  method: TMethod,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bodyObejct?: Record<string, any>,
  caches?: RequestCache,
) => {
  let options: TOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    credentials: 'include',
    cache: caches || 'default',
  };

  if (bodyObejct) {
    options = {
      ...options,
      body: JSON.stringify(bodyObejct),
    };
  }
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${endpoint}`;
  console.log(url, 'url');
  const response = await fetch(url, options);

  const result = await response.json();
  return result;
};

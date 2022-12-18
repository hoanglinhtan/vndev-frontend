import * as React from 'react';

export default function useSubdomain(): [string | undefined] {
  const [subdomain] = React.useState(() => {
    try {
      const parts = window?.location?.hostname?.split('.');
      return parts.length > 2 ? parts[0] : '';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
    }
  });

  return [subdomain];
}

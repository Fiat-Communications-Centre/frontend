"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useClientUrl = () => {
  const [fullUrl, setFullUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(`${window.location.origin}${router.asPath}`);
    }
  }, [router]);

  return { fullUrl, host: window?.location?.origin  };
};

export default useClientUrl;

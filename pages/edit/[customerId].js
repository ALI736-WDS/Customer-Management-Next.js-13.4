import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CustomerEditPage from "../../components/templates/CustomerEditPage";

function Index() {
  const [data, setData] = useState(null);

  const router = useRouter();
  /* bare aval false mide va undefined mide va INF ke gerefte shod, true mishe
  , pas isReady mige true ya false hast va badesh edame karo anjam midim */
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);

  if (data) return <CustomerEditPage data={data} id={customerId} />;
}

export default Index;
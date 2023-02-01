import { useEffect, useState } from "react";
import useSWR from "swr";
function LastSalesPage() {
  const [sales, setSales] = useState();
  //   const [isLoading, setLoading] = useState(false);

  const { data, error } = userSWR("DBurl");
  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);
  ///////////
  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("database url")
  //       //some url
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformedSales = [];

  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }

  //         setSales(transformedSales);
  //         setLoading(false);
  //       });
  //   }, []);

  if (isLoading || !sales || error) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;

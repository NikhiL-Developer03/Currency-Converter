import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Define an async function within the useEffect
    const fetchData = async () => {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const jsonFormat = await response.json();
        setData(jsonFormat.rates); // Update the state with rates
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    // Call the async function
    fetchData();
  }, [currency]); // Dependency array ensures it re-fetches data when currency changes

  return data;
}

export default useCurrencyInfo;









// import { useEffect, useState } from "react";
// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   useEffect(async () => {
//     const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`)
//     const JsonFormate = await response.json();
//     const res = JsonFormate.rates;
//     setData(res);
    

//     // .then((res) => res.json)
//     // .then((res) => setData(res[currency]));
    
//     // console.table(res);

    
//     console.log(data);
//   }, [currency]);
//   console.log(data);
//   return data;
// }

// export default useCurrencyInfo;
// // 
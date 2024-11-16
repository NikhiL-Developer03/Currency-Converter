import {useEffect,useState} from 'react'
function useCurrencyInfo(currency){
useEffect(()=>{
  const [data,setData] = useState({})
  fetch(`https://open.er-api.com/v6/latest/${currency}`).then((res)=>res.json)
  .then((res)=>setData(res[currency]))
  console.table(data);
},[currency]) 
console.log(data);
return data
}

export default useCurrencyInfo;
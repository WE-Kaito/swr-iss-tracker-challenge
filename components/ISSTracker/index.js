import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
/*   const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  }); */

  const {data, error, isLoading, mutate} = useSWR(URL, {refreshInterval: 5000})

/*   async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  } */

/*   useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []); */
  console.log(data);
  if (error) {
    console.error(error);
    return <div>failed to load</div>}
  if (isLoading) {
    return <h1>Loading...</h1>;}
  
  return (
    <main>
      <Map longitude={data?.longitude ?? 0} latitude={data?.latitude?? 0} />
      <Controls
        longitude={data?.longitude?? 0}
        latitude={data?.latitude?? 0}
        onRefresh={() => mutate()}
      />
    </main>
  );
}

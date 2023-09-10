import axios from "axios";
import { useEffect, useState } from "react";
import APIKEY from "../apikey";

export const useGetWeather = (place = "", units = "") => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${APIKEY}&units=${units}`;
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [place, units]);
  return [data];
};

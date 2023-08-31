import axios from "axios";
import { useEffect, useState } from "react";

export const useGetWeather = (place = "santos,br", units = "metric") => {
  const [data, setData] = useState(() => {});
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=2c92e961a68bf34adb581ef4a9b0aae8&units=${units}`;
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [place, units]);
  return [data];
};

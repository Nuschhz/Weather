function Temperature({ mainTemp = 0, minTemp = 0, maxTemp = 0 }) {
  return (
    <div>
      <div>{mainTemp}</div>
      <div>
        {minTemp}
        {maxTemp}
      </div>
    </div>
  );
}

export default Temperature;

const baseURL = "https://api.coinpaprika.com/v1/coins";

export const getCoins = () => {
  return fetch(`${baseURL}`).then((res) =>
    res.json().catch((err) => console.log(err))
  );
};

export const getCoin = (id: string) => {
  return fetch(`${baseURL}/${id}`).then((res) =>
    res.json().catch((err) => console.log(err))
  );
};

export const getMarket = (id: string) => {
  const end = Math.floor(Date.now() / 1000);
  const start = Math.floor(Date.now() / 1000) - 24 * 14 * 60 * 60;
  return fetch(
    `${baseURL}/${id}/ohlcv/historical?start=${start}&end=${end}`
  ).then((res) => res.json().catch((err) => console.log(err)));
};

export const getExchange = (id: string) => {
  return fetch(`${baseURL}/${id}/markets`).then((res) =>
    res.json().catch((err) => console.log(err))
  );
};

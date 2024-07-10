const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((responce) => {
    console.log("responce", responce);
  });
};

export default swDev;

const CoinAnimation = ({ isLeft }) => {
  return (
    <img
      className=""
      src={
        isLeft
          ? "/assets/animations/coin-left.gif"
          : "/assets/animations/coin-right.gif"
      }
      width={400}
      alt="coin-moving"
    />
    // <div
    //   className={`w-[400px] h-[500px] bg-[url(${
    //     isLeft
    //       ? "/assets/animations/coin-left.gif"
    //       : "/assets/animations/coin-right.gif"
    //   })] bg-full`}
    // />
  );
};

export default CoinAnimation;

const TaskBar = ({
  imgUrl,
  title,
  price,
  isDaily,
  timeRemaining = "",
  checked = false,
  claimed = false,
  onClick = null,
  link = "",
}) => {
  const handleGoClick = () => {
    if (link != "" && link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`pl-2 pr-4 py-2 w-full flex gap-2 justify-between items-center ${
        claimed
          ? "bg-[url(/assets/imgs/tasks/Bar_disable.png)]"
          : "bg-[url(/assets/imgs/tasks/Bar.png)]"
      } bg-full text-sm cursor-pointer ${
        onClick && !claimed && checked && "active:scale-95"
      }`}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        <img className="" src={imgUrl} width={44} alt="task-logo" />
        <div className="flex flex-col gap-1">
          <div className="text-amber-text text-left">{title}</div>
          <div className="marker-font-yellow text-left flex items-center gap-1">
            <div>
              <img
                className=""
                src="/assets/imgs/tasks/coin.png"
                width={16}
                alt="coin-mark"
              />
            </div>
            {price.toLocaleString()}
          </div>
        </div>
      </div>
      {isDaily ? (
        <div className="px-4 py-1 text-white bg-[url(/assets/imgs/tasks/Bar_time.png)] bg-full">
          {timeRemaining}
        </div>
      ) : checked ? (
        <div className="w-6 h-6">
          <img
            className=""
            src="/assets/imgs/tasks/icon_check.png"
            width={32}
            alt="check-mark"
          />
        </div>
      ) : (
        <div
          className="px-6 py-1.5 bg-[url(/assets/imgs/tasks/button_blue.png)] bg-full marker-font-white text-lg active:scale-95"
          onClick={handleGoClick}
        >
          go
        </div>
      )}
    </div>
  );
};

export default TaskBar;

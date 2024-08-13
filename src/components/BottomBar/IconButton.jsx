const IconButton = ({ iconComponent, title, selected = false, onClick = null }) => {
  return (
    <div
      className={`relative flex justify-center items-center hover:items-end group w-[20%] hover:w-[42%] bg-[url(/assets/imgs/Menu.png)] transition-all`}
      onClick={onClick}
    >
      <div className="py-px px-1 flex flex-col items-center">
        <iconComponent stroke={selected ? '#FFFFFF' : '#AAAAAA'} />
        <div
          className={`marker-font-white hidden -mt-2 group-hover:block ${
            selected && "!block"
          } drop-shadow-xl`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default IconButton;

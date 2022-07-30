function Header() {
  const status = [
    {
      title: "Status 1",
      id: 1,
    },
    {
      title: "New",
      id: 2,
    },
    {
      title: "Working",
      id: 3,
    },
    {
      title: "Nurturing",
      id: 4,
    },
    {
      title: "Converted",
      id: 5,
    },
  ];

  return (
    <div className="bg-gray-200 h-full py-16 bg-cover">
      <div className="bg-white rounded shadow-inner grid justify-items-center sm:h-20 py-10 sm:py-0 px-4 mx-auto">
        <div className="w-full flex flex-wrap justify-start lg:justify-center m-auto gap-10">
          {status.map((item, i) => {
            return (
              <div
                className={`${
                  item.id === 1 && "bg-green-500 text-white"
                } h-10 w-full sm:w-40 2xl:w-60 cursor-pointer border border-gray-500 flex justify-center items-center font-semibold`}
                key={i}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;

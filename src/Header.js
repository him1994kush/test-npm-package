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
    {
      title: "Converted",
      id: 6,
    },
  ];

  return (
    <div className="bg-gray-200 h-full pb-16 sm:py-16 bg-cover">
      <div className="bg-white rounded shadow-inner grid justify-items-center h-auto py-10  px-4 mx-auto">
        <div className="max-w-max flex flex-wrap justify-center xl:justify-center m-auto gap-6 lg:gap-x 2xl:gap-10 3xl:gap-x-5">
          {status.map((item, i) => {
            return (
              <div
                className={`${
                  item.id === 1 && "bg-green-500 text-white"
                } h-10 w-full sm:w-40 2xl:w-44 4xl:w-52 cursor-pointer border border-gray-500 flex justify-center items-center font-semibold`}
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

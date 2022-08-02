import Header from "./Header";

function App() {
  const Features = [
    {
      id: 1,
      title: "Log Calls",
    },
    {
      id: 2,
      title: "Task",
    },
    {
      id: 3,
      title: "Event",
    },
    {
      id: 4,
      title: "Make Note",
    },
    {
      id: 5,
      title: "Add Attachment",
    },
    {
      id: 6,
      title: "Activity Set",
    },
    {
      id: 7,
      title: "Custom Field",
    },
  ];

  const Table = [
    {
      id: 1,
      subject: "Sample",
      type: "To Do",
      assigned: "Ravi Kumar",
      data: "13 Nov 2018",
      status: "Not Started",
    },
    {
      id: 2,
      subject: "Sample",
      type: "To Do",
      assigned: "Ravi Kumar",
      data: "13 Nov 2018",
      status: "Not Started",
    },
    {
      id: 3,
      subject: "Sample",
      type: "To Do",
      assigned: "Ravi Kumar",
      data: "13 Nov 2018",
      status: "Not Started",
    },
    {
      id: 4,
      subject: "Sample",
      type: "To Do",
      assigned: "Ravi Kumar",
      data: "13 Nov 2018",
      status: "Not Started",
    },
  ];

  const Cards = [
    {
      procuct: "Informed Product Features",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
    {
      procuct: "Send Product Brochure",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
    {
      procuct: "Informed Product Features",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
    {
      procuct: "Informed Product Features",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
    {
      procuct: "Informed Product Features",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
    {
      procuct: "Informed Product Features",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
    {
      procuct: "Informed Product Features",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
    {
      procuct: "Informed Product Features",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
    {
      procuct: "Informed Product Features",
      name: "Charles Gamez",
      date: "13 Nov 2018",
      time: "05:49 AM",
    },
  ];

  return (
    <div className="bg-gray-200 h-full py-16">
      <div className="w-11/12 2xl:w-9/12 mx-auto">
        <Header />
        <div className="relative">
          <div className="flex gap-x-6 text-gray-700 text-xl uppercase">
            <span className="cursor-pointer text-orange-500 border-4 border-b-orange-500 absolute bottom-0">
              Activity
            </span>
            <span className="cursor-pointer ml-32">Information</span>
          </div>
          <hr className="bg-gray-500 text-black h-1 w-full " />
        </div>

        <div className="flex lg:flex-row flex-col justify-between">
          {/* --------------------left-------------------- */}
          <div className="w-full mr-auto lg:w-8/12 xl:w-8/12 2xl:w-7/12 mt-6 border border-gray-400 pt-6 bg-white h-auto">
            <div className="w-full border-3 border-b border-gray-500 pb-4">
              <ul className="flex sm:flex-row flex-col justify-center gap-8 px-4 items-center">
                {Features.map((item, i) => {
                  return (
                    <li
                      className={`${
                        item.id === 2 &&
                        "bg-yellow-200 border-2 border-b-yellow-400 py-1 px-4"
                      }  cursor-pointer `}
                      key={i}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="p-6 sm:p-12">
              <span className="font-semibold text-lg">New Task</span>
              <div className="flex sm:flex-row flex-col pt-4 w-full justify-between gap-x-8">
                <label htmlFor="" className="flex flex-col sm:w-6/12">
                  <div className="">
                    Task type <span className="text-red-500">*</span>
                  </div>

                  <div>
                    <button
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      <svg
                        class="-mr-1 ml-auto h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </label>
                <label htmlFor="" className="flex flex-col sm:w-6/12">
                  <div className="">Subject</div>
                  <input type="text" className="border border-gray-300 h-10" />
                </label>
              </div>
              <div className="flex w-full sm:flex-row flex-col gap-x-8 justify-center pt-6">
                <div className="sm:w-6/12">
                  <div className="">
                    Assigned to <span className="text-red-500">*</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      <svg
                        class="-mr-1 ml-auto h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex w-full gap-x-8 justify-center pt-6">
                    <div className="w-1/2">
                      <div className="">Assigned to</div>
                      <input
                        type="date"
                        name=""
                        id=""
                        className="w-full border border-gray-300 h-10"
                      />
                    </div>
                    <div className="w-1/2">
                      <div className="">Assigned to</div>
                      <input
                        type="date"
                        name=""
                        id=""
                        className="w-full border border-gray-300 h-10"
                      />
                    </div>
                  </div>
                  <div className="w-full pt-6">
                    <div className="">Assigned to</div>
                    <input
                      type="date"
                      name=""
                      id=""
                      className="w-full border border-gray-300 h-10"
                    />
                  </div>
                </div>
                <div className="sm:w-6/12 pt-3 sm:pt-0">
                  <div className="">Details</div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="border border-gray-300 w-full"
                  ></textarea>
                  <div className="flex justify-center gap-x-8 w-full pt-3">
                    <button className="border border-gray-300 w-1/2 py-2">
                      Cancel
                    </button>
                    <button className="border border-orange-300 text-orange-300 w-1/2 py-2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <hr className="h-auto bg-gray-500 mt-4" />

              <div className="">
                <span>Task list</span>

                <div className="border border-gray-500 rounded">
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="bg-white border-b">
                              <tr>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                  #
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                  Subject
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                  Type
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                  Assigned to
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                  Due date
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                  <div className="flex justify-center items-center">
                                    Status
                                    <button
                                      type="button"
                                      class=""
                                      id="menu-button"
                                      aria-expanded="true"
                                      aria-haspopup="true"
                                    >
                                      <svg
                                        class="-mr-1 ml-auto h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Table.map((item, k) => {
                                return (
                                  <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                      {item.id}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.subject}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.type}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.assigned}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.data}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.status}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-orange-400 p-3 justify-end">
                    View more
                    <button
                      type="button"
                      class=""
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      <svg
                        class="-mr-1 ml-auto h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------left-------------------- */}

          {/* ------------------------right------------------------ */}
          <div className="w-full lg:w-4/12 border border-gray-400 mt-6 p-6 bg-white h-auto ">
            <div className="">
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Filter by date
                <svg
                  class="-mr-1 ml-auto h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <hr className="border-b border-gray-400 mt-4" />
            <div className="overflow-y-auto" style={{ height: "56rem" }}>
              {Cards.map((items, j) => {
                return (
                  <div
                    className="w-full h-28 border border-gray-400 mt-6 "
                    key={j}
                  >
                    <div className="flex flex-col justify-center items-center mx-auto mt-5">
                      <span className="text-black font-semibold">
                        {items.procuct}
                      </span>
                      <p>
                        You contacted with &nbsp;
                        <span className="text-orange-400">{items.name}</span>
                      </p>
                      <span>
                        {items.date} &nbsp; {items.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ------------------------right------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default App;

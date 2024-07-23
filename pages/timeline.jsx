import React from "react";

const TimeLine = () => {
  const data = [
    {
      id: 0,
      title: "Master's degree, Engineering",
      duration: "January 2023 - August 2024",
      org: "Oklahoma Christian University",
      skills: ["System Software", "SQL", "C#"],
      class:
        "bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
    },
    {
      id: 1,
      title: "Bachelor of Technology - BTech, Electronics and Communication Engineering",
      duration: "August 2018 - May 2022",
      org: "Sri Indu College Of Engineering & Technology",
      skills: ["Electronics", "Communication Engineering"],
      class:
        "bg-green-100 text-green-800 text-xs sm:text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    },
    {
      id: 2,
      title: "Bachelor of Technology - BTech, Electrical, Electronics and Communications Engineering",
      duration: "2018 - 2022",
      org: "Sri Indu College Of Engineering & Technology",
      skills: ["Electrical Engineering", "Electronics", "Communication"],
      class:
        "bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    },
  ];

  return (
    <div className="mt-20 mx-auto w-full max-w-3xl px-4 sm:px-6 md:px-8">
      <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
        {data.map((item, index) => (
          <li className={`mb-10 ml-6 sm:ml-10 ${index === data.length - 1 ? 'pb-10' : ''}`} key={item.id}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 sm:-left-6 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-2 text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}{" "}
              {item.id === 0 && (
                <span className="bg-blue-500 text-white text-xs sm:text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.duration}
            </time>
            <p className="text-xs sm:text-base mb-4">{item.org}</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, idx) => (
                <span key={idx} className={`${item.class}`}>
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <div className="h-32"></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
    
  );
};

export default TimeLine;

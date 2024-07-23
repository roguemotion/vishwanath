import { TfiLinkedin, TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent text-3xl font-semibold">
        Say hi!
      </h2>
      <p className="text-sm text-gray-300 max-w-sm">
        If you have any queries or would like to discuss opportunities, please reach out using the links below.
      </p>
      <div className="flex flex-col space-y-2">
        <a
          href="mailto:vishwanathreddykoppula987@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <TfiEmail className="h-4 w-4" />
          <span className="text-sm">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/vishwanath-reddy-koppula-0256ab226/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <TfiLinkedin className="h-4 w-4" />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
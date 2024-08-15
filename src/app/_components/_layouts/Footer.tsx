export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden">
      <div className="px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* <a href="#">
                <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""></img>
            </a> */}

          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
              <svg
                className="w-5 h-5 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span className="mx-1">View Demo</span>
            </button>

            <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Get started
            </button>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Teams{" "}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Privacy{" "}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Cookies{" "}
            </a>
          </div>
        </div>
        <svg
          width="314"
          height="214"
          viewBox="0 0 314 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 z-0"
        >
          <path
            d="M174.5 6V-23.5L233 36H204.5C187.931 36 174.5 22.5685 174.5 6Z"
            fill="#465467"
          ></path>
          <path
            d="M174.5 6V-23.5L116 36H144.5C161.069 36 174.5 22.5685 174.5 6Z"
            fill="#151E2C"
          ></path>
          <path
            d="M116.5 65.5V36L175 95.5H146.5C129.931 95.5 116.5 82.0685 116.5 65.5Z"
            fill="#465467"
          ></path>
          <path
            d="M116.5 65.5V36L58 95.5H86.5C103.069 95.5 116.5 82.0685 116.5 65.5Z"
            fill="#2F3B4B"
          ></path>
          <path
            d="M59.5 125V95.5L118 155H89.5C72.9315 155 59.5 141.569 59.5 125Z"
            fill="#151E2C"
          ></path>
          <path
            d="M59.5 125V95.5L1.00003 155H29.5C46.0686 155 59.5 141.569 59.5 125Z"
            fill="#2F3B4B"
          ></path>
          <path
            d="M58.5 184.5L58.5 214L-5.20166e-06 154.5L28.5 154.5C45.0685 154.5 58.5 167.931 58.5 184.5Z"
            fill="#151E2C"
          ></path>
          <path
            d="M58.5 184.5L58.5 214L117 154.5L88.5 154.5C71.9315 154.5 58.5 167.931 58.5 184.5Z"
            fill="#2F3B4B"
          ></path>
          <path
            d="M174.5 125V95.5L233 155H204.5C187.931 155 174.5 141.569 174.5 125Z"
            fill="#151E2C"
          ></path>
          <path
            d="M174.5 125V95.5L116 155H144.5C161.069 155 174.5 141.569 174.5 125Z"
            fill="#2F3B4B"
          ></path>
          <path
            d="M173.5 184.5L173.5 214L115 154.5L143.5 154.5C160.069 154.5 173.5 167.931 173.5 184.5Z"
            fill="#151E2C"
          ></path>
          <path
            d="M173.5 184.5L173.5 214L232 154.5L203.5 154.5C186.931 154.5 173.5 167.931 173.5 184.5Z"
            fill="#2F3B4B"
          ></path>
          <path
            d="M289.5 125V95.5L348 155H319.5C302.931 155 289.5 141.569 289.5 125Z"
            fill="#151E2C"
          ></path>
          <path
            d="M289.5 125V95.5L231 155H259.5C276.069 155 289.5 141.569 289.5 125Z"
            fill="#2F3B4B"
          ></path>
          <path
            d="M288.5 184.5L288.5 214L230 154.5L258.5 154.5C275.069 154.5 288.5 167.931 288.5 184.5Z"
            fill="#151E2C"
          ></path>
          <path
            d="M288.5 184.5L288.5 214L347 154.5L318.5 154.5C301.931 154.5 288.5 167.931 288.5 184.5Z"
            fill="#2F3B4B"
          ></path>
          <path
            d="M286.5 6V-23.5L345 36H316.5C299.931 36 286.5 22.5685 286.5 6Z"
            fill="#465467"
          ></path>
          <path
            d="M286.5 6V-23.5L228 36H256.5C273.069 36 286.5 22.5685 286.5 6Z"
            fill="#2F3B4B"
          ></path>
          <path
            d="M346.5 66.5V37L288 96.5H316.5C333.069 96.5 346.5 83.0685 346.5 66.5Z"
            fill="#2F3B4B"
          ></path>
          <g opacity="0.34">
            <path
              d="M233 65.5V36L291.5 95.5H263C246.431 95.5 233 82.0685 233 65.5Z"
              fill="#465467"
            ></path>
            <path
              d="M233 65.5V36L174.5 95.5H203C219.569 95.5 233 82.0685 233 65.5Z"
              fill="#2F3B4B"
            ></path>
          </g>
        </svg>
      </div>
    </footer>
  );
}

import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const PopupLayout = () => {
  return (
    <div className="w-[400px] h-[350px] bg-gray-100 shadow-lg rounded-md overflow-hidden flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-3">
        <h1 className="text-white text-center text-lg font-bold">
          Nayem's Extension
        </h1>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <p className="text-gray-700 font-medium">Follow Us:</p>
        <nav className="flex space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-110 transition"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:scale-110 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:scale-110 transition"
          >
            <FaLinkedin size={28} />
          </a>
        </nav>
      </div>

      {/* Footer */}
      <footer className="w-full py-2 bg-gray-200 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Nayem's Extension
      </footer>
    </div>
  );
};

export default PopupLayout;

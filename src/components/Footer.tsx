const Footer = () => {
    return (
    <footer id="contact" className="bg-[#ED553B] text-white py-8 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
            <h3 className="text-lg font-bold mb-2">Taw Books</h3>
            <p>Discover your next favorite book with us.</p>
            <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                    <img src="Email.png" alt="Email" className="w-4 h-4" />
                    <p>contact@company.com</p>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="Phone.png" alt="Phone" className="w-4 h-4" />
                    <p>(414) 687 - 5892</p>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="location.png" alt="Address" className="w-4 h-4" />
                    <p>794 Mcallister St, San Francisco, 94102</p>
                </div>
            </div>
            <div>
            <ul className="flex space-x-4">
                <li>
                <a href="https://facebook.com" className="hover:underline">
                    <img src="Facebook.png" alt="Facebook" className="w-[0.6rem] h-[0.6rem]" />
                </a>
                </li>
                <li>
                <a href="https://twitter.com" className="hover:underline">
                    <img src="Instagram.png" alt="Twitter" className="w-[0.6rem] h-[0.6rem]" />
                </a>
                </li>
                <li>
                <a href="https://instagram.com" className="hover:underline">
                    <img src="LinkedIn.png" alt="Instagram" className="w-[0.6rem] h-[0.6rem]" />
                </a>
                </li>
            </ul>
            </div>
        </div>
        <div>
        <h3 className="text-lg font-bold mb-2">Navigation</h3>
            <ul className="space-y-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#books" className="hover:underline">Books</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Newsletter Signup</h3>
        <form className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded text-gray-800"
          required
        />
        <button
          type="submit"
          className="bg-white text-[#ED553B] p-2 rounded font-bold hover:bg-gray-200"
        >
          Subscribe
        </button>
        </form>
      </div>
    </div>
    <div className="text-center mt-8">
      <p>&copy; 2023 Taw Books. All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;
const Footer = () => {
  return (
    <footer className="backdrop-blur-2xl bg-black/50 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">BlogPen</h2>
          <p className="text-sm text-gray-400">Your daily dose of blogs & insights.</p>
        </div>

        <div className="flex space-x-4">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
            <a key={platform} href="#" className="hover:opacity-75">
              <img src={`/icons/${platform}.png`} alt={platform} className="h-9 w-9" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BlogPen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
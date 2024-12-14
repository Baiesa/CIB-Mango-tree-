const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-8 transition-all ease-in-out duration-300">
      <div className="container mx-auto px-4 text-center">
        {/* Links Row */}
        <div className="space-x-4">
          <a href="#" className="hover:text-emerald-200 transition-colors duration-300">
            GitHub
          </a>
          <a href="#" className="hover:text-emerald-200 transition-colors duration-300">
            Documentation
          </a>
          <a href="#" className="hover:text-emerald-200 transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* Copyright Row */}
        <div className="mt-4 text-lg">
          <p>
            © {new Date().getFullYear()} CIB Mango Tree | A Project by Civic Tech DC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-primary-content text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm lg:text-base">
          &copy; {new Date().getFullYear()} Noble Living. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

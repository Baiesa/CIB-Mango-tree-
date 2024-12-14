import React from 'react';
// Import your image from the src folder (Make sure the path is correct)
import mangoTreeImage from '../mangoTreeImage.jpg'; // Adjust the path if needed

const HomePage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${mangoTreeImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Ensures the image covers the full screen
      }}
    >
      {/* Overlay to add black background color with some transparency */}
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Adjust opacity for effect */}

      {/* Container for the text, aligned to the top */}
      <div className="relative z-10 px-8 py-6 text-white">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white shadow-lg transition-all ease-in-out duration-1000 transform hover:scale-105 hover:text-yellow-400">
            Embrace the Power of Connection
          </h2>

          {/* Paragraph aligned to the top */}
          <div className="max-w-xl md:text-lg text-white font-light leading-relaxed mb-8">
            <p>
              A collaborative, open-source software tool designed to detect coordinated inauthentic behavior in online activity datasets.
              Developed by Civic Tech DC, it aims to protect online discourse and ensure trust.
            </p>
          </div>

          <p className="text-xl font-semibold text-white transition-all ease-in-out duration-500 hover:text-green-700 hover:scale-105 font-light leading-relaxed">
            Nourishing digital conversations, just like mango trees nourish the environment!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const InspirationSection = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 my-12 fade-in-animation">
        <h2 className="text-4xl font-bold mb-6 text-emerald-700">Inspiration</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p>
              Inspired by Taiwan's vibrant civil society and its delicious mangoes,
              this project aims to emulate the Taiwanese people's drive for open online
              expression, free of manipulation.
            </p>
            <p>
              Online discourse can be colorful, but it should also be natural and
              healthy—just like a perfectly ripe mango.
            </p>
          </div>
          <div>
            <img
              src="/path/to/your-image.jpg" // Replace with actual image path
              alt="Taiwan Inspiration"
              className="rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default InspirationSection;
  
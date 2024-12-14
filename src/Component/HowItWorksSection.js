import { Terminal, BarChart2, CheckCircle } from 'lucide-react'; // Import the necessary icons

const HowItWorksSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-8 transition-all ease-in-out duration-300">
      <h2 className="text-4xl font-bold mb-6 text-emerald-700">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* CLI */}
        <div
          className="bg-emerald-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
        >
          <div className="text-emerald-600 mb-4">
            <Terminal size={40} />
          </div>
          <h3 className="font-semibold text-xl mb-2">Command Line Interface</h3>
          <p>Interactive CLI for analyzing social media datasets, enabling efficient data inspection and manipulation.</p>
        </div>

        {/* Advanced Analysis */}
        <div
          className="bg-emerald-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
        >
          <div className="text-emerald-600 mb-4">
            <BarChart2 size={40} />
          </div>
          <h3 className="font-semibold text-xl mb-2">Advanced Analysis</h3>
          <p>Analyze post content, usernames, timestamps, and other key features to detect coordinated inauthentic behavior.</p>
        </div>

        {/* Flexible Testing */}
        <div
          className="bg-emerald-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
        >
          <div className="text-emerald-600 mb-4">
            <CheckCircle size={40} />
          </div>
          <h3 className="font-semibold text-xl mb-2">Flexible Testing</h3>
          <p>Use structured methods to test and detect manipulative behaviors, ensuring a comprehensive analysis of the data.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;

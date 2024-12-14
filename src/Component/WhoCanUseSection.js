import React from 'react';
import { Search, FileText, Users, BarChart } from 'lucide-react'; // Add multiple icons

const WhoCanUseSection = () => {
  const users = [
      { name: 'Researchers', icon: <Search className="mr-2 text-emerald-600" size={20} /> },
      { name: 'Journalists', icon: <FileText className="mr-2 text-emerald-600" size={20} /> },
      { name: 'Civil Society Organizations', icon: <Users className="mr-2 text-emerald-600" size={20} /> },
      { name: 'Digital Analysts', icon: <BarChart className="mr-2 text-emerald-600" size={20} /> }
  ];

  return (
      <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-emerald-700">Who Can Use It?</h2>
          <div className="grid md:grid-cols-2 gap-6">
              <div>
                  <p className="mb-4">
                      The CIB Mango Tree is ideal for professionals dedicated to maintaining
                      the integrity of online discourse. Our tool provides adaptable testing
                      methods to uncover coordinated inauthentic behavior.
                  </p>
                  <ul className="space-y-2 mb-4">
                      {users.map((user, index) => (
                          <li key={index} className="flex items-center">
                              {user.icon}
                              {user.name}
                          </li>
                      ))}
                  </ul>
              </div>
              <div>
                  <img
                      src="/path/to/users-image.jpg" // Replace with actual image path
                      alt="Diverse Users"
                      className="rounded-lg shadow-md"
                  />
              </div>
          </div>
      </div>
  );
};

export default WhoCanUseSection;

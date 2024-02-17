import React from 'react';

const SponsorsPage = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor A', logo: '/sponsorA-logo.png' },
    { id: 2, name: 'Sponsor B', logo: '/sponsorB-logo.png' },
    { id: 3, name: 'Sponsor C', logo: '/sponsorC-logo.png' },
    // Add more sponsors as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16">
        <div className="bg-white bg-opacity-90 p-8 rounded-md shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Sponsors</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex flex-col items-center">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} Logo`}
                  className="w-32 h-32 object-contain mb-4"
                />
                <p className="text-lg font-semibold">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;

import React from 'react';


const AboutUsPage = () => {
  return (
    <div className="bg-sports-background bg-cover bg-center min-h-screen">
      {/* You can replace Header with your own header component */}

      <div className="container mx-auto py-16">
        <div className="bg-white bg-opacity-90 p-8 rounded-md shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet lacus vel elit dictum
            euismod. Nullam tincidunt, quam eu dignissim elementum, massa quam mattis sem, ut interdum odio
            odio nec lectus. Vestibulum auctor vel enim id convallis. Aenean sit amet orci a diam cursus
            efficitur. Integer vel sem id nisi scelerisque congue vel ut erat. Fusce vitae metus et lacus
            euismod luctus id nec sem.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Phasellus efficitur convallis consectetur. Fusce euismod, dui vel fermentum volutpat, metus
            ligula euismod massa, ut bibendum ligula turpis et orci. Suspendisse potenti. In hac habitasse
            platea dictumst. Aenean in lectus vitae lacus varius tincidunt vel et turpis. Fusce nec
            sollicitudin odio. Integer consequat urna eu venenatis pellentesque.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Curabitur efficitur justo vel nisi blandit, eu auctor orci condimentum. Duis eu lacinia turpis,
            et gravida mi. Ut eleifend, augue at venenatis facilisis, libero enim ullamcorper dui, nec
            dapibus arcu justo vel sem. Nam feugiat auctor purus, nec sollicitudin mauris sodales id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

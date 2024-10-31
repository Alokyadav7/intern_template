import React from 'react';

const SSFTemplate = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-4 sm:p-8 font-sans mb-5 space-y-8">
      {/* Header Section */}
      <header className="bg-white p-6 sm:rounded-lg sm:shadow mb-8">
        <img 
          src="/font_01.png" 
          alt="Event Banner" 
          className="w-full h-auto rounded-lg object-cover mb-4 max-h-60 sm:max-h-80"
        />
        <h1 className="text-2xl font-bold text-blue-800">Dear Success Seeker,</h1>
        <p className="mt-4">
          Congratulations on taking the first step toward unlocking a brighter future for your family!
          You’ve reserved two valuable hours for growth, inspiration, and transformation, and we couldn’t be more excited to have you with us.
        </p>
      </header>

      {/* Event Details */}
      <section className="bg-white p-6 sm:rounded-lg sm:shadow space-y-4">
        <h2 className="text-xl font-semibold text-blue-800">Event Confirmation</h2>
        <p>
          Your seat is confirmed for an extraordinary experience with the Memory Man of India, Sajan Shah,
          at the “Ultimate Memory Power & Building a Positive Home Culture” event.
        </p>
        <p>
          <strong>Sajan Shah</strong> has touched the lives of 15 million people over 14 years, 
          spreading hope, inspiration, and tools for growth. This event will be memorable for your entire family.
        </p>
      </section>

      {/* Video Section */}
      <section className="bg-white p-6 sm:rounded-lg sm:shadow space-y-4">
        <h3 className="text-lg font-semibold text-blue-800">Season of Learning - A Journey to Remember</h3>
        <div className="w-full h-48 sm:h-[400px]">
          <iframe
            src="https://www.youtube.com/embed/oBkfYQYPNu0"
            title="YouTube video player"
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a href="#" className="inline-block w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition duration-300">
          REGISTER FOR SOL
        </a>
      </section>

      {/* Program Details */}
      <section className="bg-white p-6 sm:rounded-lg sm:shadow space-y-4">
        <h3 className="text-lg font-semibold text-blue-800">Program Details</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Date:</strong> 22 November 2024</li>
          <li><strong>Time:</strong> 7:30 a.m. - 8:30 p.m.</li>
          <li><strong>Venue:</strong> Town Hall, Gandhinagar (Arrive 30 minutes early)</li>
        </ul>
        <p>This <strong>free event</strong> in <strong>Hindi</strong> has limited seats, first-come, first-served.</p>
      </section>

      {/* Tips Section */}
      <section className="bg-white p-6 sm:rounded-lg sm:shadow space-y-4">
        <h3 className="text-lg font-semibold text-blue-800">Tips to Make the Most of the Event</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bring a notebook to capture key insights.</li>
          <li>Wear comfortable clothing for a relaxed experience.</li>
          <li>Parking is available at the venue.</li>
        </ul>
        <a href="#" className="inline-block w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition duration-300">
          REGISTER NOW
        </a>
      </section>

      {/* Partners and Contact Section */}
      <section className="bg-white p-6 sm:rounded-lg sm:shadow space-y-4">
        <h3 className="text-lg font-semibold text-blue-800">Our Partners</h3>
        <p className="text-sm text-gray-700">
          Thanks to PSP Foundation, Shatayu Foundation, Khushi Advertising, Go Banana, Raajratna Stainless Steel,
          Asia Charitable Trust, Sunhearrt Ceramics, and others.
        </p>

        <h3 className="text-lg font-semibold text-blue-800">Connect With Us</h3>
        <address className="not-italic">
          8 Deepawali Complex, Near Income Tax Cross Road, Ashram Road, Opp. Old High Court Road, Ahmedabad, Gujarat 380014
          <br />
          <a href="tel:+918511363376" className="text-blue-700">+91 8511363376</a> | 
          <a href="mailto:info@sajanshah.com" className="text-blue-700 ml-2">info@sajanshah.com</a>
        </address>
        <div className="mt-4 flex space-x-4 text-blue-700">
          <a href="https://instagram.com/sajan_shahh" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://twitter.com/sajanofficial" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </section>
    </div>
  );
};

export default SSFTemplate;

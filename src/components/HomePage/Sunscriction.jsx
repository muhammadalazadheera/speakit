import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    // Add your fetch/post logic here (e.g., to Firebase, MongoDB, etc.)
    setEmail('');
  };

  return (
    <section className="bg-base-100 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center md:w-[85%] mx-auto">
        {/* Image */}
        <img
          src="https://avatars.mds.yandex.net/i?id=6d30494ae5cf937954369018d1b2871d92894190-12684404-images-thumbs&n=13"
          alt="Newsletter"
          className="rounded-2xl shadow-md w-full"
        />

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and never miss an update. Get the latest news, tutorials, and offers delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-yellow-500 mb-8">About Us</h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to <span className="text-yellow-400 font-semibold">Bookstore</span>—your gateway to a world of knowledge, imagination, and discovery. Established with a passion for reading, we pride ourselves on offering an extensive collection of books, ranging from timeless classics to the latest bestsellers.
        </p>

        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Our Mission</h2>
          <p className="text-gray-300">
            At Bookstore, our mission is to foster a love for reading by providing a welcoming space for book enthusiasts of all ages. Whether you're seeking inspiration, entertainment, or knowledge, we have something for everyone.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>A diverse collection of books across genres: fiction, non-fiction, self-help, science, and more.</li>
            <li>Curated recommendations by our knowledgeable staff.</li>
            <li>Exclusive discounts and seasonal promotions.</li>
            <li>Community events, author signings, and book clubs.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Why Choose Us?</h2>
          <p className="text-gray-300">
            At Bookstore, we believe that books have the power to change lives. We aim to create a community of readers who can connect, learn, and grow together. Our friendly staff, cozy reading spaces, and wide selection ensure an unforgettable experience every time you visit.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Contact Us</h2>
          <p className="text-gray-300">
            Have questions or need assistance? Reach out to us at <a href="mailto:support@bookstore.com" className="text-yellow-400 underline">support@bookstore.com</a> or visit us at our store.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

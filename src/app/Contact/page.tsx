export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-6xl mx-auto p-6 space-y-12 text-gray-800">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>

        <p className="text-center text-lg max-w-2xl mx-auto">
          Have questions, suggestions, or just want to chat? Fill out the form or reach us using the info below. We’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Store Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Our Store</h2>
              <p className="text-gray-600">123 Main Street, Kigali, Rwanda</p>
              <p className="text-gray-600">Email: support@yourstore.com</p>
              <p className="text-gray-600">Phone: +250 789 123 456</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Working Hours</h2>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Follow Us</h2>
              <ul className="text-gray-600 space-y-1">
                <li>Instagram: <a href="#" className="text-blue-600 hover:underline">@yourstore</a></li>
                <li>Facebook: <a href="#" className="text-blue-600 hover:underline">YourStore</a></li>
                <li>Twitter: <a href="#" className="text-blue-600 hover:underline">@yourstore</a></li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Type your message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold"
            >
              ✉️ Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

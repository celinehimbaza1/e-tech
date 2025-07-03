
export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <main className="max-w-5xl mx-auto p-6 space-y-8 text-black">
        <h1 className="text-4xl font-bold text-center">About Us</h1>

        <section className="space-y-4">
          <p>
            Welcome to <strong>E-Store</strong>! We believe shopping should be simple,
            enjoyable, and tailored to your lifestyle. Founded in 2024, our mission is to bring you
            a curated collection of quality products at competitive prices — all in one convenient
            online store.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Who We Are</h2>
          <p>
            We are a passionate team of product lovers dedicated to sourcing the best items that meet
            our high standards of quality and style. Whether you’re looking for the latest fashion
            trends, innovative gadgets, or everyday essentials, we’ve got you covered.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Our Values</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Customer Satisfaction:</strong> Your happiness is our priority. We provide exceptional customer service and support every step of the way.</li>
            <li><strong>Quality First:</strong> Carefully selecting products from trusted brands ensures you get the best.</li>
            <li><strong>Transparency:</strong> Honest pricing and clear communication are part of who we are.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Why Shop With Us?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Wide product range updated regularly</li>
            <li>Easy and secure checkout</li>
            <li>Fast shipping and hassle-free returns</li>
            <li>Dedicated support team</li>
          </ul>

          <p className="mt-6">
            Thank you for choosing <strong>E-Store</strong>. We look forward to serving you!
          </p>
        </section>
      </main>
    </div>
  );
}

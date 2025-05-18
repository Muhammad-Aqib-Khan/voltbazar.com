import FirstBody from "../(components)/firstBody";

export default function About() {
  return (
    <div>
      <FirstBody title="About Us" backgroundImage="/about-bg.jpg" />

      {/* First Section - No background color */}
      <section className="flex items-center bg-white">
        <div className="max-w-3xl mx-auto px-4 w-full">
          <h2 className="text-2xl font-bold mb-2">About us</h2>
          <p className="text-lg text-gray-700">
            Welcome to Panjab Electronics, your one-stop shop for household electronic solutions that combine quality, innovation, and affordability.
          </p>
        </div>
      </section>

      {/* Second Section - Blue background with white border */}
      <section className="mt-4 flex items-center bg-white">
        <div className="max-w-3xl mx-auto px-4 w-full border border-white rounded-lg p-6 bg-blue-500">
          <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
          <p className="text-white text-base">
            To bring the best in technology and convenience to every home, delivering unmatched value and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Third Section - Copyright section color */}
      <section className=" mt-4 p-8 flex bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 w-full rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Why Choose Us?</h3>
          <ul className="text-gray-300 list-disc list-inside mb-4">
            <li><span className="font-semibold text-white">Extensive Product Range:</span> We provide a diverse selection of electronic items for all household needs.</li>
            <li><span className="font-semibold text-white">Affordable Pricing:</span> Quality products at competitive prices, ensuring value for money.</li>
            <li><span className="font-semibold text-white">Expert Guidance:</span> Our knowledgeable staff is here to help you make informed decisions.</li>
            <li><span className="font-semibold text-white">After-Sales Support:</span> Enjoy seamless service with warranties and dedicated customer care.</li>
          </ul>
          <p className="text-gray-300">
            For years, Panjab Electronics has been a trusted name in the community, known for our unwavering dedication to excellence. Whether you’re upgrading your home or looking for a single appliance, we’re here to provide you with the perfect solution.<br /><br />
            Visit us in-store or shop online to discover the difference Panjab Electronics can make in your life. Your satisfaction is our priority!
          </p>
        </div>
      </section>
    </div>
  )
}

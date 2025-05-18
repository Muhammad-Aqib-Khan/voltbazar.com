import FirstBody from "../(components)/firstBody";

import Image from "next/image";
export default function Contact() {
  return (
    <>
      <div>
        {/* first Body which you can say the content below the header is  */}
        <FirstBody title="Contact" backgroundImage="/contact-us.jpg" />
      </div>

      {/* Responsive Paragraph */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <p className="text-lg text-gray-700 text-center">
          At VoltBazar! we’re here to assist you every step of the way! Whether you have a question about our products, need help with an order, or want expert advice on selecting the perfect electronic appliance, our team is ready to help.
        </p>
      </div>

      {/* Responsive Cards */}
      <div className="max-w-5xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
        {/* Card 1 */}
        <div className="flex-1 bg-blue-200 border-t-4 border-blue-600 shadow rounded-lg p-6 transition-transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-700 text-center">Get in Touch</h3>
          <p className="mb-1"><span className="font-medium">Address:</span> Sarwar colony near Muhammad bin Qasim school tandlianwala Faisalabad</p>
          <p className="mb-1"><span className="font-medium">Phone:</span> +92 307 8865155</p>
          <p><span className="font-medium">Website:</span> PANJAB ELECTRONICS</p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-green-100 border-t-4 border-green-600 shadow rounded-lg p-6 transition-transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-700 text-center">Business Hours</h3>
          <p className="mb-1">Monday to Saturday: 9:00 AM – 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-yellow-100 border-t-4 border-yellow-500 shadow rounded-lg p-6 transition-transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-yellow-700 text-center">How Can We Help You?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Product Inquiries</li>
            <li>Order Assistance</li>
            <li>After-Sales Support</li>
            <li>Warranty and Repair Services</li>
          </ul>
        </div>
      </div>
    </>
  );
}

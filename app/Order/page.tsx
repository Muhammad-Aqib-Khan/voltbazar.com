// pages/book-order.tsx

import { NextPage } from "next";
import Head from "next/head";

const BookOrder: NextPage = () => {
  return (
    <>
      <Head>
        <title>Book Your Order</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-600 mb-6">
            Book Your Order Now
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                placeholder="Product you want to order"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
              <textarea
                placeholder="Any additional details"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookOrder;

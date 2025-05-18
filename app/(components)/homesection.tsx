import Link from "next/link";
import ProductCarousel from "./ProductCarousel";

export default function Homesection() {
  return (
    <div className=" px-4 sm:px-6 lg:px-8">
      {/* Main Banner with Background Image */}
      <section
        className="relative text-center py-12 md:py-24 rounded-lg mb-8 overflow-hidden"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Use inline style with rgba for transparency */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Upgrade Your Life With Cutting-Edge Electronics!
          </h1>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
            Dizs were the largest electronics in these globe fields. From cutting-edge gadgets to everyday scientists, we bring you a lot of power and style. Shop now 102 smart re-acamies living.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Explore More Section with Background */}
      <section
        className="relative p-6 rounded-lg mb-8 min-h-[200px] flex items-center"
        style={{
          backgroundImage: "url('/matres.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-semibold text-white">Immerse Yourself In Bed: Exclusive Mattress Deals Await!</h2>
            <button className="bg-red-300 text-white px-6 py-2 rounded-full whitespace-nowrap hover:bg-gray-800 transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>
      <ProductCarousel />



      {/* Deal of the Day with Background */}
      <section
        className="relative text-center p-8 mb-8 rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/images/deal-of-day.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 "></div>
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-2 text-white">Deal Of The Day</h3>
          <p className="text-gray-200">Today: Special Place: Dear Man, Our You Only To Who!</p>
          <button className="mt-4 bg-blue-900 border-2 text-white px-6 py-2 rounded-full whitespace-nowrap hover:bg-gray-800 transition-colors">
            <Link href="/products" className="text-white"  >
              Book your Order Now
            </Link>
          </button>
        </div>
      </section>

 {/* Products Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
  {/* Refrigerator Card */}
  <div
    className="relative border rounded-lg p-6 min-h-[350px] flex flex-col justify-end overflow-hidden"
    style={{
      backgroundImage: "url('/double.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div
      className="absolute inset-0"
      style={{ backgroundColor: "rgba(46, 48, 49, 0.4)" }} // LightBlue overlay
    ></div>

    <span className="absolute top-2 right-2 bg-red-100 text-red-800 px-2 py-1 rounded text-sm z-10">
      Out of stock
    </span>
    <div className="relative z-10">
      <h4 className="font-bold text-lg mb-2 text-white">Darkness 9THF Avants</h4>
      <p className="text-white">New Ruby Red Double Door Refrigerator</p>
    </div>
  </div>

  {/* Dual Sense Card */}
  <div
    className="relative border rounded-lg p-6 min-h-[350px] flex flex-col justify-end overflow-hidden"
    style={{
      backgroundImage: "url('/playstation.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div
      className="absolute inset-0 bg-gray-900"
      style={{ backgroundColor: "rgba(27, 30, 32, 0.4)" }}
    ></div>

    <div className="relative z-10">
      <h4 className="font-bold text-lg mb-2 text-white">New Dual Sense Canada</h4>
      <p className="text-gray-200">Unsubscribe Available</p>
    </div>
  </div>
</div>
    </div>



  );
}
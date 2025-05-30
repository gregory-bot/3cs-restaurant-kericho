export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max500/674703075.jpg?k=a900cd48f58d99423a25a56313e767b1e0056ec53d94044b80784b80e0e15965&o="
              alt="About 3Cs Golf View Resort"
              className="rounded-lg shadow-lg w-full h-64 object-cover" // reduced height from h-[500px] to h-64
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
              3Cs Golf View Resort offers a tranquil escape nestled in the beautiful surroundings of Kericho, Kenya. Designed for both relaxation and recreation, the resort features spacious accommodations with stunning views of the golf course, modern amenities, and warm hospitality. Whether you're visiting for business or leisure, our resort provides a peaceful atmosphere complemented by easy access to local attractions and excellent dining options. Experience comfort, convenience, and authentic Kenyan charm all in one place.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary-600">150+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary-600">50K+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
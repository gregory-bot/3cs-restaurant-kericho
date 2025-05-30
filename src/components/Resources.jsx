import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Resources() {
  const carouselImages1 = [
    "https://cf.bstatic.com/xdata/images/hotel/max500/674703075.jpg?k=a900cd48f58d99423a25a56313e767b1e0056ec53d94044b80784b80e0e15965&o=",
    "https://i.postimg.cc/RFHggcYG/wera.jpg",
  ];

  const carouselImages2 = [
    "https://i.postimg.cc/nz3hwDQj/rewa.jpg",
    "https://i.postimg.cc/rs9WF4G9/baber.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500, // Smooth transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Relaxed autoplay interval
    fade: true, // Enable fade effect
    arrows: false, // Hide arrows for minimal design
  };

  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Resources</h2>
          <p className="mt-4 text-xl text-gray-600">
             Learn more about our conference rooms, gourmet foods, refreshments, and guest amenities to elevate your stay
          </p>
        </div>

        <div className="space-y-12">
          {/* Resource Card 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Slider {...settings}>
                {carouselImages1.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Shipping Guide ${index + 1}`}
                    className="rounded-lg shadow-lg w-full h-64 object-cover transition-opacity duration-1000"
                  />
                ))}
              </Slider>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Guest Services Overview
              </h3>
              <p className="text-gray-600">
  Discover all that 3cs Golf View Resort has to offer — from elegant conference rooms equipped for business meetings and retreats, to our diverse gourmet dining options and refreshing beverage selections. Whether you're here to relax, dine, or host an event, this guide provides an in-depth look at the exceptional amenities available during your stay.
              </p>
            </div>
          </div>

          {/* Resource Card 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <Slider {...settings}>
                {carouselImages2.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Industry Insights ${index + 1}`}
                    className="rounded-lg shadow-lg w-full h-64 object-cover transition-opacity duration-1000"
                  />
                ))}
              </Slider>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Industry Insights and Trends
              </h3>
              <p className="text-gray-600">
                  Immerse yourself in a tranquil getaway surrounded by breathtaking nature. 3cs Golf View Resort provides world-class facilities, relaxing Kilindini Barbershop treatment, and exciting recreational activities to refresh your body and mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

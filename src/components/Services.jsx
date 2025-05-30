import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Luxury Accommodation',
    description: 'Comfortable rooms with private bathrooms, flat-screen TVs, and scenic views.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/674703037.jpg?k=dff7292a379a06d572386ca23e0ce0ecbd58d4f4b03ddc0a003a64b85177ef1c&o=&hp=1',
  },
  {
    id: 2,
    title: 'Golf Course Access',
    description: 'Enjoy nearby golfing at Kericho Golf Club — just a short walk away.',
    image: 'https://golftour.safaricom.co.ke/wp-content/uploads/2022/01/tours-kericho.jpg',
  },
  {
    id: 3,
    title: 'Kilindini Barbershop & Spa Access',
    description: 'Enjoy premium grooming and relaxation at Kilindini Barbershop & Spa.',
    video: 'https://streamable.com/u7wk81',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Bed and Breakfast',
    description: 'Start your morning right with our delicious breakfast options.',
    images: [
      'https://i.postimg.cc/DyDFFhcS/tity.jpg',
      'https://images.pexels.com/photos/1843244/pexels-photo-1843244.jpeg?auto=compress&cs=tinysrgb&w=600'

    ],
  },
  {
    id: 5,
    title: 'Room Service',
    description: 'Relax and dine in the comfort of your room with our attentive service.',
    image: 'https://i.postimg.cc/DyDFFhcS/tity.jpg',
  },
  {
    id: 6,
    title: 'Private Parking',
    description: 'Secure on-site parking available for a small fee.',
    image: 'https://goldenshades.co.ke/wp-content/uploads/2023/03/Car-Parking-Shades-Prices-in-Kenya-1024x768.jpeg',
  },
  {
    id: 7,
    title: 'Event Hosting,Conference and Business Rooms',
    description: 'Ideal for business meetings, retreats, or special occasions.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max500/674703070.jpg?k=2595b35bede2bb77de076e1b90bc0d880d3d5817e42566afaac633002187c84e&o=',
  },
  {
    id: 8,
    title: 'Pet-Friendly Environment',
    description: 'Bring your furry friends along — pets stay free!',
    image: 'https://i.pinimg.com/originals/22/b3/46/22b346e7066b5bf409d93f76f7b14226.jpg',
  },
{
    id: 9,
    title: 'Access to Think Twice Second Hand Clothes - Kericho',
    description: 'Enjoy convenient access to affordable and quality second hand clothes at Think Twice.',
    image: 'https://www.businessthisday.com/wp-content/uploads/2023/11/think-twice.jpg',
},
  {
    id: 10,
    title: 'Foods & Refreshment',
    description: 'Delicious meals, snacks, and drinks served throughout the day.',
    image: 'https://media.istockphoto.com/id/1440695432/photo/roasted-fish-served-on-a-white-plate-on-wooden-table-top.jpg?b=1&s=612x612&w=0&k=20&c=qtzAQHCN2_U22mJNu1XB1cU--LrjV0_g2YN7vFB32to=',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-2 text-lg font-bold text-gray-600">
            From gourmet dining and room service to relaxing garden spaces, we offer a range of amenities to make your stay unforgettable
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Handle two images for Bed and Breakfast */}
              {service.images ? (
                <div className="flex w-full h-32">
                  {service.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={service.title + ' ' + (idx + 1)}
                      className="w-1/2 h-full object-cover"
                    />
                  ))}
                </div>
              ) : service.video ? (
                service.video.includes('streamable.com') ? (
                  <div style={{
                    width: "100%",
                    height: "128px",
                    overflow: "hidden",
                    borderRadius: "0.5rem",
                    background: "#000",
                    display: "flex"
                  }}>
                    <iframe
                      allow="fullscreen;autoplay"
                      allowFullScreen
                      src={service.video.replace('/u7wk81', '/e/u7wk81') + '?autoplay=0'}
                      title={service.title}
                      width="100%"
                      height="100%"
                      style={{
                        border: "none",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                        background: "#000",
                        display: "block"
                      }}
                    ></iframe>
                  </div>
                ) : (
                  <video
                    src={service.video}
                    controls
                    poster={service.image}
                    className="w-full h-32 object-cover bg-black"
                    style={{ background: "#000" }}
                  />
                )
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-32 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
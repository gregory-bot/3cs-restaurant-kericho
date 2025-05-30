import { useState } from "react";

const services = [
  "Luxury Accommodation",
  "Golf Course Access",
  "Kilindini Barbershop & Spa Access",
  "Bed and Breakfast",
  "Room Service",
  "Private Parking",
  "Event Hosting",
  "Pet-Friendly Environment",
  "Relaxation & Garden Space",
  "Conference and Business Rooms",
  "Foods & Refreshments",
];

const rooms = [
  "Room 601", "Room 602", "Room 603", "Room 604", "Room 605",
  "Room 606", "Room 607", "Room 608", "Room 609", "Room 610"
];

// Add your external image URLs here
const roomImages = {
  "Room 601": "https://i.postimg.cc/63hpcPnB/bed.jpg",
  "Room 602": "https://i.postimg.cc/DyDFFhcS/tity.jpg",
  "Room 603": "https://pix10.agoda.net/hotelImages/546712/-1/9e1d22916039ddfd90208407771a913f.jpg",
  "Room 604": "https://media-cdn.tripadvisor.com/media/photo-s/07/ad/d5/db/hospedaje-komby.jpg",
  "Room 605": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ab/1f/ee/la-chambre.jpg?w=700&h=-1&s=1",
  "Room 606": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/674703037.jpg?k=dff7292a379a06d572386ca23e0ce0ecbd58d4f4b03ddc0a003a64b85177ef1c&o=",
  "Room 607": "https://tse1.mm.bing.net/th/id/OIP.ugCw-uwOmTpkmzOzL1A9kwHaFj?w=520&h=390&rs=1&pid=ImgDetMain",
  "Room 608": "https://www.indianholiday.com/pictures/hotel/hotelgalleryn/hotel-emerald-park-nashik-44198.jpg",
  "Room 609": "https://tripako.com/wp-content/uploads/2021/03/Family-Room.jpg",
  "Room 610": "https://th.bing.com/th/id/R.8ffa0f6b39774ad7a23c5ebeb36bc8ec?rik=zCEm%2fDd6zVrq2A&riu=http%3a%2f%2fwww.phangan.info%2ffiles%2fphotographs%2f3126.jpg&ehk=%2fTJbuPALjmcTVwAPCl4r8TI98AkdSrKB7t3h%2bLOtNWQ%3d&risl=&pid=ImgRaw&r=0",
};

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    room: "",
    people: 1,
    checkin: "",
    checkout: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "254791610865";
    const message = `Booking Request:
Name: ${form.name}
Email: ${form.email}
Service: ${form.service}
Room: ${form.room}
Number of People: ${form.people}
Check-in Date: ${form.checkin}
Check-out Date: ${form.checkout}
Preferred Time: ${form.time}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Book Service</h2>
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select a service</option>
              {services.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Room</label>
            <select
              name="room"
              value={form.room}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select a room</option>
              {rooms.map((r, i) => (
                <option key={i} value={r}>{r}</option>
              ))}
            </select>
            {form.room && roomImages[form.room] && (
              <div className="my-2 flex justify-center">
                <div
                  style={{
                    width: "120px",
                    height: "90px",
                    background: "#f3f3f3",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={roomImages[form.room]}
                    alt={form.room}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "0.5rem"
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Number of People</label>
            <input
              type="number"
              name="people"
              min="1"
              max="10"
              value={form.people}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Check-in Date</label>
            <input
              type="date"
              name="checkin"
              value={form.checkin}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Check-out Date</label>
            <input
              type="date"
              name="checkout"
              value={form.checkout}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Preferred Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded transition"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
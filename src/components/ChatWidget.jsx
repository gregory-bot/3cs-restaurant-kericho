import { useState } from 'react';

const BOT_TYPING_DELAY = 1200;

const responses = [
  // English
  {
    keywords: ['room booking', 'book room', 'reservation', 'chumba'],
    response: 'You can check room availability and book directly on our website anytime. Unaweza kuweka nafasi ya chumba kupitia tovuti yetu muda wowote.'
  },
  {
    keywords: ['spa', 'spa services', 'massage', 'masaji'],
    response: 'Our spa offers a variety of relaxing treatments. Visit our website for the full menu and booking. Spa yetu inatoa huduma mbalimbali za kupumzika.'
  },
  {
    keywords: ['golf', 'golf course', 'gofu'],
    response: 'Enjoy a round of golf with stunning views. Tee times can be reserved online. Furahia mchezo wa gofu na mandhari nzuri.'
  },
  {
    keywords: ['dining', 'food', 'chakula', 'restaurant', 'mgahawa'],
    response: 'Explore our dining options, including local and international cuisine, on our website. Angalia chaguzi zetu za chakula kwenye tovuti.'
  },
  {
    keywords: ['events', 'conference', 'mikutano', 'event', 'mkutano'],
    response: 'Host your events or conferences with us. Contact us online for packages and availability. Fanya mikutano yako nasi.'
  },
  {
    keywords: ['airport', 'shuttle', 'usafiri', 'transfer'],
    response: 'We provide airport shuttle services. Please book your transfer on our site in advance. Tunatoa huduma ya usafiri wa uwanja wa ndege.'
  },
  {
    keywords: ['swimming', 'pool', 'kuogelea', 'bwawa'],
    response: 'Our swimming pool is open daily. Check pool hours and rules on our website. Bwawa letu la kuogelea liko wazi kila siku.'
  },
  {
    keywords: ['fitness', 'gym', 'mazoezi', 'center'],
    response: 'Stay fit during your stay. Our fitness center details and access info are available online. Kituo chetu cha mazoezi kiko wazi.'
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'habari', 'salamu', 'mambo'],
    response: 'Hello! How can we assist you today? Habari! Tunawezaje kukusaidia leo?'
  },
  {
    keywords: ['services', 'what services', 'list of services', 'huduma', 'una huduma gani'],
    response: `We offer the following services:
- Room Booking and Reservations (Kuweka nafasi ya chumba)
- Spa and Wellness Treatments (Huduma za spa)
- Golf Course Access and Tee Time Booking (Uwanja wa gofu)
- On-site Dining and Catering (Chakula na vinywaji)
- Event Hosting and Conference Facilities (Mikutano na matukio)
- Airport Shuttle and Transportation (Usafiri wa uwanja wa ndege)
- Swimming Pool and Fitness Center Access (Bwawa la kuogelea na mazoezi)
- Guided Tours and Recreational Activities (Ziara na burudani)

Please visit our website for more details and to book any of these services.
Tafadhali tembelea tovuti yetu kwa maelezo zaidi na kuweka huduma.`,
  },
  {
    keywords: ['asante', 'thank you', 'thanks'],
    response: 'Karibu! You are welcome!'
  },
];

function getBotResponse(userInput) {
  const input = userInput.trim().toLowerCase();
  for (const entry of responses) {
    if (entry.keywords.some(keyword => input.includes(keyword))) {
      return entry.response;
    }
  }
  return 'Sorry, I did not understand that. Please visit our website for more information. Samahani, sikuelewa. Tafadhali tembelea tovuti yetu kwa maelezo zaidi.😊';
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [botTyping, setBotTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMsg = { text: newMessage, sender: 'user', timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setNewMessage('');
    setBotTyping(true);

    setTimeout(() => {
      let botResponse = '';
      if (messages.length === 0) {
        botResponse = "Hi, how are you? How can we help you? Habari, unaendeleaje? Tunawezaje kukusaidia?";
      } else {
        botResponse = getBotResponse(newMessage);
      }
      setMessages((prev) => [
        ...prev,
        { text: botResponse, sender: 'bot', timestamp: new Date() }
      ]);
      setBotTyping(false);
    }, BOT_TYPING_DELAY);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
        aria-label="Open chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-72 sm:w-80 bg-white rounded-lg shadow-xl z-50 transition-all duration-500">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">chat with us 😊</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-500"
              aria-label="Close chat"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="h-72 sm:h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {botTyping && (
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-lg p-3 bg-gray-100 flex items-center">
                  <span className="flex space-x-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-300"></span>
                  </span>
                  <span className="ml-2 text-green-600 text-xs">Typing...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center space-x-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 min-w-0 border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                disabled={botTyping}
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition duration-300 mt-2 sm:mt-0"
                disabled={botTyping}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
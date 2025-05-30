export default function Quote() {
  return (
    <section className="py-20 bg-yellow-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <svg
            className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-yellow-400 opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="relative">
            <p className="text-2xl font-medium">
              "Take only memories, leave only footprints😎."
            </p>
            <footer className="mt-4">
              <p className="text-base font-semibold">Chief Seattle</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

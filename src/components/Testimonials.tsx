export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content:
        "Finly has completely transformed how I manage my money. The insights are incredible and the interface is so intuitive. I've saved more in 3 months than I did all last year!",
      rating: 5,
      avatar: "👩‍🎨",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "As someone who loves data, the analytics in Finly are exactly what I needed. The AI suggestions are surprisingly accurate and have helped me optimize my spending habits.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      content:
        "Running a business means keeping track of multiple income streams. Finly makes it so easy to separate personal and business finances while giving me clear insights into both.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "David Thompson",
      role: "Student",
      content:
        "Being a student on a tight budget, Finly has been a lifesaver. The goal-setting feature keeps me motivated, and the reminders ensure I never miss important payments.",
      rating: 5,
      avatar: "👨‍🎓",
    },
    {
      name: "Lisa Wang",
      role: "Marketing Manager",
      content:
        "The security features give me peace of mind, and the beautiful design makes managing finances actually enjoyable. I recommend Finly to all my friends and family.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "James Wilson",
      role: "Retiree",
      content:
        "At my age, I need something simple but powerful. Finly strikes the perfect balance. The interface is easy to use, and the reports help me make informed decisions about my retirement savings.",
      rating: 5,
      avatar: "👨‍🦳",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Users Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of users who have transformed their financial lives
            with Finly.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to join thousands of satisfied users?
          </p>
          <a
            href="https://apps.apple.com/us/app/budget-tracker-finance-finly/id6747941491"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download Finly Now
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Dumbbell,
  Users,
  Trophy,
  Calendar,
  Clock,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Play,
  CheckCircle,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const trainers = [
    {
      name: "John Smith",
      role: "Head Trainer",
      specialty: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
      socials: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      specialty: "Flexibility & Mindfulness",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80",
      socials: { instagram: "#", twitter: "#", facebook: "#" }
    },
    {
      name: "Mike Chen",
      role: "Fitness Coach",
      specialty: "Weight Loss Expert",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80",
      socials: { instagram: "#", twitter: "#", facebook: "#" }
    }
  ];

  const programs = [
    {
      title: "Weight Loss",
      description: "Personalized programs to help you achieve your ideal weight",
      icon: <Dumbbell className="h-8 w-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Strength Training",
      description: "Build muscle and increase your strength with expert guidance",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Yoga & Flexibility",
      description: "Improve flexibility and find inner peace with our yoga classes",
      icon: <Heart className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "29",
      features: [
        "Access to gym equipment",
        "Basic fitness assessment",
        "2 group classes per week",
        "Locker room access"
      ]
    },
    {
      name: "Pro",
      price: "59",
      features: [
        "All Basic features",
        "Unlimited group classes",
        "1 personal training session/month",
        "Nutrition consultation"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "99",
      features: [
        "All Pro features",
        "4 personal training sessions/month",
        "Monthly body composition",
        "Premium app features"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Emily R.",
      image: "https://images.unsplash.com/photo-1579047440583-43a690fe2243?auto=format&fit=crop&w=300&q=80",
      quote: "Lost 30 pounds in 6 months! The trainers here are amazing.",
      rating: 5
    },
    {
      name: "David M.",
      image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?auto=format&fit=crop&w=300&q=80",
      quote: "Best decision I've ever made for my fitness journey.",
      rating: 5
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} dark-mode-transition`}>
      {/* Header */}
      <header className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md shadow-sm transition-colors`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">FitLife</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#programs" className="hover:text-red-500 transition-colors">Programs</a>
                <a href="#trainers" className="hover:text-red-500 transition-colors">Trainers</a>
                <a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a>
                <a href="#schedule" className="hover:text-red-500 transition-colors">Schedule</a>
              </nav>
              
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <a
                href="#join"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity pulse-glow"
              >
                Join Now
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-t`}>
            <div className="px-4 py-2 space-y-1">
              <a href="#programs" className="block py-2 hover:text-red-500 transition-colors">Programs</a>
              <a href="#trainers" className="block py-2 hover:text-red-500 transition-colors">Trainers</a>
              <a href="#pricing" className="block py-2 hover:text-red-500 transition-colors">Pricing</a>
              <a href="#schedule" className="block py-2 hover:text-red-500 transition-colors">Schedule</a>
              <a
                href="#join"
                className="block py-2 px-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-center font-semibold mt-4"
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/414800265.sd.mp4?s=1e3f82442fb60aa8c451a449c1d115c1f8b4f0c9&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Body,<br />Transform Your Life
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of fitness enthusiasts and achieve your goals with expert guidance
            and state-of-the-art facilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity pulse-glow"
            >
              Start Your Journey
            </a>
            <a
              href="#programs"
              className="flex items-center text-white border-2 border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Video
            </a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className={`bg-gradient-to-r ${program.color} p-3 rounded-lg w-fit mb-4`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  {program.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-red-500 font-semibold hover:text-red-600 transition-colors"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl overflow-hidden group`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
                    <p className="text-white/90">{trainer.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {trainer.specialty}
                  </p>
                  <div className="flex space-x-4">
                    {Object.entries(trainer.socials).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        {platform === 'instagram' && <Instagram className="h-5 w-5" />}
                        {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                        {platform === 'facebook' && <Facebook className="h-5 w-5" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg relative ${
                  plan.popular ? 'transform scale-105 border-2 border-red-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl text-sm font-semibold">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}>/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90'
                      : `${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} hover:bg-gray-200`
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                } rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join now and get 50% off your first month! Limited time offer.
          </p>
          <a
            href="#join"
            className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity pulse-glow"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Dumbbell className="h-8 w-8 text-red-500" />
                <span className="ml-2 text-xl font-bold">FitLife</span>
              </div>
              <p className="text-gray-400">
                Your journey to a healthier life starts here.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
                <li><a href="#trainers" className="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2" />
                  info@fitlife.com
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  123 Fitness Ave, Gym City
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FitLife. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
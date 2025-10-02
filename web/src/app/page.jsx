import { useState } from "react";
import { Star, MapPin, Phone, Clock, Users } from "lucide-react";

export default function HomePage() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [showMenuImages, setShowMenuImages] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Doro Wat",
      description:
        "Traditional Ethiopian chicken stew with berbere spice and hard-boiled eggs served with injera",
      price: "$18.95",
      image:
        "https://ucarecdn.com/97ecec69-34ac-440b-ac56-66f0e84e6f6a/-/format/auto/",
      category: "Meat Dishes",
    },
    {
      id: 2,
      name: "Kitfo",
      description:
        "Ethiopian-style steak tartare seasoned with mitmita and served with ayib cheese and injera",
      price: "$19.95",
      image:
        "https://ucarecdn.com/5d4a4a3a-bbad-49e3-aefc-c9df1fe5f895/-/format/auto/",
      category: "Meat Dishes",
    },
    {
      id: 3,
      name: "Beef Tibs",
      description:
        "Tender beef cubes sautéed with onions, peppers, and Ethiopian spices",
      price: "$17.95",
      image:
        "https://ucarecdn.com/f55eb360-d0c9-4982-9d57-4192f5c73d54/-/format/auto/",
      category: "Meat Dishes",
    },
    {
      id: 4,
      name: "Awaze Tibs",
      description: "Beef cubes sautéed with awaze sauce, onions, and jalapeños",
      price: "$18.95",
      image:
        "https://ucarecdn.com/60a46e15-5599-413e-b412-d7675992f3df/-/format/auto/",
      category: "Meat Dishes",
    },
    {
      id: 5,
      name: "Lamb Tibs",
      description:
        "Tender lamb pieces sautéed with onions, peppers, and rosemary",
      price: "$19.95",
      image:
        "https://ucarecdn.com/50006df1-c570-4147-b999-68b8ae5707a5/-/format/auto/",
      category: "Meat Dishes",
    },
    {
      id: 6,
      name: "Shiro Wat",
      description:
        "Ground chickpea stew seasoned with berbere and Ethiopian spices",
      price: "$14.95",
      image:
        "https://ucarecdn.com/8ba58d1c-b6b7-4a4b-ac0e-f70b75f275bf/-/format/auto/",
      category: "Vegetarian",
    },
    {
      id: 7,
      name: "Vegetarian Combination",
      description:
        "Selection of vegetarian dishes including lentils, cabbage, collard greens, and salad on injera",
      price: "$16.95",
      image:
        "https://ucarecdn.com/e3a108d5-e554-4c2a-adbf-22cac685628e/-/format/auto/",
      category: "Vegetarian",
    },
    {
      id: 8,
      name: "Meat Combination",
      description:
        "Assortment of meat dishes including doro wat, beef tibs, and kitfo served on injera",
      price: "$21.95",
      image:
        "https://ucarecdn.com/cdaf959a-9433-4ef7-9b80-c90ca6ac161d/-/format/auto/",
      category: "Combination Plates",
    },
    {
      id: 12,
      name: "Ethiopian Coffee",
      description: "Traditional coffee ceremony with freshly roasted beans",
      price: "$5.95",
      image:
        "https://ucarecdn.com/ca22b178-7946-41b5-8a4b-4b713874603c/-/format/auto/",
      category: "Beverages",
    },
    {
      id: 13,
      name: "Sambusa",
      description:
        "Crispy pastry filled with lentils or meat, served with awaze sauce",
      price: "$7.95",
      image:
        "https://ucarecdn.com/7b6594a2-c1e8-4362-8cf1-bc1bb4654c4e/-/format/auto/",
      category: "Appetizers",
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Authentic Ethiopian flavors! The doro wat was incredible and the injera was perfect.",
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment:
        "Amazing experience! The staff explained each dish and the coffee ceremony was beautiful.",
      date: "1 month ago",
    },
    {
      name: "Aisha Patel",
      rating: 4,
      comment:
        "Great vegetarian options and wonderful atmosphere. Will definitely come back!",
      date: "3 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold font-serif">
                Sekela Ethiopia Restaurant
              </h1>
              <p className="text-red-200 mt-1">
                Authentic Ethiopian Cuisine in Riverside
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 text-lg">
              <a
                href="#menu"
                className="hover:text-yellow-300 transition-colors"
              >
                Menu
              </a>
              <a
                href="#about"
                className="hover:text-yellow-300 transition-colors"
              >
                About
              </a>
              <a
                href="#reviews"
                className="hover:text-yellow-300 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="hover:text-yellow-300 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://ucarecdn.com/19adbc40-3717-4518-ade4-63d57ca7e255/-/format/auto/"
            alt="Sekela Ethiopia Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative text-center px-4 max-w-4xl z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            Welcome to Sekela
          </h2>
          <p className="text-white mt-1">
            Experience authentic Ethiopian flavors in the heart of Riverside
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setShowMenuImages(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Sekela Ethiopia Restaurant brings the authentic taste of
                Ethiopia to Riverside, California. Our family recipes have been
                passed down through generations, using traditional spices and
                cooking methods to create an unforgettable dining experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                From our signature combination platters to our aromatic coffee
                ceremony, every dish tells a story of Ethiopian culture and
                hospitality. We invite you to join our family and discover the
                warmth of Ethiopian cuisine.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-600" />
                  <span>Family Owned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Authentic Recipes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://ucarecdn.com/a6d6dbb3-6dc4-46b7-95fb-ccaac714c73c/-/format/auto/"
                alt="Sekela Ethiopia Restaurant interior"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Menu
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedDish(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <span className="text-lg font-bold text-red-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {review.date}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <p className="font-semibold text-gray-800">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-red-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Visit Us</h3>
          <div className="max-w-lg mx-auto">
            <div>
              <h4 className="text-xl font-semibold mb-6">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-300" />
                  <span>12702 Magnolia Ave Unit 22, Riverside, CA 92503</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-300" />
                  <span>(951) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-300" />
                  <div>
                    <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold font-serif mb-2">
            Sekela Ethiopia Restaurant
          </h4>
          <p className="text-gray-400 mb-4">
            Authentic Ethiopian cuisine in Riverside since 1995
          </p>
          <div className="mb-4">
            <a
              href="https://www.yelp.com/biz/sekela-ethiopia-restaurant-riverside"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400 transition-colors"
            >
              Find us on Yelp
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Sekela Ethiopia Restaurant. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Menu Images Modal */}
      {showMenuImages && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              <button
                onClick={() => setShowMenuImages(false)}
                className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 shadow-lg hover:bg-gray-200"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Our Menu
              </h3>
              <div className="space-y-6">
                <img
                  src="https://ucarecdn.com/7ad8117f-eaeb-4e6a-9ae2-fb0e7066e73c/-/format/auto/"
                  alt="Breakfast Menu"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="https://ucarecdn.com/f6e74404-db0a-450e-898f-d1b93dbaec7f/-/format/auto/"
                  alt="Lunch Menu 1"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="https://ucarecdn.com/468fbd6a-ca5d-4410-a587-bd654d4bf641/-/format/auto/"
                  alt="Lunch Menu 2"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="https://ucarecdn.com/345e159b-1a79-48ba-9700-c82f2167ae4b/-/format/auto/"
                  alt="Breakfast Menu 2"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for dish details */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-gray-800">
                  {selectedDish.name}
                </h4>
                <span className="text-xl font-bold text-red-600">
                  {selectedDish.price}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{selectedDish.description}</p>
              <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full mb-4">
                {selectedDish.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

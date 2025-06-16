import { Link } from "react-router";

const tutorials = [
  {
    id: 1,
    title: "Master English Speaking",
    description: "Improve your fluency and confidence with daily practice tips.",
    thumbnail: "/tutorials/english-speaking.jpg",
  },
  {
    id: 2,
    title: "Basic Spanish Grammar",
    description: "Learn foundational Spanish grammar rules in this tutorial.",
    thumbnail: "/tutorials/spanish-grammar.jpg",
  },
  {
    id: 3,
    title: "Arabic for Beginners",
    description: "Start your Arabic journey with common words and expressions.",
    thumbnail: "/tutorials/arabic-basics.jpg",
  },
  {
    id: 4,
    title: "IELTS Writing Strategies",
    description: "Get tips to ace the IELTS writing task with real examples.",
    thumbnail: "/tutorials/ielts-writing.jpg",
  },
];

const PopularTutorials = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Popular Tutorials</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tutorials.map((tutorial) => (
          <Link
            to={`/tutorials/${tutorial.id}`}
            key={tutorial.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
          >
            <img
              src={tutorial.thumbnail}
              alt={tutorial.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tutorial.description}</p>
              <span className="inline-block text-blue-600 font-medium hover:underline">
                Watch Now →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularTutorials;

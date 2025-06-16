import { Link } from "react-router";

const categories = [
  { id: 1, title: "English", logo: "English" },
  { id: 2, title: "Spanish", logo: "Español" },
  { id: 3, title: "French", logo: "Français" },
  { id: 4, title: "German", logo: "Deutsch" },
  { id: 5, title: "Chinese", logo: "中国人" },
  { id: 6, title: "Arabic", logo: "عربي" },
  { id: 7, title: "Japanese", logo: "日本語" },
  { id: 8, title: "Hindi", logo: "हिंदी" },
  { id: 9, title: "Russian", logo: "Русский" },
];

const LanguageCategories = () => {
  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Language Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            to="/find-tutors"
            key={category.id}
            className="border bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <p>{category.logo}</p>
              <span className="font-medium text-gray-800">{category.title}</span>
            </div>
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LanguageCategories;

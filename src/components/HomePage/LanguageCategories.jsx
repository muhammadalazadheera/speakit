import { Link } from "react-router";
import TitleText from "../TitleText";
import { Fade } from "react-awesome-reveal";

const categories = [
  { id: 1, title: "English", logo: "English", delay: "60" },
  { id: 2, title: "Spanish", logo: "Español", delay: "50" },
  { id: 3, title: "French", logo: "Français", delay: "20" },
  { id: 4, title: "German", logo: "Deutsch", delay: "30" },
  { id: 5, title: "Chinese", logo: "中国人", delay: "50" },
  { id: 6, title: "Arabic", logo: "عربي", delay: "30" },
  { id: 7, title: "Japanese", logo: "日本語", delay: "40" },
  { id: 8, title: "Hindi", logo: "हिंदी", delay: "20" },
  { id: 9, title: "Russian", logo: "Русский", delay: "10" },
];

const logoColor = ["#2B7FFF", "#00C951", "#F0B100", "#AD46FF"];

const LanguageCategories = () => {
  return (
    <section className="p-6 md:w-[85%] mx-auto">
      <TitleText
        title="Languages"
        subtitle="Select Your Desired Language"
      ></TitleText>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {categories.map((category) => {
          const randomColor = logoColor[Math.floor(Math.random() * logoColor.length)];
          return (<Fade delay={category.delay} key={category.id}>
            <Link
              to={`/tutorial-by-language/${category.title}`}
              
              className="border bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <p style={{ color: randomColor }}>{category.logo}</p>
                <span className="font-medium text-gray-800">
                  {category.title}
                </span>
              </div>
              <i className="fas fa-chevron-circle-right"></i>
            </Link>
          </Fade>)
        })}
      </div>
    </section>
  );
};

export default LanguageCategories;

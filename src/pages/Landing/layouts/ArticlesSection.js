import article from "../../../assets/mock-server/dbArticles.json";
import Heading from "../../../components/Heading";

const ArticlesSection = () => {
  return (
    <div className="flex flex-col p-3 lg:px-6 xl:px-16 " id="articles">
      <div>
        <Heading size="base" tag="h2" className="text-primary pt-8 mb-8">
          Articles
        </Heading>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        {article.map((item) => (
          <div className="w-2/5 h-96 mx-8 mb-11 relative" key={item.id}>
            <div
              className="absolute inset-0 bg-cover bg-center z-0 object-contain"
              style={{ backgroundImage: `url(${item.coverImg})` }}
            ></div>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-20 flex flex-col justify-between items-center text-2xl text-white font-semibold">
              <div className="self-end p-3">{item.date}</div>
              <div className="self-start p-3">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;

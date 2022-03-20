import router from "next/router";
import { useRouter } from "next/router";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  return (
    <>
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">

          {articles.map((article, index) => {
            if (
              article.title &&
              article.description &&
              article.urlToImage &&
              article.url
            ) {
              return (
                <div key={index} className="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 bg-white  border-opacity-60 rounded-lg overflow-hidden ">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={article.urlToImage} alt="blog" />
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{article.publishedAt}</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{article.title}</h1>
              <p class="leading-relaxed mb-3">{article.description}</p>
              <div class="flex items-center flex-wrap ">
                <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0" href={article.url}>Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>

              </div>
            </div>
          </div>
                </div>
              );
            }
          })}
        
        </div>
      </div>
      <div className="w-full inline-flex justify-center items-center mb-6">
          <div
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => {
              if (pageNumber > 1) {
                router.push(`/feed/${pageNumber - 1}`);
              }
            }}
          >
            Previous Page
          </div>

          <div className="p-2 bg-gray-400">{pageNumber}</div>

          <div
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={() => {
              if (pageNumber < 5) {
                router
                  .push(`/feed/${pageNumber + 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next Page
          </div>
          </div>
    </section>


      {/* Paginator */}
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  // Getting page number
  const pageNumber = pageContext.query.pageID;

  //   Checking if page number exists and limits
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  // Fetching Data
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&page=${pageNumber}`,
    {
      headers: {
        Authorization: "ae12b258a7ce4f5b9698c93198d0d34d",
      },
    }
  );

  //   const api
  const newsData = await apiResponse.json();

  //   Destructuring Received Data
  const { articles } = newsData;

  //   Return
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;

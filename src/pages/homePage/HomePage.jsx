import { DataHomePage } from "./homepageData";
import "./HomePage.css";
import ChartComponent from "../../componentes/chart/Charts";
const HomePage = () => {
  return (
    <div className="home">

      <div className="mx-auto max-w-screen-xl  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <dl className="mg-6 grid grid-cols-1 gap-10   sm:mt-8 sm:grid-cols-2  lg:grid-cols-4">
          {DataHomePage.map((data) => (
            <div className="flex flex-col px-4 py-8 text-center card">
              <dt className="order-last text-lg font-medium text-gray-500">
                {data.title}
              </dt>

              <dd className="text-4xl font-extrabold card-text  md:text-5xl">
                {data.number}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex flex-col ml-12 px-4 py-8 -z-30 text-center card-chart ">
        <ChartComponent />
      </div>
    </div>
  );
};

export default HomePage;

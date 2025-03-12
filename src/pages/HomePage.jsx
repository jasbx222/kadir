import { Download, Headset, Pickaxe, WalletCards } from "lucide-react";
import "./HomePage.css";
import ChartComponent from "../componentes/chart/Charts";
const HomePage = () => {
  return (
    <div className="home">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 ml-5 sm:py-12 lg:px-8">
        <dl className="mg-6 grid grid-cols-1 gap-10   sm:mt-8 sm:grid-cols-2  lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center card">
            <WalletCards
              color="#8884d8"
              size={40}
              strokeWidth={3}
              className="mb-2 "
            />
            <dt className="order-last text-lg font-medium text-gray-500">
              اجمالي الطلبات
            </dt>

            <dd className="text-4xl font-extrabold card-text  md:text-5xl">
              1k
            </dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center card">
            <Pickaxe
              size={40}
              color="#8884d8"
              strokeWidth={3}
              className="mb-2"
            />
            <dt className="order-last text-lg font-medium text-gray-500">
              {" "}
              عدد الحرفين
            </dt>

            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              24
            </dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center card">
            <Headset
              size={40}
              color="#8884d8"
              strokeWidth={3}
              className="mb-2"
            />

            <dt className="order-last text-lg font-medium text-gray-500">
              اجمالي الاتصالات
            </dt>

            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              86
            </dd>
          </div>

          <div className="flex flex-col px-4 py-8 text-center card ">
            <Download
              size={40}
              color="#8884d8"
              strokeWidth={3}
              className="mb-2"
            />
            <dt className="order-last text-lg font-medium text-gray-500">
              التنزيلات
            </dt>

            <dd className="text-4xl font-extrabold card-text md:text-5xl">
              86k
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-col px-4 py-8 -z-30 text-center card-chart ">
        <ChartComponent />
      </div>
    </div>
  );
};

export default HomePage;

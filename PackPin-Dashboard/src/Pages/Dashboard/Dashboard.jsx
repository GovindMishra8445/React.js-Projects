import DashboardBoxes from "../../Components/DashboardBoxes/DashboardBoxes";
import { GrView } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <DashboardBoxes />
      <div className="card my-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h1 className="text-[20px] font-[600]">Recent Order</h1>
        </div>
        <div className="card shadow-md sm:rounded-lg bg-white">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    S.No.
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Category Name
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Sub Category Name
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Product Name
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Product Image
                  </th>
                  <th scope="col" className="px-4 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr
                    key={item}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item}
                    </th>
                    <td className="px-4 py-2">Example</td>
                    <td className="px-4 py-2">Example</td>
                    <td className="px-4 py-2">$XXX</td>
                    <td className="px-4 py-2 img !w-[20px] !h-[20px] rounded-md overflow-hidden group">
                      <img
                        src="/src/assets/Dashboard-Icons.png"
                        className="w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                        alt="Product Icon"
                      />
                    </td>
                    <td className="px-4 py-2 flex flex-row gap-2">
                      <div className="flex items-center gap-1">
                        <Tooltip title="View Product Details" placement="top">
                          <span>
                            <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)] !min-w-[30px]">
                              <GrView />
                            </Button>
                          </span>
                        </Tooltip>
                        <Tooltip
                          title="Update Product Details"
                          placement="top-start"
                        >
                          <span>
                            <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)] !min-w-[30px]">
                              <RxUpdate />
                            </Button>
                          </span>
                        </Tooltip>
                        <Tooltip
                          title="Delate Product Details"
                          placement="top-start"
                        >
                          <span>
                            <Button className="!w-[20px] !h-[20px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.2)] !min-w-[30px]">
                              <RiDeleteBinLine />
                            </Button>
                          </span>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import {useEffect} from "react"
import {
    Lucide,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownContent,
    DropdownItem,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  } from "@/base-components";
  import StackedBarChart1 from "@/components/stacked-bar-chart-1/Main";
  import SimpleLineChart from "@/components/simple-line-chart/Main";
  import SimpleLineChart1 from "@/components/simple-line-chart-1/Main";
  import SimpleLineChart2 from "@/components/simple-line-chart-2/Main";
  import { faker as $f } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoal } from "../redux/slices/goalSlice";
import { amountFormat } from "../utils/format";

const Goal = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoal());
  }, []);

  const data = useSelector((state) => state.goal);
  const goal = data?.goal?.data?.data[0]
  console.log(goal);

    return (
        <>
        <div className="intro-y flex items-center mt-8">
          <h2 className="text-lg font-medium mr-auto">Profile Layout</h2>
        </div>
        <TabGroup>
          {/* BEGIN: Profile Info */}
          <div className="intro-y box px-5 pt-5 mt-5">
            <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
              <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={goal?.property?.photo}
                  />
                </div>
                <div className="ml-5">
                  <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                  {goal?.property?.name}
                  </div>
                  <div className="text-slate-500">{goal?.property?.area}</div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                <div className="font-medium text-center lg:text-left lg:mt-3 text-success">
                <b>{goal?.property?.name} Summary</b>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                  <div className="truncate sm:whitespace-normal flex items-center">
                    <b>Title: &nbsp; &nbsp;</b> {goal?.property?.title}
                  </div>

                  <div className="truncate sm:whitespace-normal flex items-center mt-4">
                    <b>Current Price: &nbsp; &nbsp;</b> &#8358;{amountFormat(goal?.property?.currentPricePerUnit)}/Unit
                  </div>

                  <div className="truncate sm:whitespace-normal flex items-center mt-4">
                    <b>Plan Number: &nbsp; &nbsp;</b> LS/D/LA2934
                  </div>
                  
                </div>
              </div>
              <div className="mt-6 lg:mt-0 flex-1 px-5  border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
                <div className="font-medium text-center lg:text-left lg:mt-3 mb-3 text-success">
                  <b>Goal Summary</b>
                </div>
                <div className="truncate sm:whitespace-normal flex items-center">
                    <b>Goal Units: &nbsp; &nbsp;</b> {goal?.goalUnits} Units
                  </div>

                  <div className="truncate sm:whitespace-normal flex items-center mt-4">
                    <b>Total Purchase: &nbsp; &nbsp;</b> 
                  </div>

                  <div className="truncate sm:whitespace-normal flex items-center mt-4">
                    <b>Goal Duration: &nbsp; &nbsp;</b> {goal?.goalDuration} Months
                  </div>
              </div>
            </div>
            <TabList className="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center">
              <Tab fullWidth={false} className="py-4 cursor-pointer">
                Payments
              </Tab>
              <Tab fullWidth={false} className="py-4 cursor-pointer">
                Price Change
              </Tab>
             
            </TabList>
          </div>
          {/* END: Profile Info */}
          <TabPanels className="intro-y mt-5">
            <TabPanel>
              <div className="grid grid-cols-12 gap-6">
                {/* BEGIN: Top Categories */}
                <div className="intro-y box col-span-12 lg:col-span-6">
                  <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto">
                      Top Categories
                    </h2>
                    <Dropdown className="ml-auto">
                      <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                            Category
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Settings" className="w-4 h-4 mr-2" />
                            Settings
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-col sm:flex-row">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Wordpress Template
                        </a>
                        <div className="text-slate-500 mt-1">
                          HTML, PHP, Mysql
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                          <SimpleLineChart height={30} />
                        </div>
                        <div className="text-center">
                          <div className="font-medium">6.5k</div>
                          <div className="bg-success/20 text-success rounded px-2 mt-1.5">
                            +150
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-5">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Bootstrap HTML Template
                        </a>
                        <div className="text-slate-500 mt-1">
                          HTML, PHP, Mysql
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                          <SimpleLineChart height={30} />
                        </div>
                        <div className="text-center">
                          <div className="font-medium">2.5k</div>
                          <div className="bg-pending/10 text-pending rounded px-2 mt-1.5">
                            +150
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-5">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Tailwind HTML Template
                        </a>
                        <div className="text-slate-500 mt-1">
                          HTML, PHP, Mysql
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                          <SimpleLineChart height={30} />
                        </div>
                        <div className="text-center">
                          <div className="font-medium">3.4k</div>
                          <div className="bg-primary/10 text-primary rounded px-2 mt-1.5">
                            +150
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END: Top Categories */}
                {/* BEGIN: Work In Progress */}
                <TabGroup className="intro-y box col-span-12 lg:col-span-6">
                  <div className="flex items-center px-5 py-5 sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto">
                      Work In Progress
                    </h2>
                    <Dropdown className="ml-auto sm:hidden">
                      <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent tag="div">
                          <TabList className="block">
                            <Tab
                              fullWidth={false}
                              className="dropdown-item cursor-pointer"
                            >
                              New
                            </Tab>
                            <Tab
                              fullWidth={false}
                              className="dropdown-item cursor-pointer"
                            >
                              Last Week
                            </Tab>
                          </TabList>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                    <TabList className="nav-link-tabs w-auto ml-auto hidden sm:flex">
                      <Tab fullWidth={false} className="py-5 cursor-pointer">
                        New
                      </Tab>
                      <Tab fullWidth={false} className="py-5 cursor-pointer">
                        Last Week
                      </Tab>
                    </TabList>
                  </div>
                  {/* <div className="p-5">
                    <TabPanels>
                      <TabPanel>
                        <div>
                          <div className="flex">
                            <div className="mr-auto">Pending Tasks</div>
                            <div>20%</div>
                          </div>
                          <div className="progress h-1 mt-2">
                            <div
                              className="progress-bar w-1/2 bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="mt-5">
                          <div className="flex">
                            <div className="mr-auto">Completed Tasks</div>
                            <div>2 / 20</div>
                          </div>
                          <div className="progress h-1 mt-2">
                            <div
                              className="progress-bar w-1/4 bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="mt-5">
                          <div className="flex">
                            <div className="mr-auto">Tasks In Progress</div>
                            <div>42</div>
                          </div>
                          <div className="progress h-1 mt-2">
                            <div
                              className="progress-bar w-3/4 bg-primary"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <a
                          href=""
                          className="btn btn-secondary block w-40 mx-auto mt-5"
                        >
                          View More Details
                        </a>
                      </TabPanel>
                    </TabPanels>
                  </div> */}
                </TabGroup>
               
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </>
    );
};

export default Goal;
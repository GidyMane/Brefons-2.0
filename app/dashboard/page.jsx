import React from 'react';
import ActivitiesCard from "../ui/ActivitiesCard";
import ProgressCard from "../ui/ProgressCard";
import TopCardNavigation from "../ui/TopCardNavigation";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.main}>
        <div className='w-full mt-2 '>
        <TopCardNavigation />
        </div>

        {/* CARDS AND CHARTS DIV */}
        <div className='md:grid grid-cols-2 w-full gap-4'>
          <div className={`md:grid grid-cols-3 gap-4 col-span-1`}>
            <Card title="Water pans Constructed" content="27/28" />
            <Card title="Boreholes constructed" content="21/28" />
            <Card title="Shallow wells constructed" content="19/28" />
            <Card title="Water Harvesting structures Developed" content="64%" />
            <Card title="Micro-irrigation Schemes" content="86%" />
            <Card title="No of Rural markets" content="+34%" />
          </div>
          <div className='col-span-1'>
            <Chart />
          </div>
        </div>
        {/* <div>
          <Transactions />
        </div> */}
        {/* <div className={styles.side}>
          <Rightbar />
        </div> */}
        <div className="w-full flex flex-col gap-4">
          
          <ProgressCard />
        </div>
        <div className="mt-4 w-full">
          <ActivitiesCard />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

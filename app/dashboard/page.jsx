import React from 'react';
import ActivitiesCard from "../ui/ActivitiesCard";
import ProgressCard from "../ui/ProgressCard";
import TopCardNavigation from "../ui/TopCardNavigation";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* <Card title="Water pans Constructed/Rehabilitated" content="27/28" />
          <Card title="Boreholes constructed/Rehabilitated" content="21/28" />
          <Card title="Shallow wells constructed/Rehabilitated" content="19/28" />
          <Card title="Water Harvesting structures Developed" content="64%" />
          <Card title="Micro-irrigation Schemes" content="86%" />
          <Card title="No of Rural markets" content="+34%" /> */}
        </div>
        <div>
          <Transactions />
        </div>
        
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
      <div className="w-full flex flex-col gap-4">
        <TopCardNavigation />
        <ProgressCard/>
      </div>
      <div className="mt-4 w-full">
        <ActivitiesCard />
      </div>
    </div>
  );
};

export default Dashboard;

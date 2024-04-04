import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdEvent,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,

} from "react-icons/md";
// import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "BREFONS",
    list: [
      {
        title: "Reports",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Technical Prameters",
        path: "/dashboard/technicalparameters",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Operational Parameters",
        path: "/dashboard/operationalparameters",
        icon: <MdShoppingBag />,
      },
      {
        title: "Activities",
        path: "/dashboard/activities",
        icon: <MdEvent />,
      },
    ],
  },
  {
    title: "Project Planning",
    list: [
        {
            title: "Annual Targets",
            path: "/dashboard/annualtargets",
            icon: <MdHelpCenter />,
          },
          
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      
    ],
  },
];

const Sidebar = async () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}></span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
             >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;

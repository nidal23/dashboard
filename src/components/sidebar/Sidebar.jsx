import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top"><span className="logo">notaidash</span></div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
        <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
        </li>
        <p className="title">LISTS</p>
        <li>
            <Person2OutlinedIcon className="icon"/>
            <span>Users</span>
        </li>

        <li>
            <ProductionQuantityLimitsIcon className="icon"/>
            <span>Products</span>
        </li>
        <li>
         <GradingOutlinedIcon className="icon"/>
            <span>Orders</span>
        </li>
        <li>
            <LocalShippingOutlinedIcon className="icon"/>
            <span>Delivery</span>
        </li>
        <p className="title">USEFUL</p>
        <li>
            <BarChartOutlinedIcon className="icon"/>
            <span>Stats</span>
        </li>
        <li>
            <NotificationsOutlinedIcon className="icon"/>
            <span>Notifiactions</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
            <HealthAndSafetyOutlinedIcon className="icon"/>
            <span>System Health</span>
        </li>
        <li>
            <LibraryBooksOutlinedIcon className="icon"/>
            <span>Logs</span>
        </li>
        <li>
            <DisplaySettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
        </li>
        <li>
            <LogoutOutlinedIcon className="icon"/>
            <span>Logout</span>
        </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar

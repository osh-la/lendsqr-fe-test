import { sidebarItems } from "../data/sidebarItems";

import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar'>
      <div className="sidebar-top">
        <div className="sidebar-top-a">
          <img src="/icons/sidebar/briefcase.png" alt="" />
          <a href="">Switch Organization</a>
          <img className="dropdown "src="/icons/dropdown.png" alt="" />
        </div>
        <div className="sidebar-top-a">
          <img src="/icons/sidebar/home.png" alt="" />
          <p>Dashboard</p>
        </div>
      </div>
      {sidebarItems.map((section) => (
        <div key={section.category} className='section'>
          <h3 className='category'>{section.category}</h3>
          <ul className='menu'>
            {section.items.map((item) => (
              <li key={item.id} className='menuItem'>
                <img src={item.image} alt="" />
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;

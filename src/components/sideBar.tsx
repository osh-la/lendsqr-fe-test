import { sidebarItems } from "../data/sidebarItems";

import { Link } from "react-router-dom"; 

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar'>
      <a href="">Switch Organization</a>
      <p>Dashboard</p>
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

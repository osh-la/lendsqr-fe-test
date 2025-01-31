import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserDashboard: React.FC = () => {
  const [userData, setUserData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/f69d9ec0-4f58-493a-8ef6-0c56d7973567")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUserData(data);
        } else {
          console.error("Unexpected API response format:", data);
          setUserData([]);
        }
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);


  return (
    <div className="dashboard">
      <h1>Users</h1>
      <div className="dashboard__stats">
        {[
          { label: "USERS", count: 2453, image: "/icons/users/users1.png" },
          { label: "ACTIVE USERS", count: 2453, image: "/icons/users/users2.png" },
          { label: "USERS WITH LOANS", count: 12453, image: "/icons/users/audit.png" },
          { label: "USERS WITH SAVINGS", count: 102453, image: "/icons/users/coins1.png" },
        ].map((stat) => (
          <div key={stat.label} className="stat">
            <div className="stat-img-container">
              <img src={stat.image} alt={stat.label} className="users-img" />
            </div>
            <p className="stat__label">{stat.label}</p>
            <p className="stat__count">{stat.count}</p>
          </div>
        ))}
      </div>
      <div className="dashboard__table">
        <table>
          <thead>
            <tr>
              <th>ORGANIZATION</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE NUMBER</th>
              <th>DATE JOINED</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6}>Loading users...</td>
              </tr>
            ) : userData.length > 0 ? (
              userData.map((user) => (
                <tr key={user.id}>
                  <td><Link to={`/user/${user.id}`}>{user.organization}</Link></td>
                  <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
                  <td><Link to={`/user/${user.id}`}>{user.email }</Link></td>
                  <td><Link to={`/user/${user.id}`}>{user.phoneNumber}</Link></td>
                  <td><Link to={`/user/${user.id}`}>{user.dateJoined}</Link></td>
                  <td>
                    <span className={`status status--${(user.status).toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;

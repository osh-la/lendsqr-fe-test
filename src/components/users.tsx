const UserDashboard = () => {
  const users = [
    {
      organization: "Lendsqr",
      username: "Adedeji Oluwaseyi",
      email: "adedeji@gmail.com",
      phoneNumber: "07089338256",
      dateJoined: "Apr 29, 2023 10:00 AM",
      status: "Pending",
    },
    {
      organization: "Lendsqr",
      username: "Debby Ejikeme",
      email: "debby.ejikeme@gmail.com",
      phoneNumber: "07089338257",
      dateJoined: "Apr 29, 2023 11:00 AM",
      status: "Inactive",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace.effiom@gmail.com",
      phoneNumber: "07089338258",
      dateJoined: "Apr 29, 2023 12:00 PM",
      status: "Active",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__stats">
        {[
          { label: "USERS", count: 2453 },
          { label: "ACTIVE USERS", count: 2453 },
          { label: "USERS WITH LOANS", count: 12453 },
          { label: "USERS WITH SAVINGS", count: 102453 },
        ].map((stat) => (
          <div key={stat.label} className="stat">
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
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span
                    className={`status status--${user.status.toLowerCase()}`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
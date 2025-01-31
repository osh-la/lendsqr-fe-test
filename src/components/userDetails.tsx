import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const UserDetails: React.FC = () => {
  const { id } = useParams(); // Get user ID from URL
  const [userData, setUserData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [activeCategory, setActiveCategory] = useState("general"); // Default category

  // Fetch user general details by default
  useEffect(() => {
    fetch(`https://api.example.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error("Error fetching user details:", error));
  }, [id]);

  // Function to fetch category-specific data
  const fetchCategoryData = (category) => {
    setActiveCategory(category); // Set active category
    fetch(`https://api.example.com/users/${id}/${category}`)
      .then(response => response.json())
      .then(data => setCategoryData(data))
      .catch(error => console.error(`Error fetching ${category} data:`, error));
  };
  return (
    <section className="user-section">
      <a href="/"> Back to Users</a>
      <div className="user-details-container">
        <div className="header">
          <h2>User Details</h2>
          <div className="actions">
            <button className="blacklist">Blacklist User</button>
            <button className="activate">Activate User</button>
          </div>
        </div>

        <div className="user-profile">
          <div className="profile">
            <img src="/profile-picture.png" className="profile-icon" />
            <div className="info border-right">
              <h3>Oshela Abimiku</h3>
              <p>Loan Tier: Largesqr</p>
            </div>
            <div className="info border-right">
              <h3>Users Tier</h3>
              <p>stars</p>
            </div>
            <div className="info">
              <h3>₦200,000.00</h3>
              <p> bank Name and account number</p>
            </div>
          </div>

          <div className="tabs">
            <button className="active">General Details</button>
            <button>Documents</button>
            <button>Bank Details</button>
            <button>Loans</button>
            <button>Savings</button>
            <button>App and System</button>
          </div>
        </div>

        <div className="details">
          <h4>Personal Information</h4>
          <div className="info-grid">
            <div>Full Name: <strong>oshela abimiku</strong> </div>
            <div>Phone Number: <strong>07067890223</strong></div>
            <div>Email Address: <strong>oshela@email.com</strong></div>
            <div>Gender:  <strong>Female</strong></div>
            <div>Marital Status: <strong>Single</strong> </div>
            <div>Children: <strong>None</strong> </div>
            <div>Type of Residence: <strong>Parents Home</strong> </div>
          </div>

          <h4>Education and Employment</h4>
          <div className="info-grid">
            <div>Level of Education: <strong>B.Sc</strong> </div>
            <div>Employment Status: <strong>Employed</strong> </div>
            <div>Sector of Employment: <strong>Finance</strong> </div>
            <div>Duration of Employment: <strong>2 years</strong> </div>
            <div>Official Email:<strong>You@gmail.com</strong> </div>
            <div>Monthly Income: <strong>₦200,000 - ₦400,000</strong> </div>
            <div>Loan Repayment: <strong>₦40,000</strong> </div>
          </div>
          <h4>Socials</h4>
          <div className="info-grid">
            <div>Twitter <strong>@Grace_efiom</strong></div>
            <div>Facebook<strong>Grace effiom</strong></div>
            <div>Instagram <strong>@Grace_efiom</strong></div>           
          </div>

          <h4>Gaurantor</h4>
          <div className="info-grid">
            <div>Full Name: <strong>Debby Ogana</strong></div>
            <div>Phone Number: <strong>07060780922</strong></div>
            <div>Official Email: <strong>debby@gmail.com</strong></div>
            <div>Relationship: <strong>Sister</strong></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;

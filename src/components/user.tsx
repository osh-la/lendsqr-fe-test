
const UserDetails: React.FC = () => {
  return (
    <div className="user-details-container">
    <div className="header">
      <h2>User Details</h2>
      <div className="actions">
        <button className="blacklist">Blacklist User</button>
        <button className="activate">Activate User</button>
      </div>
    </div>

    <div className="profile">
      <img className="profile-icon" />
      <div className="info">
        <h3>Grace Effiom</h3>
        <p>Loan Tier: Largesqr</p>
        <h4>₦200,000.00</h4>
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

    <div className="details">
      <h4>Personal Information</h4>
      <div className="info-grid">
        <div><strong>Full Name:</strong> Grace Effiom</div>
        <div><strong>Phone Number:</strong> 07067890223</div>
        <div><strong>Email Address:</strong> grace@email.com</div>
        <div><strong>Gender:</strong> Female</div>
        <div><strong>Marital Status:</strong> Single</div>
        <div><strong>Children:</strong> None</div>
      </div>

      <h4>Education and Employment</h4>
      <div className="info-grid">
        <div><strong>Level of Education:</strong> B.Sc</div>
        <div><strong>Employment Status:</strong> Employed</div>
        <div><strong>Sector of Employment:</strong> Finance</div>
        <div><strong>Monthly Income:</strong> ₦200,000 - ₦400,000</div>
      </div>

      <h4>Socials</h4>
      <div className="info-grid">
        <div><strong>Twitter:</strong> @grace_effiom</div>
        <div><strong>Facebook:</strong> Grace Effiom</div>
        <div><strong>Instagram:</strong> @grace_effiom</div>
      </div>
    </div>
  </div>
);
};

export default UserDetails;

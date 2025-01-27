

const UserDetails: React.FC = () => {
  return (
    <div className='userDetails'>
      <div className='header'>
        <div className='profileInfo'>
          <img src="/avatar.png" alt="User Avatar" />
          <div>
            <h2>Grace Effiom</h2>
            <p>User Tier: Gold</p>
          </div>
        </div>
        <div className='actions'>
          <button className='blacklist'>Blacklist User</button>
          <button className='activate'>Activate User</button>
        </div>
      </div>
      <div className='infoSections'>
        <div className='section'>
          <h3>Personal Information</h3>
          <p>Email: grace@example.com</p>
          <p>Phone: 07012345678</p>
        </div>
        <div className='section'>
          <h3>Bank Details</h3>
          <p>Bank: XYZ Bank</p>
          <p>Account Number: 1234567890</p>
        </div>
        
      </div>
    </div>
  );
};

export default UserDetails;


const NavBar = () => {
  return (
    <>
      <nav className="Nav">
        <a href="/"><img className="Nav-logo" src="/logo.png" alt="logo" /></a>
        <form action="" method="post">
          <input type="text" placeholder="Search for anything" />
          <button>
            <img src="/icons/search.png" alt="search" />
          </button>
        </form>
        <div className="Nav-docs-profile">
          <a href="/">Docs</a>
          <button><img src="/icons/bell.png" alt="bell" /></button>
          <a className="profile">
            <img className="profile-pic" src="/profile.jpg" alt="profile" />
            <p>Oshela abimiku</p>
            <img className="dropdown" src="/icons/dropdown.png" alt="" />
            <span></span>
          </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar
const Header = ({ title, totalVotes }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>
        지금까지 <strong>{totalVotes}</strong>표
      </p>
    </header>
  );
};

export default Header;

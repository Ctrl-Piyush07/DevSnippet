const Header = () => {
  return (
    <header className="h-16 border-b bg-white sticky top-0 z-10">
      <nav className="flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <span className="font-bold">DevSnippet</span>
          <span>Navigation</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Search</span>
          <span>Theme</span>
          <span>Add</span>
          <span>Avatar</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

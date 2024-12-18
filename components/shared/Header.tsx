import SideNav from "./SideNav";

const Header = ({ head_text }: { head_text: string }) => {
  return (
    <header className="wrapper py-6 flex justify-between items-center border-b">
      <h1>{head_text}</h1>

      <div className="lg:hidden">
        <SideNav />
      </div>
    </header>
  );
};

export default Header;

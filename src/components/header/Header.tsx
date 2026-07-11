import AuthNav from "../auth-nav/AuthNav";
import HeaderMain from "../header-main";

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <AuthNav />
      <HeaderMain />
    </header>
  );
};

export default Header;

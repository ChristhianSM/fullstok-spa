import AuthNav from "../auth-nav/AuthNav";
import HeaderMain from "../header-main";

type HeaderProps = {
  user: { email: string } | null;
  className?: string;
};

export const Header = ({ user, className }: HeaderProps) => {
  return (
    <header className={className}>
      <AuthNav user={user} />
      <HeaderMain />
    </header>
  );
};

export default Header;

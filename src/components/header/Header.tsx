import AuthNav from "../auth-nav/AuthNav";
import HeaderMain from "../header-main";

type HeaderProps = {
  user: { email: string } | null;
  cartItemsCount: number;
  className?: string;
};

export const Header = ({ user, cartItemsCount, className }: HeaderProps) => {
  return (
    <header className={className}>
      <AuthNav user={user} />
      <HeaderMain cartItemsCount={cartItemsCount} />
    </header>
  );
};

export default Header;

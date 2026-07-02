import AuthNav from "../auth-nav/AuthNav";
import HeaderMain from "../header-main";

type HeaderProps = {
  user: { email: string } | null;
  cartItemsCount: number;
  className?: string;
  navigate: (to: string) => void;
};

export const Header = ({
  user,
  cartItemsCount,
  className,
  navigate,
}: HeaderProps) => {
  return (
    <header className={className}>
      <AuthNav user={user} />
      <HeaderMain cartItemsCount={cartItemsCount} navigate={navigate} />
    </header>
  );
};

export default Header;

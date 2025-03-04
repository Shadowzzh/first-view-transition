import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(path);
      });
    });
  };

  return (
    <div>
      <a href="/" onClick={(e) => onClick(e, "/")}>
        首页
      </a>
      <a href="/about" onClick={(e) => onClick(e, "/about")}>
        关于
      </a>
    </div>
  );
};

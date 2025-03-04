import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();

    // 检查浏览器是否支持 View Transition API
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(path);
        });
      });
    } else {
      // 降级处理
      navigate(path);
    }
  };

  return (
    <div className="flex gap-4 mb-6">
      <a href="/" className="text-blue-500 hover:text-blue-700" onClick={(e) => onClick(e, "/")}>
        首页
      </a>
      <a href="/about" className="text-blue-500 hover:text-blue-700" onClick={(e) => onClick(e, "/about")}>
        关于
      </a>
    </div>
  );
};

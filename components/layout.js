import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

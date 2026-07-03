import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <section>
        <Sidebar />
        <main>Main-content</main>
      </section>
    </>
  );
};

export default Layout;

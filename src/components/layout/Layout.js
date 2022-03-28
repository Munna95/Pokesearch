import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;

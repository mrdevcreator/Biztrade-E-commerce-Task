// app/page.js
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/HeroSection";
import Footer from "./components/Foot/Footer";
import Post from "./components/Post/Post";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainBody}>
      <Navbar />
      <Hero />
      <Post />
      <Footer />
    </div>
  );
}

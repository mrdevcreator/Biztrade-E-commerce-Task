import Categories from "./herocomponents/Categories";
import HeroImages from "./herocomponents/HeroImages";
import styles from "./HeroSection.module.css";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Left: Categories */}
          <Categories />
          <div className={styles.heroRight}>
            {/* Middle: Images (Next Step) */}
            <HeroImages />

            {/* Bottom: Services (Next Step) */}
            <div className={styles.services}>Icons will go here</div>
          </div>
        </div>
      </section>
    </>
  );
}

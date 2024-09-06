import styles from "./HomePage.module.css";
import logo from "../../logo/Vector.svg";

function HomePage() {
    return (
        <>
            <div className={styles.header}>
                <section className={styles.section}>
                    <img src={logo} className={styles.logo} alt={"logo"} />
                </section>
                <nav className={styles["navigation-bar"]}>
                    <a href="form">Home</a>
                    <a href="form">Episodes</a>
                    <a href="#form">About</a>
                    <a href="form">Contact</a>
                </nav>
            </div>
        </>
    );
}

export default HomePage;

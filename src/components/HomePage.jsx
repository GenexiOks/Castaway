import styles from './HomePage.module.css';
import logo from '../../logo/Vector.svg';

function HomePage() {
    return (
        <>
            <div className={styles.header}>
                <section className={styles.section}>
                    <img src={logo} className={styles.logo} alt={'logo'} />
                    <nav className={styles['navigation-bar']}></nav>
                </section>
            </div>
        </>
    );
}

export default HomePage;

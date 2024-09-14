import styles from './HomePage.module.css';
import logo from '../../logo/Vector.svg';
import img from '../../img/IMAGE.svg';
import lines from '../../img/IMAGE1.svg';
import vector from '../../img/Vector.svg';

function HomePage() {
    return (
        <>
            <div className={styles.header}>
                <nav>
                    <img src={logo}></img>
                    <div className={styles['navigation-panel']}>
                        <a href="#" className={styles.home}>
                            Home
                        </a>
                        <a href="#" className={styles.episode}>
                            Episodes
                        </a>
                        <a href="#" className={styles.about}>
                            About
                        </a>
                        <a href="#" className={styles.contact}>
                            Contact
                        </a>
                    </div>
                </nav>
            </div>

            <div className={styles['home-page']}>
                <section className={styles['section-one']}>
                    <div className={styles['content-one']}>
                        <img
                            src={lines}
                            alt="line"
                            className={styles['img-2']}
                        />
                        <img
                            src={img}
                            alt="home page"
                            className={styles['img-1']}
                        />
                        <div className={styles['next-level-text']}>
                            <p className={styles.next}>
                                next
                                <img src={vector} />
                            </p>
                            <p className={styles['take-your-podcast']}>
                                Take your podcast to the
                            </p>
                            <p className={styles.level}>level</p>
                            <div
                                className={
                                    styles['conteiner-for-social-networking']
                                }
                            >
                                <p>Listen on</p>
                                <nav
                                    className={styles['conteiner-social-logo']}
                                >
                                    <div>
                                        <img src={'./social_logo/IMAGE.png'} />
                                    </div>
                                    <div>
                                        <img
                                            src={'./social_logo/IMAGE (4).png'}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={'./social_logo/IMAGE (3).png'}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={'./social_logo/IMAGE (2).png'}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={'./social_logo/IMAGE (1).png'}
                                        />
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles['conteiner-about-us']}>
                <section>
                    <div className={styles['all-episodes-text']}>
                        <p>Latest episodes</p>
                        <button>View all episodes</button>
                    </div>
                    <div className={styles['all-episodes-preview']}>
                        <div className={styles['episode-one']}>
                            <section>
                                <img src="./episodes_img/3.svg" />
                                <div className={styles['episode-text']}>
                                    <p className={styles['header-text']}>
                                        Should you get outboard audio gear?
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className={styles['episode-second']}>
                            <section>
                                <img src="./episodes_img/1.svg" />
                                <div className={styles['episode-text']}>
                                    <p className={styles['header-text']}>
                                        Mic tricks to take you to the next level
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className={styles['episode-third']}>
                            <section>
                                <img src="./episodes_img/2.svg" />
                                <div className={styles['episode-text']}>
                                    <p className={styles['header-text']}>
                                        The best microphone under $200
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default HomePage;

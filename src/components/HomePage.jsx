import styles from "./HomePage.module.css";
import logo from "../../logo/Vector.svg";
import img from "../../img/IMAGE.svg";
import lines from "../../img/IMAGE1.svg";
import vector from "../../img/Vector.svg";

function HomePage() {
    return (
        <>
            <div className={styles.header}>
                <nav>
                    <img className={styles["img-logo"]} src={logo}></img>
                    <div className={styles["navigation-panel"]}>
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

            <div className={styles["home-page"]}>
                <section className={styles["section-one"]}>
                    <div className={styles["content-one"]}>
                        <img
                            src={lines}
                            alt="line"
                            className={styles["img-2"]}
                        />
                        <img
                            src={img}
                            alt="home page"
                            className={styles["img-1"]}
                        />
                        <div className={styles["next-level-text"]}>
                            <p className={styles.next}>
                                next
                                <img src={vector} />
                            </p>
                            <p className={styles["take-your-podcast"]}>
                                Take your podcast to the
                            </p>
                            <p className={styles.level}>level</p>
                            <div
                                className={
                                    styles["conteiner-for-social-networking"]
                                }
                            >
                                <p>Listen on</p>
                                <nav
                                    className={styles["conteiner-social-logo"]}
                                >
                                    <div>
                                        <img src={"./social_logo/IMAGE.png"} />
                                    </div>
                                    <div>
                                        <img
                                            src={"./social_logo/IMAGE (4).png"}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={"./social_logo/IMAGE (3).png"}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={"./social_logo/IMAGE (2).png"}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={"./social_logo/IMAGE (1).png"}
                                        />
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles["conteiner-about-us"]}>
                <section>
                    <div className={styles["all-episodes-text"]}>
                        <p>Latest episodes</p>
                        <button>View all episodes</button>
                    </div>
                    <div className={styles["all-episodes-preview"]}>
                        <div className={styles["episode-one"]}>
                            <section>
                                <div
                                    className={styles["container-img-episode"]}
                                >
                                    <img src="./episodes_img/3.png" />
                                </div>
                                <div className={styles["episode-text"]}>
                                    <p className={styles["episode-tag"]}>
                                        Gear
                                    </p>
                                    <p className={styles["header-text"]}>
                                        Should you get outboard audio gear?
                                    </p>
                                    <p className={styles["main-text-episode"]}>
                                        Is hardware really worth it when it
                                        comes to podcasting? The answer is...it
                                        depends. Here’s our reasons on why you
                                        might want to consider picking something
                                        up.
                                    </p>
                                    <div
                                        id={
                                            styles[
                                                "container-episode-number-text"
                                            ]
                                        }
                                    >
                                        <p id={styles["episode-text"]}>
                                            Episode
                                        </p>
                                        <p id={styles["episode-number"]}>3</p>
                                    </div>
                                    <button
                                        className={
                                            styles["view-episode-details"]
                                        }
                                    >
                                        View Episode Details
                                    </button>
                                </div>
                            </section>
                            <div className={styles["episode-second"]}>
                                <section>
                                    <div
                                        className={
                                            styles["container-img-episode"]
                                        }
                                    >
                                        <img src="./episodes_img/2.jpg" />
                                    </div>

                                    <div className={styles["episode-text"]}>
                                        <p className={styles["episode-tag"]}>
                                            Tips & Tricks
                                        </p>
                                        <p className={styles["header-text"]}>
                                            Mic tricks to take you to the next
                                            level
                                        </p>
                                        <p
                                            className={
                                                styles["main-text-episode"]
                                            }
                                        >
                                            Stop rolling with those default
                                            settings on your mic. These small
                                            tweaks will take you from sounding
                                            good to great.
                                        </p>
                                        <div
                                            id={
                                                styles[
                                                    "container-episode-number-text"
                                                ]
                                            }
                                        >
                                            <p id={styles["episode-text"]}>
                                                Episode
                                            </p>
                                            <p id={styles["episode-number"]}>
                                                2
                                            </p>
                                        </div>
                                        <button
                                            className={
                                                styles["view-episode-details"]
                                            }
                                        >
                                            View Episode Details
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className={styles["episode-third"]}>
                            <section>
                                <div
                                    className={styles["container-img-episode"]}
                                >
                                    <img src="./episodes_img/1.jpg" />
                                </div>
                                <div className={styles["episode-text"]}>
                                    <p className={styles["episode-tag"]}>
                                        Gear
                                    </p>
                                    <p className={styles["header-text"]}>
                                        The best microphone under $200
                                    </p>
                                    <p className={styles["main-text-episode"]}>
                                        With so many microphones on the market,
                                        how are you supposed to know what’s the
                                        best? Take a look at our top picks.
                                    </p>
                                    <div
                                        id={
                                            styles[
                                                "container-episode-number-text"
                                            ]
                                        }
                                    >
                                        <p id={styles["episode-text"]}>
                                            Episode
                                        </p>
                                        <p id={styles["episode-number"]}>1</p>
                                    </div>
                                    <button
                                        className={
                                            styles["view-episode-details"]
                                        }
                                    >
                                        View Episode Details
                                    </button>
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

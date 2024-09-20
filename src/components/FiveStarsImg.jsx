import styles from "./FiveStarsImg.module.css";

function FiveStarsImg(props) {
    return (
        <>
            <artice className={styles["comment-box"]}>
                <div className={styles.stars}>
                    <img src="../../stars/Vector.svg" />
                    <img src="../../stars/Vector.svg" />
                    <img src="../../stars/Vector.svg" />
                    <img src="../../stars/Vector.svg" />
                    <img src="../../stars/Vector.svg" />
                </div>
                <p className={styles["user"]}>{props.user}</p>
                <p className={styles["user-comment"]}>{props.children}</p>
            </artice>
        </>
    );
}

export default FiveStarsImg;

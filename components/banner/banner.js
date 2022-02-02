import Image from "next/image"
import styles from "./banner.module.css";

export const Banner = ({ imgUrl, title, subtitle }) => {
  const handleOnPlay = () => (
    alert('Handle On Play ')
  )
  return (
    <div className={styles.container}>

      <div className={styles.leftWrapper}>
        <div className={styles.left}>

          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>

          <h3 className={styles.title}>{title}</h3>
          <br/>
          <h5 className={styles.subtitle}>{subtitle}</h5>

          <div className={styles.playBtnWrapper}>
            <button onClick={handleOnPlay} className={styles.btnWithIcon}>
              <Image
                src='/static/play_arrow.svg'
                width='32px'
                height='32px'
                alt='Play Arrow'
              />
              <span className={styles.playText}>Play</span></button>
          </div>

        </div>
      </div>

      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      ></div>
    </div>
  )
}

import Link from 'next/link'
import styles from './VideoResult.module.css'
import { useSession } from "next-auth/react"

const VideoResult = ({ video }) => {
  const { data: session } = useSession()

  return (
    <Link href={`/${video.title}`}>
      <a className={`${styles.video} ${session ? '' : styles.notLoggedIn}`}>
        <video autoPlay loop muted>
          <source src={video.video} type="video/mp4"/>
        </video>
        <div className={styles.videoInfo}>
          <div className={styles.videoLeftInfo}>
            <h2>{video.title}</h2>
            <p>by {video.creator}</p>
          </div>
          <div className={styles.videoRightInfo}>
            <div>{video.views.toLocaleString()} 👀</div>
            <div>{video.like.toLocaleString()} 👍 {video.dislike.toLocaleString()} 👎</div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default VideoResult

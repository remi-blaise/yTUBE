import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/[videoTitle].module.css'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

function getVideo(title: string) {
  return {
    "title": "Rotating planet",
    "description": "Vidéo de la planète en train de tourner",
    "video": "/video_example.mp4",
    "tags": ["planet", "earth", "science", "space"],
    "duration": "00:31",
    "views": 19876,
    "creator": "ThePlanetGuy",
    "created_at": "2021-05-01T08:00:00.00Z",
    "like": 10,
    "dislike": 2,
    "comments": [{
      "user": "Anonymous",
      "text": "Beautiful",
      "date": "2021-05-10T08:00:00.00Z"
    }, {
      "user": "Flatter",
      "text": "Fake ! The earth is flat !",
      "date": "2021-05-05T10:00:00.00Z"
    }]
  }
}

export async function getServerSideProps({ params, req }) {
  const video = getVideo(params.videoTitle)
  // const { user } = req.session

  // if (!user) {
  //   return {
  //     redirect: {
  //       destination: '/api/auth/signin?callbackUrl=' + req.pathname,
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      video,
    },
  }
}

const VideoPage: NextPage = ({ video }) => {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=' + router.pathname)
    },
  })

  return (
    <div>
      <Head>
        <title>{video.title} - yTUBE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{video.title}</h1>

      <main>
        <video controls width="1000" className={styles.vid}>
          <source src={video.video} type="video/mp4"/>
        </video>
        <div className={styles.info}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <p>Published by {video.creator}, on the {(new Date(video.created_at)).toLocaleDateString()}</p>
          <div>{video.views.toLocaleString()} 👀 {video.like.toLocaleString()} 👍 {video.dislike.toLocaleString()} 👎</div>
          <div className={styles.tags}>
            {video.tags.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default VideoPage

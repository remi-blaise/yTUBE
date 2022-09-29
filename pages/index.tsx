import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import { Video } from './api/getLastVideos'
import { useState, useEffect, useRef } from 'react'
import VideoResult from '../components/VideoResult'

const Home: NextPage = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const isLoadingMore = useRef(false)
  const nextPage = useRef(0)

  const loadNextPage = async () => {
    if (isLoadingMore.current) return
    isLoadingMore.current = true
    console.log('load more')
    const data = await fetch('/api/getLastVideos' + '?page=' + nextPage.current).then(res => res.json())
    if (data) {
      setVideos(videos => [...videos, ...data.videos])
    }
    nextPage.current++
    isLoadingMore.current = false
  }

  const onScroll = (event: any) => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight * 0.7) {
      loadNextPage()
    }
  }

  useEffect(() => {
    loadNextPage()

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [])

  return (
    <div>
      <Head>
        <title>yTUBE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {videos.map((video, index) => (
          <VideoResult key={index} video={video}></VideoResult>
        ))}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home

import VideoResult from '../components/VideoResult'

function search(q: string) {
  return Array(5).fill({
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
  })
}

export async function getServerSideProps({ query }) {
  const videos = search(query.q)

  return {
    props: {
      videos,
      q: query.q,
    },
  }
}

const Search = ({ videos, q }) => {
  return (
    <div>
      <h1>Search query: {q}</h1>
      {videos.map((video, index) => (
        <VideoResult key={index} video={video}></VideoResult>
      ))}
    </div>
  )
}

export default Search

import type { NextApiRequest, NextApiResponse } from 'next'

export type Video = {
  title: string,
  description: string,
  video: string,
  tags: string[],
  duration: string,
  views: number,
  creator: string,
  created_at: string,
  like: number,
  dislike: number,
  comments: Array<{user: string, text: string, date: string}>,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ videos: Video[] }>
) {
  const page = req.query.page || 0
  res.status(200).json({ videos: Array(20).fill({
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
  }) })
}

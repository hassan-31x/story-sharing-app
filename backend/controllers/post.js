import {db} from '../db.js'
import jwt from 'jsonwebtoken'

export const getPosts = (req, res) => {
    const q = req.query.cat ? 'SELECT * FROM posts WHERE cat = ?' : 'SELECT * FROM posts'

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}


export const getPost = (req, res) => {
    const q = 'SELECT `username`, `title`, `content`, posts.img, users.img AS userImg, `cat`, `date` FROM users JOIN posts ON users.id = posts.uid WHERE posts.id = ?'
    db.query(q, [req.params.id], (err, data) => { //params is additional data present in the URL
        if (err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
}


export const addPost = (req, res) => {
    res.json("from controller")
}


export const deletePost = (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json('Not Authenticated!')

    jwt.verify(token, 'any-jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json('Token is not valid')

        const postId = req.params.id

        const q = 'DELETE FROM posts WHERE `id` = ? AND `uid` = ?'
        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) return res.status(403).json('This post doesn\'t belong to you!')
            return res.json('Post has been deleted!')
        })
    })
}


export const updatePost = (req, res) => {
    res.json("from controller")
}

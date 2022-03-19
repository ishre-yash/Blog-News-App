import * as fs from 'fs';

// http://localhost:3000/api/getblog?slug=post01
export default function handler(req, res) {

  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error", help:"api/getblog?slug=post01" })
    }
    res.status(200).json(JSON.parse(data))
  })
}

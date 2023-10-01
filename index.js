const express = require('express');
const cors = require('cors');
const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json);

// Set up multer for video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}` );
  },
});

const upload = multer({ storage });

// Define a route for video uploads
app.post('/upload', upload.single('video'), async(req, res) => {
    try {
      if(!req.file){
        return res.status(400).json({
          success : false,
          message: 'No video file uploaded'
        });
      }
      //const filePath = path.join(__dirname, 'uploads');
      //Create the 'download folder if it doesnt exist'
      //fs.ensureDirSync(filePath); 
      const videoFileName = req.file.filename;
      const videoUrl = `/uploads/${videoFileName}`;
      //save the uploaded file to ''uploads folder
      //const videoPath = path.join(filepath, `${videoFileName}`);
      //fs.writeFileSync(filePathPath, videoFileName);
      res.status(200).json({
        url: videoUrl,
        size: req.file.size,
        otherUrl: req.file.path,
        filename: videoFileName,
      });
    } catch (error) {
      console.error('Error uploading video: ', error)
      return res.status(500).json({
        success: false,
        message: 'Server error'
      });
    }
    
});


// Define a route to retrieve a particular video by filename
app.get('/videos/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'uploads', filename);
    console.log('Video path is', filePath);
    // Check if the file exists
    if (fs.existsSync(filePath)) {
      const videoStream = fs.createReadStream(filePath);
      res.setHeader('Content-Type', 'video/mp4'); // Adjust the content type as needed
      videoStream.pipe(res);
    } else {
      res.status(404).json({ message: 'Video not found' });
    }
});
  
  // ...

// ...

// Define a route to render the HTML page for playing a video
app.get('/play', (req, res) => {
    const { filename } = req.query; // Get the video filename from the query parameters
    if (!filename) {
      res.status(400).json({ message: 'Video filename is required' });
    } else {
      res.sendFile(path.join(__dirname, 'play_video.html'));
    }
});
  
  // ...
  

app.use('uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

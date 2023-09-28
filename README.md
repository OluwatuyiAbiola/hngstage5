# Video Sharing Project

Welcome to the Video Sharing project! This project provides a backend service for uploading, storing, and serving videos, along with a basic frontend page for video playback.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Server](#running-the-server)
- [Uploading Videos](#uploading-videos)
- [Retrieving and Playing Videos](#retrieving-and-playing-videos)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Installing Dependencies

1. Clone this repository:

   ```bash
   git clone https://github.com/OluwatuyiAbiola/hngstage5.git
   cd video-sharing-project

2. Install the project's dependencies:

    ```bash
    npm install
    ```

### Running the Server

    To start the backend server, run the following command:

    ```bash
    node index.js or nodemon index.js
    ```

    The server will start on

### Uploading Videos

    You can upload videos to the server by making a POST request to https://backendchromeextention.onrender.com/upload with the video file. You can use tools like curl, Postman, or create a frontend interface to facilitate video uploads.

### Retrieving and Playing Videos

    To retrieve and play videos, you can use the provided /play route. Access the video playback page by visiting a URL like https://backendchromeextention.onrender.com/play?filename=my_video.mp4, where my_video.mp4 is the name of the video you want to play.

### Project Structure

    The project has the following structure:

    backend/
    │
    ├── node_modules/         # Dependencies
    │
    ├── uploads/              # Directory to store uploaded videos
    │
    ├── index.js              # Main server file
    │
    ├── package.json          # Node.js package file
    │
    ├── package-lock.json     # Auto-generated file specifying the exact version of each package
    │
    └── play_video.html       # HTML file for video playback
    
    ── README.md             # Project documentation
    


### Contributing

    Contributions are welcome! If you have suggestions, bug reports, or would like to contribute to this project, please open an issue or create a pull request.
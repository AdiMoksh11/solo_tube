import express from "express";

const app = express();

app.post("/api/v1/signup", (req, res) => {
    
})

app.post("/api/v1/signin", (req, res) => {
    
})

app.post("/api/v1/avatar", (req, res) => {
    
})

app.post("/api/v1/avatar/:avatarId", (req, res) => {
    
})

app.post("/api/v1/avatars", (req, res) => {
    
})

//Video
app.post("/api/v1/video", (req, res) => {
    
})

app.post("/api/v1/video/:videoId", (req, res) => {
    
})

//user
app.post("/api/v1/me", (req, res) => {
    
})

//models
app.post("/api/v1/models", (req, res) => {
    
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
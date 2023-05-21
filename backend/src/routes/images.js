const router = require("express").Router();
const path = require("path");

// const imagesPath = path.join(__dirname, '../public/images');

module.exports = 
router.get("/images/:url", (request, response) => {
    const url = request.params.url;

    response.sendFile(path.join(__dirname, '../public/images', url));
});
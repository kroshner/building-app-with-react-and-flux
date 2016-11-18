module.exports = {
    port: 9005,
    baseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        js: "./src/**/*.js",
        dist: "./dist",
        mainJs: "./src/main.js",
        images: "./src/images/*",
        css: ["node_modules/bootstrap/dist/css/bootstrap.css", "node_modules/bootstrap/dist/css/bootstrap-theme.css"]
    }
};
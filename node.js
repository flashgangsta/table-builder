const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const path = require("path");
const host = /*"0.0.0.0";*/"127.0.0.1";
const port = 3000;
let indexFile;
const filesContentTypeMap = {
    ".ico": "image/x-icon",
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ttf": "application/octet-stream"
};

const filesRootFolderMap = {
    ".js" : "js",
    ".css": "styles",
    ".map": "styles"
}

const requestListener = (req, res) => {

    if (req.method === "POST") {
        let body = "";
        req.on("data", (data) => {
            body += data;
        });

        req.on("end", () => {
            /*switch (req.url) {

            }*/
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end("Success");
        });
    } else if (req.method === "GET") {
        const parsedUrl = url.parse(req.url);
        let pathname = `${parsedUrl.pathname}`;
        const parsedPath = path.parse(pathname);
        const ext = parsedPath.ext;

        if(!ext) {
            req.url = "/";
        } else {
            const levels = parsedPath.dir.split("/");
            const level = levels.indexOf(filesRootFolderMap[ext]);
            pathname = "/" + levels.slice(level).join("/") + "/" + parsedPath.base;
        }

        switch (req.url) {
            case "/":
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(indexFile);
                break;
            default:
                fs.readFile(__dirname + pathname)
                    .then((data) => {
                        res.setHeader("Content-type", filesContentTypeMap[ext] || "text/plain");
                        res.end(data);
                    })
                    .catch(err => {
                        console.error(`Could not read ${pathname} file: ${err}`);
                        process.exit(1);
                    });
                break;
        }
    }
};

const readHtml = () => {
    if (indexFile) return;
    fs.readFile(__dirname + "/index.html")
        .then((contents) => {
            indexFile = contents;
            startServer();
        })
        .catch(err => {
            console.error(`Could not read index.html file: ${err}`);
            process.exit(1);
        });
};

const startServer = () => {
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
};

const server = http.createServer(requestListener);

readHtml();
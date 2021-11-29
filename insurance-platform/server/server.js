var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");
const fsExtra = require("fs-extra");
const app = express();
var Status;
(function (Status) {
    Status["NEW"] = "NEW";
    Status["BOUND"] = "BOUND";
})(Status || (Status = {}));
let allSubmissions = [];
const usersData = [
    {
        fullName: "Yuval Mashraki",
        password: "a1",
    },
];
app.use(fileUpload({
    createParentPath: true,
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.post("/picture:fullName", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        if (!req.files) {
            res.status(500);
        }
        else {
            const fullName = req.params.fullName;
            const { picture } = req.files;
            const { path } = req.query;
            const { fileName } = req.query;
            const fullPath = "./uploads/" + fullName.replace(":", "") + "/" + path;
            yield fsExtra.emptyDirSync(fullPath);
            yield picture.mv(fullPath + "/" + fileName);
            res.status(200).send(true);
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
app.get("/getPdf", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { fileToDownload } = req.query;
        res.download(__dirname + "/uploads/" + fileToDownload, function (err) {
            if (err) {
                res.status(200).send(fileToDownload);
            }
        });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
app.get("/getAllSubmissions", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        if (allSubmissions.length === 0)
            res.json({
                status: false,
                message: "No submissions",
            });
        else
            res.send({ allSubmissions });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
app.post("/updateAllSubmissions", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        allSubmissions = req.body;
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
app.post("/authenticateUser", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const isUserOk = usersData.some((user) => user.fullName === req.body.fullName &&
            user.password === req.body.password);
        if (isUserOk)
            res.status(200).send();
        else
            res.status(401).send();
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
//# sourceMappingURL=server.js.map
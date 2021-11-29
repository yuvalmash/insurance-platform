const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const fsExtra = require('fs-extra');
const app = express();
const path = require('path');

enum Status {
  NEW = 'NEW',
  BOUND = 'BOUND',
}
let allSubmissions = [];

const usersData = [
  {
    fullName: 'Yuval Mashraki',
    password: 'a1',
  },
];

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/picture:fullName', async (req, res) => {
  try {
    if (!req.files) {
      res.status(500);
    } else {
      const fullName = req.params.fullName;
      const { picture } = req.files;
      const { path } = req.query;
      const { fileName } = req.query;

      const fullPath = './uploads/' + fullName.replace(':', '') + '/' + path;

      await fsExtra.emptyDirSync(fullPath);
      await picture.mv(fullPath + '/' + fileName);
      res.status(200).send(true);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get('/getPdf', async (req, res) => {
  try {
    const { fileToDownload } = req.query;

    res.download(__dirname + '/uploads/' + fileToDownload, function (err) {
      if (err) {
        res.status(200).send(fileToDownload);
      }
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get('/getAllSubmissions', async (req, res) => {
  try {
    if (allSubmissions.length === 0)
      res.json({
        status: false,
        message: 'No submissions',
      });
    else res.send({ allSubmissions });
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post('/updateAllSubmissions', async (req, res) => {
  try {
    allSubmissions = req.body;
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post('/authenticateUser', async (req, res) => {
  try {
    const isUserOk = usersData.some((user) => user.fullName === req.body.fullName && user.password === req.body.password);
    if (isUserOk) res.status(200).send();
    else res.status(401).send();
  } catch (e) {
    res.status(500).send(e);
  }
});

const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, '/../build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));

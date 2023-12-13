const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(fileUpload());
app.use(cors({ origin: '*' }));

const filesDirectory = path.join(__dirname, 'files');
app.use(express.static(filesDirectory));

const fileLinks = new Map();

// Endpoint to retrieve a file directly
app.get('/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(filesDirectory, filename);

  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      // Read the file and send it as the response
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    }
  });
});

// Endpoint to serve files using the generated link
app.get('/file/:fileId', (req, res) => {
  const fileId = req.params.fileId;

  // Retrieve the file path from the map using the fileId
  const filePath = fileLinks.get(fileId);

  if (filePath) {
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send('File not found');
  }
});

app.get('/files', (req, res) => {
  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      res.status(500).send('Unable to scan files!');
    }

    const fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: `http://localhost:${PORT}/files/${file}`,
      });
    });

    res.json(fileInfos);
  });
});

// Endpoint to upload files
app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const uploadedFile = req.files.file;
  const uploadPath = path.join(filesDirectory, uploadedFile.name);

  uploadedFile.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  });
});


app.get("/testdata", (req, res) => {
  const data = {
    users: [
      {
        "username": "jonathan",
        "email": "jojo1@example.com",
        "password": "hamon",
        "phone": "1234567890",
        "status": "inactive",
        "userType": "Admin",
        "id": 1
      },
      {
        "username": "joeseph",
        "email": "jojo2@example.com",
        "password": "hermitspurple",
        "phone": "0987654321",
        "status": "active",
        "userType": "ZoneManager",
        "id": 2
      },
      {
        "username": "jotaro",
        "email": "jojo3@gmail.com",
        "password": "starplatinum",
        "phone": "000000000",
        "status": "active",
        "userType": "SuperAdmin",
        "id": 3
      },
      // ... (other user objects)
    ],
    cities: [
      {
        "name": "Lahoreowo",
        "district": "Lahore",
        "province": "Punjab",
        "prefix": "LHE",
        "id": 4
      },
      {
        "name": "Karachiopolis",
        "district": "Karachi",
        "province": "Sindh",
        "prefix": "KHI",
        "id": 5
      },
      {
        "name": "Islamabadington",
        "district": "Islamabad",
        "province": "Capital",
        "prefix": "ISB",
        "id": 6
      },
      // ... (other city objects)
    ],
    zones: [
      {
        "name": "Lahore Zone 1",
        "active": false,
        "cities": ["Lahore"],
        "zoneManager": "Akram",
        "id": 1
      },
      {
        "name": "Karachi Zone 1",
        "active": true,
        "cities": ["Karachi"],
        "zoneManager": "Sana",
        "id": 2
      },
      {
        "name": "Islamabad Zone 1",
        "active": true,
        "cities": ["Islamabad" , "Lahore" , "Karachi"],
        "zoneManager": "Zain",
        "id": 3
      },
      // ... (other zone objects)
    ],
    shopCategories: [
      {
        "name": "Furniture",
        "id": 16,
        "edible": false
      },
      {
        "name": "Electronics",
        "id": 17,
        "edible": false
      },
      {
        "name": "Clothing",
        "id": 18,
        "edible": false
      },
      // ... (other shop category objects)
    ],
    shopTypes: [
      {
        "name": "Furniture",
        "id": 12
      },
      {
        "name": "Electronics",
        "id": 13
      },
      {
        "name": "Clothing",
        "id": 14
      },
      // ... (other shop type objects)
    ]
  };

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

# File System Server with Express

This is a simple Node.js server built with Express to handle file uploads, retrieval, and serving. The server provides endpoints to upload files, retrieve files directly, and get a list of available files.

## Getting Started

1. **Navigate to the project directory:**
    ```bash
    cd <project-directory>
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    npm start
    ```
   The server will run on `http://localhost:3000` by default.

## Endpoints

### 1. Upload a File

- **Endpoint:** `POST /upload`
- **Description:** Upload a file to the server.
- **Request:**
  - Form data with a file attached.
- **Response:**
  - Success: `200 OK` with message "File uploaded!"
  - Error: `400 Bad Request` if no files were uploaded, `500 Internal Server Error` on upload failure.

### 2. Retrieve a File Directly

- **Endpoint:** `GET /files/:filename`
- **Description:** Retrieve a file directly by providing its filename.
- **Request:**
  - `GET /files/:filename`
- **Response:**
  - Success: The file content.
  - Error: `404 Not Found` if the file does not exist.

### 3. Serve Files Using Generated Link

- **Endpoint:** `GET /file/:fileId`
- **Description:** Serve files using the generated link.
- **Request:**
  - `GET /file/:fileId`
- **Response:**
  - Success: The file content.
  - Error: `404 Not Found` if the file does not exist.

### 4. Get List of Available Files

- **Endpoint:** `GET /files`
- **Description:** Get a list of available files with their names and URLs.
- **Request:**
  - `GET /files`
- **Response:**
  - Success: JSON array containing file information.
  - Error: `500 Internal Server Error` if unable to scan files.

## Dependencies

- `express`: Web framework for Node.js.
- `express-fileupload`: Middleware for handling file uploads.
- `cors`: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- `uuid`: Library for generating unique identifiers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

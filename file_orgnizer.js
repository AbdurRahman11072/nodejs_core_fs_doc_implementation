const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output1", "messy-files");
const organizedDir = path.join(__dirname, "output1", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

// todo initializeDirectory check if output dir_exist if exist create messy_dir and organize_dir if doesn't exist create output dir and create messy_dir and organize_dir

function initializeDirectory() {
  if (!fs.existsSync(sourceDir)) {
    console.log("Directory doesn't exist");
    console.log("Creating Directory");
    fs.mkdirSync(sourceDir, { recursive: true });
    console.log("Directory created");

    //* create all the messy files from testFile
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
    });
  }

  if (!fs.existsSync(organizedDir)) {
    console.log("Directory doesn't exist");
    console.log("Creating Organized Directory");
    fs.mkdirSync(organizedDir, { recursive: true });
    console.log("Directory created");
    console.log(Object[categories]);

    Object.keys(categories).forEach((categories) => {
      const categoriesPath = path.join(organizedDir, categories);
      if (!fs.existsSync(categoriesPath)) {
        fs.mkdirSync(categoriesPath);
      }
    });
    return;
  }

  console.log("files already exist");
}

initializeDirectory();

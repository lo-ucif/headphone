const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "src");
const extensions = [".webp", ".webp", ".jpeg"];

function convertImages(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      convertImages(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();

      if (extensions.includes(ext)) {
        const output = fullPath.replace(ext, ".webp");

        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(output)
          .then(() => {
            console.log(`✔ Converted: ${output}`);
          })
          .catch(console.error);
      }
    }
  });
}

convertImages(inputDir);

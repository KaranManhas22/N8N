const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/deploy", (req, res) => {
  exec(
    "cd /home/ubuntu/your-project && git pull origin main && npm install && pm2 restart node-app",
    (error, stdout, stderr) => {
      if (error) {
        return res.send(`Error: ${error.message}`);
      }
      res.send("Deployment Done 🚀");
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

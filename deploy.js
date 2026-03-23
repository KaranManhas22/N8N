const express = require('express');
const { exec } = require('child_process');

const app = express();

app.post('/deploy', (req, res) => {
  console.log("🚀 Deployment triggered");

  exec(`
    cd /home/ubuntu/my-node-app &&
    git pull origin main &&
    npm install &&
    pm2 restart my-node-app
  `, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error:", error);
      return res.status(500).send('Deployment failed');
    }

    console.log("✅ Output:", stdout);
    res.send('Deployment successful');
  });
});

app.listen(3000, () => {
  console.log('Deploy API running on port 3000');
});

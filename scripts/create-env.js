const fs = require('fs');

fs.writeFileSync(
    './.env',
    `
FACEBOOK_ACCESS_TOKEN=${process.env.FACEBOOK_ACCESS_TOKEN}\n
YOUTUBE_ID_USER=${process.env.YOUTUBE_ID_USER}\n
YOUTUBE_ACCESS_KEY=${process.env.YOUTUBE_ACCESS_KEY}\n`
);

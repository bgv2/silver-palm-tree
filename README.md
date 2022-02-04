# silver-palm-tree
## Don't use this anymore
This uses an outdated version of Discord.js, so you should use the steps in the [official Discord.js guide](https://discordjs.guide/) to make your own bot.

----


A Discord bot boilerplate using Discord.js 12 and Node.js.

To develop your bot further, you may want to use the [official Discord.js guide](https://discordjs.guide/).
## How to set up the config.json
Make a copy of config-example.json and call it config.json. Change the prefix if you like (keep it inside the quotes). Where it says `"your-token-here"`, paste in your token (also inside the quotes). If you want the bot to output its invite link, change
```json
"clientID-example": "12345678901234",
```
to
```json
"clientID": "12345678901234",
```
making sure to change the number to your client ID inside the quotes.
## Run the bot
Make sure you have Node.js installed and open a command prompt/terminal in the folder where these files are. Then run:
```bash
npm install
node index.js
```
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> (shortcut is same on Windows and Mac) to stop it.

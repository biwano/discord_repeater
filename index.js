// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Read environnement variables
require('dotenv').config()

// Parse command line arguments
const { ArgumentParser } = require('argparse')

const parser = new ArgumentParser({ description: 'Discord repeater' })
parser.add_argument('text', { help: 'the text to repeat' })
let args = parser.parse_args()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, async c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
    await client.channels.cache.get(process.env.DISCORD_CHANNEL).send(args.text);
    client.destroy(); 
    console.log(`Done`);
    process.exit();
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
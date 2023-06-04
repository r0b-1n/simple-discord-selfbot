const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const client = new Client({
	// See other options here
	// https://discordjs-self-v13.netlify.app/#/docs/docs/main/typedef/ClientOptions
	// All partials are loaded automatically
	checkUpdate: false,
	patchVoice: true,
	syncStatus: false,
});

var log4js = require('log4js');	// Message logging
log4js.configure({
	appenders: { cheese: { type: "file", filename: "cheese.log" } },
	categories: { default: { appenders: ["cheese"], level: "error" } },
});

var logger = log4js.getLogger('cheese'); 

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.username} with Discord ID ${client.user.id}`);

  client.settings.setCustomStatus({
	status: 'online', // 'online' | 'idle' | 'dnd' | 'invisible' | null
	text: 'It’s meee fucking McHannes', // String | null
	emoji: '⛓', // UnicodeEmoji | DiscordEmoji | null
	expires: null, // Date.now() + 1 * 3600 * 1000 <= 1h to ms
  });

  //webpackChunkdiscord_app.push([[[""]],{},q=>Object.values(q.c).find(e=>e.exports?.Z?.createFriendInvite).exports.Z.createFriendInvite().then(console.log)]) This was giving you a discord friend link

  const RichPresence = new Discord.RichPresence()
  .setApplicationId('817229550684471297')
  .setType('PLAYING')
  //.setURL('https://youtube.com/watch?v=dQw4w9WgXcQ')
  .setState('Would you like to see a magic trick?')
  .setName('Let’s talk, you and I. Let’s talk about fear...')
  .setDetails('I like Spam Spam SPAM!')
  /*.setParty({
	  max: 9,
	  current: 1,
	  id: Discord.getUUID(),
  })*/
  //.setStartTimestamp(Date.now())
  .setAssetsLargeImage('https://cdn.discordapp.com/attachments/896131101448339588/1038186790059782174/image.png')
  //.setAssetsLargeText('Youtube')
  .setAssetsSmallImage('https://cdn.discordapp.com/attachments/896131101448339588/1038186790059782174/image.png')
  //.setAssetsSmallText('Bot')
  .addButton('Click here if you are ready!', 'https://discord.gg/yRS4G9Mh')
client.user.setActivity(RichPresence);

})

client.on('messageCreate', async (message) => {
	const guildName = message.guild ? message.guild.name : 'DM';
	const channelName = message.channel.name || 'DM';
	console.log('Guild: ' + guildName + ' > ' + 'User: ' + message.author.username + ' > ' + 'Channel: ' + channelName + ' > said: ' + message.content);
	logger.info('Guild: ' + guildName + ' > ' + 'User: ' + message.author.username + ' > ' + 'Channel: ' + channelName + ' > said: ' + message.content);
})

client.on('messageCreate', async (message) => {
	if (message.author.id === client.user.id || user_ids) {
		if (message.content === prefix + 'ping') {
			const ping = client.ws.ping;
			message.channel.send(`Pong! Client ping is ${ping}ms.`)
		}
	}
})

client.on('messageCreate', async (message) => {
	if (message.author.id === client.user.id || user_ids) {
		if (message.content === prefix + 'user') {
			message.channel.send('Currently ' + user_ids + ' can use the bot.')
		}
	}
})

client.on('messageCreate', async (message) => {
	if (message.author.id === client.user.id || user_ids) {
		if (message.content === prefix + 'channel') {
			const name = client.channels.cache.find(channel => channel.id === channel_id);
			message.channel.send('Im currently chatting in ' + name + ' with ID ' + channel_id + '.')
		}
	}
})

client.on('messageCreate', async (message) => {
	if (message.author.id === client.user.id || user_ids) {
		if (message.content.startsWith(prefix + 'say')) {
			var content = message.content.slice(5);
			client.channels.cache.get(channel).send(content)
		}
	}
})

client.on('messageCreate', async (message) => {
	if (message.author.id === client.user.id || user_ids) {
		if (message.content.startsWith(prefix + 'spam')) {
			var content = message.content.slice(6);
			for (let i = 1; i <= spam_amount; i++) {
				message.channel.send(content)
			}
		}
	} 
})

client.on('messageCreate', async (message) => {
	if (message.author.id === client.user.id || user_ids) {
		if (message.content === prefix + 'lag') {
			for (let i = 1; i <= spam_amount; i++) {
				message.channel.send(':chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains: :chains:')
			}
		}
	}
})

client.login(token);
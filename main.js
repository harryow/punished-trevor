const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('message', message => {

	utOgh(message);

	mock(message);

	if (message.content === 'mimic my idiot self') {
		message.channel.send('miMiC mY iDiOt sELf');
	}

});

function mock(message) {

	if (message.content.startsWith('mock')) {
		const spongeCase = s => s.toLowerCase().split('').map((v, i) => i % 2 === 0 ? v : v.toUpperCase()).join('');
		const users = message.mentions.users;
		console.log(users, '\n\n\n');
		const id = message.mentions.users.firstKey();
		console.log("id:", id);
		message.channel.fetchMessage(517437854788616192)
			.then(lastMessage => {
				console.log(lastMessage.content, '\n\n\n');
				const mockedMessage = spongeCase(lastMessage);
				message.channel.send(mockedMessage);
			})
			.catch(error => console.log(error));
	}

}

function utOgh(message) {

	const match = message.content.match(/u+\s*t+\s*o+\s*g+\s*h+/i);

	if (match && !message.author.bot) {
		const str = match[0].toUpperCase();
		const us = str.match(/U/g).join('').length;
		const os = str.match(/O/g).join('').length;
		
		let result = '';
		[...new Set(str)].forEach(v => {
			result += str.match(new RegExp(v, 'ig')).join('');
			if (v === 'U') {
				while (result.length < us * 2) result += v;
			}
			if (v === 'O') {
				const lengthSoFar = result.length;
				while (result.length - lengthSoFar < os * 2) result += v;
			}
		});
		result = `***${result}***`;

		message.channel.send(result);
	}

}
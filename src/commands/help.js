const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ["help", "ajuda"],
    description: "Show command options",
    category: "Information",

    execute(client, message) {
	const embed = new Discord.MessageEmbed()
		.setColor('#a632a8')
	  	.setTitle('General')
    		.addFields(
			{ name: 'Challenge', value: '~chall {Challenge Number}' },
			{ name: 'Hint', value: '~hint {Challenge Number}' },
			{ name: 'Flag', value: '~flag {Flag}' },
			{ name: 'Source', value: '~source' },
		)
	    	
	message.channel.send(embed);
    },
};

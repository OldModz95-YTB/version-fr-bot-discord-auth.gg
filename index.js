const { MessageEmbed, Client } = require("discord.js");
const client = new Client();
const prefix = ";";
const { get } = require('axios');
const API = "TON API AUTH.GG";
const invite_discord_Old =  "https://discord.gg/3t2568W";
const idsalon = "TON ID DE SALON";
const id_oldmodz95 = "346049979863007232";
const salon_predefini = "Tu ne peux pas utiliser cette commande ici. Un salon priver est disponible pour utiliser les commandes.";

client.on('ready', function() {
	console.log("Prêt à être utiliser à 100%.\nDevelopper par OldModz95#7213\n\ndiscord.gg/3t2568W\noldmodz95.me\nBOT DISORD OFFICIEL: https://botdiscord.oldmodz95.me")
	setInterval(async () => {
		try {
			//--------STATUS INFOS--------//
			const statuslist = [
				`${prefix}help | ${client.guilds.size} serveurs`,
				`${prefix}help | ${client.channels.size} channels`,
				`${prefix}help | ${client.users.size} utilisateurs`
			];
			const random = Math.floor(Math.random() * statuslist.length);
			//------STATUS URL TWITCH------//
			const statusurl = [
				`https://www.twitch.tv/oldmodz95off`
			];
			const randomurl = Math.floor(Math.random() * statusurl.length);
			client.user.setPresence({ game: { name: statuslist[random]}, status: 'idle' })
		} catch (error) {
			(console.log)
		};
	}, 10000);
});

client.on('message', async function(message) {
	////////-------////////
	//--A NE PAS TOUCHER-//
	////////-------////////
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	////////////////////
	////////////////////
	if (!message.content.startsWith(prefix)) return;

	if(message.content.startsWith(prefix + "setup")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Setup Du Bot`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Crée un salon **priver** puis copier sont ID.\nIl faut que seul le gérant du compte Auth.gg vois le salon.\nPar question de sécurité au niveau des informations personnel qui seront visible !\nAller dans les fichiers du bot.\nAller dans le fichier **index.js**\nAjoute le à la **ligne 7**.\nVa sur ton compte Auth.gg, puis dans une de tes application que tu souhaite gérer.\nVa dans les settings de ton application puis copie l'API.\nColle ton API à la **ligne 5**.\nFermer le fichier index.js, lancer le bot et essayer une commande.\n\nSi vous avez des questions contacter OldModz95.`)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}


	if(message.content.startsWith(prefix + "dev")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Développeur Du Bot`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Fondateur Du Projet: **OldModz95#7213**\nEquipe Du Projet: **POLYNESIA_972#8023**\nServeur Discord: https://discord.gg/3t2568W`)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}

	if(message.content.startsWith(prefix + "contact")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Nous Contacter`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Serveur Discord: https://discord.gg/3t2568W\nSite Web: https://oldmodz95.me\nYouTube: https://youtube.com/oldmodz95\nInviter Notre Bot Officiel: https://botdiscord.oldmodz95.me`)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}



	if(message.content.startsWith(prefix + "help")){
		message.delete(message.author);
		let embed_help = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu d'aide`)
			.setImage("https://media4.giphy.com/media/SXISye6qGJwkQgTiXD/giphy.gif")
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.setDescription('Bot Auth.gg Qui gére vos application')
			.addField(`\`${prefix}setup \``, "Config Le Bot Auth.gg.")
			.addField(`\`${prefix}help\``, "Affiche la commande d'aide.")
			.addField(`\`${prefix}huser\``, "Affiche les commandes user.")
			.addField(`\`${prefix}hlicense\``, "Affiche les commandes.")
			.addField(`\`${prefix}hhwid\``, "Affiche les commandes.")
			.addField(`\`${prefix}bot\``, "Affiche les informations du bot.")
			.addField(`\`${prefix}dev \``, "Affiche les développeurs.")
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_help);
	}



	if(message.content.startsWith(prefix + "huser")){
		message.delete(message.author);
		let embed_huser = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Des Commandes User`)
			.setImage("https://media3.giphy.com/media/lNS9w4bloaHsobH4Zy/giphy.gif")
			.setDescription(`Besoin D'aide ? Fait **${prefix}excommande**`)
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.addField(`\`${prefix}userinfos\``, "Afficher les informations d'un utilisateur.")
			.addField(`\`${prefix}deleteuser\``, "Supprimer un utilisateur.")
			.addField(`\`${prefix}pass\``, "Changer le mot de passe d'un utilisateur.")
			.addField(`\`${prefix}variable\``, "Ajouter/Changer la variable d'un utilisateur.")
			.addField(`\`${prefix}usercount\``, "Afficher le nombre d'utilisateur sur l'application.")
			.addField(`\`${prefix}infousernum\``, "Afficher les informations d'un numéro d'utilisateur.")
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_huser);
	}


	if(message.content.startsWith(prefix + "hlicense")){
		message.delete(message.author);
		let embed_hlicense = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Des Commandes license`)
			.setImage("https://media2.giphy.com/media/XbPNJZUm7x10CUIlXp/giphy.gif")
			.setDescription(`Besoin D'aide ? Fait **${prefix}excommande**`)
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.addField(`\`${prefix}key\``, "Afficher les informations d'une license.")
			.addField(`\`${prefix}deletekey\``, "Supprimer un liense.")
			.addField(`\`${prefix}usekey\``, "Changer la license sur **Utiliser**")
			.addField(`\`${prefix}unusekey\``, "Changer la license sur **Pas Utiliser**")
			.addField(`\`${prefix}generate\``, "Generer une nouvelle license.")
			.addField(`\`${prefix}countkey\``, "Afficher le nombre de license crée.")
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hlicense);
	}


	if(message.content.startsWith(prefix + "hhwid")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Des Commandes hwid`)
			.setImage("https://media3.giphy.com/media/kd9k2KsosKu6Er9RTH/giphy.gif")
			.setDescription(`Besoin D'aide ? Fait **${prefix}excommande**`)
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.addField(`\`${prefix}resethwid\``, "Retire l'HWID présent.")
			.addField(`\`${prefix}infohwid\``, "Voir l'HWID de l'utilisateur.")
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}


	if(message.content.startsWith(prefix + "excommande")){
		message.delete(message.author);
		let embed_excommande = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Des Exemples De Commande`)
			.setImage("https://media3.giphy.com/media/KzEbSenNKrXFjrubm0/giphy.gif")
			.setDescription(`Besoin D'aide ? Contact **OldModz95**`)
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.addField(`\`${prefix}key\``, ";key LICENSE")
			.addField(`\`${prefix}deletekey\``, ";deletekey LICENSE")
			.addField(`\`${prefix}usekey\``, ";usekey LICENSE")
			.addField(`\`${prefix}unusekey\``, ";unusekey LICENSE")
			.addField(`\`${prefix}generate\``, ";generate 1 `(1 = nombre de jour)`")
			.addField(`\`${prefix}countkey\``, ";countkey")
			.addField(`\`${prefix}resethwid\``, ";resethwid username")
			.addField(`\`${prefix}infohwid\``, ";infohwid username")
			.addField(`\`${prefix}userinfos\``, ";userinfos username")
			.addField(`\`${prefix}deleteuser\``, ";deleteuser username")
			.addField(`\`${prefix}pass\``, ";pass username password")
			.addField(`\`${prefix}variable\``, ";variable username variable")
			.addField(`\`${prefix}usercount\``, ";usercount")
			.addField(`\`${prefix}infousernum\``, ";infousernum 8 `(8 = user 8, si il existe pas il affichera rien.)`\n\nSi vous avez des questions hésiter pas à faire la commande dev et contacter **OldModz95**")
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_excommande);
	}

/////////////////////////////////////////////////////
/////////////////COMMANDE USER//////////////////////
///////////////////////////////////////////////////


if(message.content.startsWith(prefix + "infousernum")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Rejoindre le serveur à OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Demander par ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
		let content = message.content.split(" ");
	let args = content.slice(1);
	const name_infousernum = args.join(" ");
	if(!name_infousernum) {
		return message.reply("Veuillez entrez un nom valide !");
	}
	get(`https://developers.auth.gg/USERS/?type=fetchall&authorization=${API}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`All User Information`)
				.setDescription(`Username: ${res.data[`${name_infousernum}`].username}\nEmail: ${res.data[`${name_infousernum}`].email}\nHWID: ${res.data[`${name_infousernum}`].hwid}\nRank: ${res.data[`${name_infousernum}`].rank}\nVariable: ${res.data[`${name_infousernum}`].variable}\nLast Login: ${res.data[`${name_infousernum}`].lastlogin}\nLast IP: ${res.data[`${name_infousernum}`].lastip}\nExpiry Date: ${res.data[`${name_infousernum}`].expiry_date}
				
				If undefined = Username no valid.`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_userinfos}`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}




if(message.content.startsWith(prefix + "userinfos")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Rejoindre le serveur à OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Demander par ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	let content = message.content.split(" ");
	let args = content.slice(1);
	const name_userinfos = args.join(" ");
	if(!name_userinfos) {
		return message.reply("Veuillez entrez un nom valide !");
	}
	get(`https://developers.auth.gg/USERS/?type=fetch&authorization=${API}&user=${name_userinfos}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Info User : ${res.data.username}`)
				.setDescription(`Status: ${res.data.status}\nUsername: ${res.data.username}\nEmail: ${res.data.email}\nRank: ${res.data.rank}\n\n**Information Subcription**\nLast Login: ${res.data.lastlogin}\nExpiry: ${res.data.expiry}\n\n**Other Information**\nLast IP: ${res.data.lastip}\nVariable: ${res.data.variable}\nHWID: ${res.data.hwid}
				
				If undefined = Username no valid.`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_userinfos}`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}


if(message.content.startsWith(prefix + "deleteuser")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Rejoindre le serveur à OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Demander par ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	let content = message.content.split(" ");
	let args = content.slice(1);
	const name_deleteuser = args.join(" ");
	if(!name_deleteuser) {
		return message.reply("Veuillez entrez un nom valide !");
	}
	get(`https://developers.auth.gg/USERS/?type=delete&authorization=${API}&user=${name_deleteuser}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`User Delete : ${name_deleteuser}`)
				.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}
				
				If undefined = Username no valid.`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_deleteuser}`)
				//.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}



if(message.content.startsWith(prefix + "pass")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Rejoindre le serveur à OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Demander par ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	const user = message.content.split(" ")[1];
	const new_pass = message.content.split(" ")[2];
	if(!user) {
		return message.reply("Veuillez entrez un nom d'utilisateur valide !");
	}
	if(!new_pass) {
		return message.reply("Veuillez entrez un mot de passe !");
	}
	get(`https://developers.auth.gg/USERS/?type=changepw&authorization=${API}&user=${user}&password=${new_pass}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Password Update`)
				.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}
				
				If undefined = user invalid.`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});

			let MPstats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Password Update`)
				.setDescription(`Status: ${res.data.status}\nUsername: ${user}\nNew Password: **${new_pass}**`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.author.send({embed: MPstats}).catch(error => message.channel.send(`:x: Impossible d'envoyer des messages à cet utilisateur ! :x:`)
			.then(m => m.delete({timeout: 3000})))
		}catch(error)  {
		//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Password Update Failed`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}




if(message.content.startsWith(prefix + "variable")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Rejoindre le serveur à OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Demander par ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	const user = message.content.split(" ")[1];
	const variable = message.content.split(" ")[2];
	if(!user) {
		return message.reply("Veuillez entrez un nom d'utilisateur valide !");
	}
	if(!variable) {
		return message.reply("Veuillez entrez une variable !");
	}
	get(`https://developers.auth.gg/USERS/?type=editvar&authorization=${API}&user=${user}&value=${variable}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Variable Update`)
				.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}
				
				If undefined = user invalid.`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});

			let MPstats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Variable Update`)
				.setDescription(`Status: ${res.data.status}\nUsername: ${user}\nNew Variable: **${variable}**`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.author.send({embed: MPstats}).catch(error => message.channel.send(`:x: Impossible d'envoyer des messages à cet utilisateur ! :x:`)
			.then(m => m.delete({timeout: 3000})))
		}catch(error)  {
		//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Variable Update Failed`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}



if(message.content.startsWith(prefix + "usercount")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Rejoindre le serveur à OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Demander par ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	get(`https://developers.auth.gg/USERS/?type=count&authorization=${API}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`User Count`)
				.setDescription(`Status: ${res.data.status}\nNombre D'utilisateur: ${res.data.value}\nInfo: ${res.data.info}\n\nIf undefined (Info) = No Error`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For User Count`)
				//.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}

/////////////////////////////////////////////////////
///////////////END COMMANDE USER////////////////////
///////////////////////////////////////////////////

/////////////////////////////////////////////////////
/////////////////COMMANDE LICENSE///////////////////
///////////////////////////////////////////////////



	if(message.content.startsWith(prefix + "key")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
			let embed_Send = new MessageEmbed()
            .setURL(invite_discord_Old)
            .setTitle('[Rejoindre le serveur à OldModz95]')
            .setColor("RANDOM")
            .setDescription(`${salon_predefini}`)
            .setThumbnail(client.user.avatarURL)
            .setTimestamp()
            .setFooter(`Demander par ${message.author.username}`)
        message.channel.send(embed_Send)
    	} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_key = args.join(" ");
		if(!name_key) {
			return message.reply("Veuillez entrez un nom valide !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=fetch&authorization=${API}&license=${name_key}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Info Key : ${res.data.license}`)
					.setDescription(`Status: ${res.data.status}\nUsername: ${res.data.used_by}\nLicense: ${res.data.license}\nRank: ${res.data.rank}\nUsable: ${res.data.used}\nCreated: ${res.data.created}
					
					If undefined = License no valid.`)
					
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For ${name_key}`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
		})
	}
	}


	if(message.content.startsWith(prefix + "deletekey")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Rejoindre le serveur à OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_deletekey = args.join(" ");
		if(!name_deletekey) {
			return message.reply("Veuillez entrez une license valide !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=delete&license=${name_deletekey}&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`License Delete`)
					.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}\nLicense Delete: ${name_deletekey}`)
					
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For ${name_deletekey}`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
		})
	}
	}



	if(message.content.startsWith(prefix + "usekey")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Rejoindre le serveur à OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_usekey = args.join(" ");
		if(!name_usekey) {
			return message.reply("Veuillez entrez une license valide !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=use&license=${name_usekey}&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Use License`)
					.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}\nLicense Use: ${name_usekey}`)
					
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For ${name_usekey}`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
		})
	}
	}


	if(message.content.startsWith(prefix + "unusekey")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Rejoindre le serveur à OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_unusekey = args.join(" ");
		if(!name_unusekey) {
			return message.reply("Veuillez entrez une license valide !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=unuse&license=${name_unusekey}&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Unuse License`)
					.setDescription(`Status: ${res.data.status}\nInfo: ${res.data.info}\nLicense Unuse: ${name_unusekey}`)
					
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For ${name_unusekey}`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
		})
	}
	}



	if(message.content.startsWith(prefix + "countkey")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Rejoindre le serveur à OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		get(`https://developers.auth.gg/LICENSES/?type=count&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Count License`)
					.setDescription(`Vous avez ${res.data.value} license(s) sur votre application.`)
					
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
		})
	}
	}


	if(message.content.startsWith(prefix + "generate")){
		message.delete(message.author);
		if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Rejoindre le serveur à OldModz95]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Demander par ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name_generate = args.join(" ");
		if(!name_generate) {
			return message.reply("Veuillez entrez un pseudo valide !");
		}
		get(`https://developers.auth.gg/LICENSES/?type=generate&days=${name_generate}&amount=1&level=1&authorization=${API}`, {
			headers: {
				'Content-Type': "application/json",
			}
		}).then( (res) => {
			//-----------------------------//
			//           STATS             //
			//-----------------------------//
			try {
			//console.log(res.data)
				let Istats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`Generate License`)
					.setDescription(`License: ${res.data[0]}\nJour(s): ${name_generate}`)
					
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Istats});
			}catch(error)  {
				//console.log(res.data)
				let Estats = new MessageEmbed()
					.setColor(0x36393F)
					.setTitle(`No Found For API Admin`)
					.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
					.setTimestamp()
					.setFooter(`Demander par ${message.author.tag}`)
					message.channel.send({embed: Estats});
			
				}
		}).catch ((error) => {
			return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
		})
	}
	}


/////////////////////////////////////////////////////
//////////////END COMMANDE LICENSE//////////////////
///////////////////////////////////////////////////

/////////////////////////////////////////////////////
/////////////////COMMANDE HWID//////////////////////
///////////////////////////////////////////////////

if(message.content.startsWith(prefix + "infohwid")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Rejoindre le serveur à OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Demander par ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	let content = message.content.split(" ");
	let args = content.slice(1);
	const name_infohwid = args.join(" ");
	if(!name_infohwid) {
		return message.reply("Veuillez entrez un pseudo valide !");
	}
	get(`https://developers.auth.gg/HWID/?type=fetch&authorization=${API}&user=${name_infohwid}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Get HWID information`)
				.setDescription(`Status: ${res.data.status}\nUtilisateur: ${name_infohwid}\nHWID: ${res.data.value}`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_infohwid}`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}



if(message.content.startsWith(prefix + "resethwid")){
	message.delete(message.author);
	if(message.channel.id != idsalon){// Cette commande ne peux être utiliser que dans ce channel
		let embed_Send = new MessageEmbed()
		.setURL(invite_discord_Old)
		.setTitle('[Rejoindre le serveur à OldModz95]')
		.setColor("RANDOM")
		.setDescription(`${salon_predefini}`)
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`Demander par ${message.author.username}`)
	message.channel.send(embed_Send)
	} else {
	let content = message.content.split(" ");
	let args = content.slice(1);
	const name_resethwid = args.join(" ");
	if(!name_resethwid) {
		return message.reply("Veuillez entrez un pseudo valide !");
	}
	get(`https://developers.auth.gg/HWID/?type=reset&authorization=${API}&user=${name_resethwid}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
		//console.log(res.data)
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Reset HWID`)
				.setDescription(`Status: ${res.data.status}\nUtilisateur: ${name_resethwid}\Action: ${res.data.info}`)
				
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
			message.channel.send({embed: Istats});
		}catch(error)  {
			//console.log(res.data)
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`No Found For ${name_resethwid}`)
				.setDescription(`Status: ${res.data.status}\ninfo: ${res.data.info}`)
				.setTimestamp()
				.setFooter(`Demander par ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: Utilisateur n'a pas trouvé.`);
	})
}
}

/////////////////////////////////////////////////////
///////////////END COMMANDE HWID////////////////////
///////////////////////////////////////////////////



})//

client.login("TOKEN");
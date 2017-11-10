const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
const YTDL = require("ytdl-core");
const fs = require('fs');


var voiceChannelID = '298853508298571798';

var questions = ['Kys','Yes','Maybe','No','Ask again','Fuck off cunt','Definitely','Probably'];
var rolls = ['1','2','3','4','5','6','7','8','9','10'];
var scale = ['1','2','3','4','2','2','2','2'];
var dick = ['8=========================================D','8=D','8D You have a micropenis boaws','8=============================================================================================================D','8=======================D','8======================================D'];


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
var servers ={};

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

	
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '?') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong Ping Pong, China win'
                });
            break;

			case 'coon':
				bot.sendMessage({
					to:channelID,
					message: 'Coon'
				});
			break;	
			case 'ask':
			var questionsxd =[ Math.floor(Math.random()*questions.length|0)];
				bot.sendMessage({
					to:channelID,
					message: (questions[questionsxd])

				});
			break;	
			
			case 'help':
			bot.sendMessage({
				to:channelID,to: userID,
				message:'coon,ask,ping,kms,normies,roll,scale,dick,nigger,kys,bait,'
			})
					bot.sendMessage({
			to:channelID,to: userID,
			message:('join,play,gas,deja,run,leave,money,dead')
			});	 
			break;
			case 'kys':
			bot.sendMessage({
				to:channelID,
				message:'Kill yourself you nigerfagot',tts:true 
			});
			break;
			case 'normies':
			bot.sendMessage({
				to: channelID,
				message:'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'	
			});	
			break;

			
			case 'roll':
			var roll =[Math.floor(Math.random()*rolls.length|0)];
			bot.sendMessage({
				to: channelID,
				message:(roll + ' out of 10')	
			});
			break;
			

			
		case 'scale':
		var scales =[Math.floor(Math.random()*100)];
		bot.sendMessage({
			to: channelID,
			message:(scales + ' out of 100')
		});
		break;

		case 'high':
		bot.sendMessage({
			to: channelID,
			message:('$420 out of 69$'),tts:true
		})
		bot.sendMessage({
			to:channelID,
			message:('You have found a meme')
		});	 
		break;

		case 'nigger':
		bot.sendMessage({
			to: channelID,
			message:'!play https://www.youtube.com/watch?v=AAcnFOcu57s',bot:false
		});	
		break;

		
		case 'dick':
		
		var dicks =[Math.floor(Math.random()*dick.length|0)];
		bot.sendMessage({
			to: channelID,
			message:('<@'+userID+'> '+ dick[dicks])	
		});
		break;
		case 'kms':
		bot.sendMessage({
			to: channelID, to:userID,
			message:('<@'+userID+'>' + ' Kill yourself you faggot')	
		});	
		break;
		
		case 'bait':
		bot.sendMessage({
			to: channelID,
			message:('Jeh baited faggot'),tts:true
		});	
		break;
		
		case 'dad':
		bot.sendMessage({
			to: channelID,
			message:("You're not my dad!"),tts:true
		});	
		break;
		
		case 'money':
		bot.uploadFile({
			to: channelID,
			file:'money.mp4'
		});	
		break;
		
		// Test Commands
		case 'test':
		bot.setPresence({
		game:"lol",
		callback: Function
		});
		break;
		
		case 'tes':
		bot.deleteMessage({channelID,
		messageID:'372892898108243983',	
		});
		break;
		
		case 'te':
		bot.getMessage({channelID,
		messageID:'372886506593058818'	
	
		});
		break;
		

		//The Start of Music Commands
		
				case 'who':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('xd.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
			case 'deja':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('Deja Vu.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
				case 'gas':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('Gas.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
				case 'run':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('90s.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
				case 'join':
		bot.joinVoiceChannel(
			voiceChannelID
		);	
		break;
		
		case 'leave':
		bot.leaveVoiceChannel(
			voiceChannelID
		
		);	
		break;
		
		case 'play':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('myFile.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
		case 'stop':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('myFile.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
		case 'dead':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('wakemeup.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			break;
			
					case 'dean':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('Dean.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			break;
			
			case 'REEEEEEEE':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('REEEEEEEE.mp4.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			break;
			
			case 'gay':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('gay.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
		break;
						case 'who1':
		bot.getAudioContext(
			voicechannelID,function(error, stream){
			fs.createReadStream('xd.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
			case 'deja1':
		bot.getAudioContext(
			voicechannelID,function(error, stream){
			fs.createReadStream('Deja Vu.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
				case 'gas1':
		bot.getAudioContext(
			voicechannelID,function(error, stream){
			fs.createReadStream('Gas.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
				case 'run1':
		bot.getAudioContext(
			voicechannelID,function(error, stream){
			fs.createReadStream('90s.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
				case 'join1':
		bot.joinVoiceChannel(
			voicechannelID
		);	
		break;
		
		case 'leave1':
		bot.leaveVoiceChannel(
			voicechannelID
		
		);	
		break;
		
		case 'play1':
		bot.getAudioContext(
			voiceChannelID,function(error, stream){
			fs.createReadStream('myFile.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
		case 'stop1':
		bot.getAudioContext(
			voicechannelID,function(error, stream){
			fs.createReadStream('myFile.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;
		case 'dead1':
		bot.getAudioContext(
			voicechannelID,function(error, stream){
			fs.createReadStream('wakemeup.mp3').pipe(stream,{end:false});	
			stream.on('done',function(){
			});
			});	
			
		break;

		default:
		bot.sendMessage({
		to: channelID,
		message:('That is not a command boaws!'),tts:true
		});
		break;
		
     }
	}
});
	


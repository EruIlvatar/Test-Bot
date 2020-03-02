const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NjgzNjk2NjgxMDczNjM5NDY1.XlvhBQ.m-L-r6pDBwCgd3RD_e934sfAeW0';

const PREFIX = '*';

let quotes = ["Seize the means of production!", "Die, you capitalist pig!", "cyka blyat.", "I'm against post-modernists, because they reject materialism.", "We're all equal on this server.",
"Any man who is not a communist at the age of 20, is a fool.", "Communism isn't just a hobby, it's a lifestyle.", "There are hundreds of genders, though comrade is the most valid one.",
"Eat the rich.", "Abolish all private property, except for my socks.", "Communism is a religion that is inspired, directed and motivated by the Devil himself who has declared war against Almighty God.",
"Not to get political but staying friends with transphobes isn't goth.", "Capitalism? More like Crapitalism. Amirite folks? - Karl Swagalicious MarxxRawrXD",
"Don't use words like *policeman* or *policewoman*. Use the gender neutral terms like *tools of the capitalist bourgeoisie and enemy of the people.*", "When life gives you lemons destroy capitalism.",
"The embers of revolution will once more be ignited!", "Huzzah forward comrade!", "Broke but woke!", "The communist manifesto should have 69 pages.", "There is no ethical consumption under capitalism.", "Stalinists can get fucked."   ];
let prevQuote = 0;

bot.on('ready', () =>{
  console.log('This comrade is ready to fight the good fight!');
})

bot.on('guildMemberAdd', member =>{

  const channel = member.guild.channels.find(channel => channel.name === "polite-discussions");
  if(!channel) return;

  channel.send(`Greetings ${member}, welcome to the good fight comrade! If you need my help just type wut with a * in front and you'll see what I can do for you. :)`)
});

bot.on('message', message=>{

//commands

  let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
      case 'wut':
        message.channel.sendMessage('Find guidance for your life through these commands: *inspire*, *manifesto* and do not forget the prefix.')
        break;

      case 'manifesto':
        message.channel.sendMessage('A spectre is haunting Europe – the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies. Where is the party in opposition that has not been decried as communistic by its opponents in power? Where is the opposition that has not hurled back the branding reproach of communism, against the more advanced opposition parties, as well as against its reactionary adversaries? Two things result from this fact: I. Communism is already acknowledged by all European powers to be itself a power. II. It is high time that Communists should openly, in the face of the whole world, publish their views, their aims, their tendencies, and meet this nursery tale of the Spectre of Communism with a manifesto of the party itself. To this end, Communists of various nationalities have assembled in London and sketched the following manifesto, to be published in the English, French, German, Italian, Flemish and Danish languages.')
        break;

      case 'terf':
        message.channel.sendMessage('https://66.media.tumblr.com/1e11a3ee57c8b8d141a7fb35ac730dfc/ccece45d931bde4d-49/s640x960/9ddc08534d9df3f4112da0b6b217ee05ed1eba7e.jpg')
        break;


      case 'inspire':
        var num = Math.floor(Math.random() * 22);
        while(num == prevQuote){
          num = Math.floor(Math.random() * 22);
        }
        message.channel.sendMessage(quotes[num]);
        prevQuote = num;
        break;
    }


//detect words

  if(message.content.includes(' my ') || message.content.includes('My ') || message.content.includes(' MY ')) {
    message.reply('I think you misspelled our there bud.');
}


  if(message.content.includes('goodnight') || message.content.includes('Goodnight') || message.content.includes('good night') || message.content.includes('Good night')) {
    message.reply('Sleep well and replenish your strength comrade! The revolution will come :) *muah* ');
}


  if(message.content.includes('69') || message.content.includes('420') || message.content.includes('sixtynine') || message.content.includes('four twenty')) {
    message.react('😏');
    message.react('680106777664421904');
}

  if(message.content.includes('tired') || message.content.includes('Tired') || message.content.includes('sleepy') || message.content.includes('Sleepy')) {
    message.reply('take a nap or do a drug, that will keep you awake.');
}

  if(message.content.includes('how are you') || message.content.includes('How are you') || message.content.includes('Are you okay') || message.content.includes('How have you been')) {
    message.reply('I am doing fan-freaking-tastic, thanks for asking.');
}

  if(message.content.includes('oh my god') || message.content.includes('omg') || message.content.includes('oh lord') || message.content.includes('god damnit')) {
    message.reply('This is a christian server. YOU WILL NOT USE THE LORDS NAME IN VAIN, DO YOU UNDERSTAND ME YOU FUCK GOBLIN?! ');
}





//server control slurs

  if(message.content.includes('tranny') || message.content.includes('Tranny') || message.content.includes('TRANNY')) {
    message.reply('https://pics.me.me/shut-the-fuck-up-transphobe-we-are-all-inclusive-57435933.png');
    message.react('🤮');
}


  if(message.content.includes('faggot') || message.content.includes('Faggot') || message.content.includes('FAGGOT') || message.content.includes('fag') || message.content.includes('Fag') || message.content.includes('FAG')) {
    message.reply('https://i.ytimg.com/vi/Eb9WpZk9Lok/maxresdefault.jpg');
    message.react('🤮');
}


if(message.content.includes('nigger') || message.content.includes('Nigger') || message.content.includes('NIGGER')) {
  message.reply('https://i.ytimg.com/vi/Eb9WpZk9Lok/maxresdefault.jpg');
  message.react('🤮');
}


});


bot.login(process.env.token);

const commands_list = [
  {
    name: "ban",
    description: "A command that bans a member",
    category: "ADMIN",
    usage: "ban [user] (reason)",
  },
  {
    name: "kick",
    description: "A command that kicks a specified member",
    category: "ADMIN",
    usage: "kick [user] (reason)",
  },
  {
    name: "lock",
    description: "A command that locks a channel for specified time/permanent",
    category: "ADMIN",
    usage: "lock [channel] (time) (reason)",
  },
  {
    name: "lockdown",
    description: "A command that locks a channel for specified time/permanent",
    category: "ADMIN",
    usage: "lockdown (time)",
  },
  {
    name: "mute",
    description: "Mute a specified member for some time/permanent",
    category: "ADMIN",
    usage: "mute [user] (time) (reason)",
  },
  {
    name: "purge",
    description: "Delete multiple messages at once",
    category: "ADMIN",
    usage: "purge [amount] || [amount] (subcommand) (subcommand argument)",
  },
  {
    name: "role",
    description: "A command that gives/removes a role to someone.",
    category: "ADMIN",
    usage: "role [user] [role] || [subcommand] [user] [role]",
  },
  {
    name: "setprefix",
    description:
      "Set a prefix for the server or output the prefix of the server",
    category: "ADMIN",
    usage: "setprefix (new-prefix)",
  },
  {
    name: "setwelcomechannel",
    description:
      "Set a prefix for the server or output the prefix of the server",
    category: "ADMIN",
    usage: "setwelcomechannel [channel]",
  },
  {
    name: "slowmode",
    description: "Enables SlowMode for a Channel",
    category: "ADMIN",
    usage: "slowmode [time]",
  },
  {
    name: "spam",
    description: "Spam tags to someone!",
    category: "ADMIN",
    usage: "spam [user]",
  },
  {
    name: "temprole",
    description:
      "A command that gives/removes a role to someone, for a specified time.",
    category: "ADMIN",
    usage: "temprole [user] [time] [role]",
  },
  {
    name: "ticket",
    description: "A command to open a ticket",
    category: "ADMIN",
    usage: "ticket (subcommand)",
  },
  {
    name: "timeout",
    description: "Timeout a specified member for some time",
    category: "ADMIN",
    usage: "timeout [user] [time] (reason)",
  },
  {
    name: "unban",
    description: "A command that unbans a member",
    category: "ADMIN",
    usage: "unban [user-id]",
  },
  {
    name: "unlock",
    description: "A command that unlocks a channel",
    category: "ADMIN",
    usage: "unlock [user]",
  },
  {
    name: "unmute",
    description: "A command that unmutes a member",
    category: "ADMIN",
    usage: "unmute [user]",
  },
  {
    name: "balance",
    description: "It gives you your current balance",
    category: "CURRENCY",
    usage: "balance [user]",
  },
  {
    name: "beg",
    description: "It begs you.",
    category: "CURRENCY",
    usage: "beg [user]",
  },
  {
    name: "rich",
    description: "It outputs the most rich people in the server.",
    category: "CURRENCY",
    usage: "rich",
  },
  {
    name: "setcoins",
    description: "Sets an amount of coins for a user.",
    category: "CURRENCY",
    usage: "setcoins [user] [coins]",
  },
  {
    name: "birb",
    description: "A command that shows a random birb image.",
    category: "FUN",
    usage: "birb",
  },
  {
    name: "cat",
    description: "A command that shows a random cat image.",
    category: "FUN",
    usage: "cat",
  },
  {
    name: "dog",
    description: "A command that shows a random dog image.",
    category: "FUN",
    usage: "dog",
  },
  {
    name: "fox",
    description: "A command that shows a random fox image.",
    category: "FUN",
    usage: "fox",
  },
  {
    name: "image",
    description: "A command that shows a random image.",
    category: "FUN",
    usage: "image",
  },
  {
    name: "joke",
    description: "Make any sentence out of emoji's",
    category: "FUN",
    usage: "joke",
  },
  {
    name: "kangaroo",
    description: "A command that shows a random kangaroo image.",
    category: "FUN",
    usage: "kangaroo",
  },
  {
    name: "koala",
    description: "A command that shows a random koala image.",
    category: "FUN",
    usage: "koala",
  },
  {
    name: "panda",
    description: "A command that shows a random panda image.",
    category: "FUN",
    usage: "panda",
  },
  {
    name: "raccoon",
    description: "A command that shows a random raccoon image.",
    category: "FUN",
    usage: "raccoon",
  },
  {
    name: "redpanda",
    description: "A command that shows a random red-panda image.",
    category: "FUN",
    usage: "redpanda",
  },
  {
    name: "rps",
    description: "Play rps with the bot.",
    category: "FUN",
    usage: "rps [your choice]",
  },
  {
    name: "selfmute",
    description: "A selfmute command.",
    category: "FUN",
    usage: "selfmute",
  },
  {
    name: "uno",
    description: "Play Uno with your friends",
    category: "FUN",
    usage: "uno",
  },
  {
    name: "youtubetogether",
    description: "See vids with other people.",
    category: "FUN",
    usage: "youtubetogether [voice-channel]",
  },
  {
    name: "avatar",
    description: "Displays your avatar.",
    category: "INFORMATION",
    usage: "avatar (user)",
  },
  {
    name: "commandsrun",
    description: "It shows the amount of commands run today",
    category: "INFORMATION",
    usage: "commandsrun",
  },
  {
    name: "help",
    description: "A general help command.",
    category: "INFORMATION",
    usage: "help",
  },
  {
    name: "messages",
    description: "It shows the amount of messages send today!",
    category: "INFORMATION",
    usage: "messages",
  },
  {
    name: "ping",
    description: "A command which replies with pong!",
    category: "INFORMATION",
    usage: "ping",
  },
  {
    name: "serverinfo",
    description: "It shows the amount of messages send today!",
    category: "INFORMATION",
    usage: "serverinfo",
  },
  {
    name: "weather",
    description: "See the weather for a provided location.",
    category: "INFORMATION",
    usage: "weather",
  },
  {
    name: "givexp",
    description: "Give xp to someone",
    category: "LEVELING",
    usage: "givexp [user] [xp]",
  },
  {
    name: "leaderboard",
    description: "The leaderboard of the server in xp.",
    category: "LEVELING",
    usage: "leaderboard (subcommand)",
  },
  {
    name: "rank",
    description: "It tells you what level you are",
    category: "LEVELING",
    usage: "rank (user)",
  },
  {
    name: "requiredxp",
    description: "It tells you how many xp for a level.",
    category: "LEVELING",
    usage: "requiredxp [level]",
  },
  {
    name: "setxp",
    description: "Set xp to someone",
    category: "LEVELING",
    usage: "setxp [user] [xp]",
  },
  {
    name: "voicegivexp",
    description: "Give voice xp to someone",
    category: "LEVELING",
    usage: "voicegivexp [user] [xp]",
  },
  {
    name: "voicesetxp",
    description: "Set xp to someone",
    category: "LEVELING",
    usage: "voicesetxp [user] [xp]",
  },
  {
    name: "color",
    description: "Learn the info about a color",
    category: "MISC",
    usage: "color [hex-code]",
  },
  {
    name: "emojify",
    description: "Make any sentence out of emoji's",
    category: "MISC",
    usage: "emojify [hex-code]",
  },
  {
    name: "button",
    description: "A command that replies with a BUTTON!",
    category: "NORMAL",
    usage: "button",
  },
  {
    name: "buttonroles",
    description: "A command that replies with a BUTTON!",
    category: "NORMAL",
    usage: "buttonroles",
  },
];

export { commands_list };

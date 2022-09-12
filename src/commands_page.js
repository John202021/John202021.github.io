import { commands_list } from "./commands_list.js";
console.log(commands_list);

const commands = document.getElementById("commands");
const formatted_commands = commands_list.map(c => `=${c.name} | Description: ${c.description}`);
const final_commands = formatted_commands.join("<br><br>");

commands.innerHTML = final_commands;
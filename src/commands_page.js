import { commands_list } from "./commands_list.js";

const commands_dom = document.getElementById("commands").tBodies[0];
const formatted_commands_names = commands_list.map(c => "=" + c.name);
const formatted_commands_descriptions = commands_list.map(c => c.description);

let table_row1_array = [];
let table_row2_array = [];

formatted_commands_names.forEach(name => {
    let td = document.createElement("td");
    td.innerHTML = name;
    table_row1_array.push(td);
});

formatted_commands_descriptions.forEach(descr => {
    let td = document.createElement("td");
    td.innerHTML = descr;
    table_row2_array.push(td);
});

function formatTableData() {
    for (let index = 0; index < commands_list.length; index++) {
        const name_data = table_row1_array[index];
        const descr_data = table_row2_array[index];

        let tableRow = document.createElement("tr");
        tableRow.appendChild(name_data);
        tableRow.appendChild(descr_data);

        commands_dom.appendChild(tableRow);
    }
}

formatTableData();

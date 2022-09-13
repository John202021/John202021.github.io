import { commands_list } from "./commands_list.js";

const mediaQuery = window.matchMedia("(max-width: 715px)");
const commands_dom = document.getElementById("commands").tBodies[0];
const formatted_commands_names = commands_list.map(c => c.name);
const formatted_commands_descriptions = commands_list.map(c => c.description);
const formatted_commands_usages = commands_list.map(c => "=" + c.usage);
console.log(commands_dom);

let table_row1_array = [];
let table_row2_array = [];
let table_row3_array = [];

formatted_commands_names.forEach((name) => {
    let td = document.createElement("td");
    td.innerHTML = name;
    td.setAttribute("class", "name-row");
    table_row1_array.push(td);
});

formatted_commands_descriptions.forEach((descr) => {
    let td = document.createElement("td");
    td.innerHTML = descr;
    td.setAttribute("class", "descr-row");
    table_row2_array.push(td);
});

formatted_commands_usages.forEach((usage) => {
    let td = document.createElement("td");
    td.innerHTML = usage;
    td.setAttribute("class", "usage-row");
    table_row3_array.push(td);
});

function formatTableData(bool = false) {
    let rowCount = commands_dom.rows.length;
    for (var i = 1; i < rowCount; i++) {
        commands_dom.deleteRow(1);
    }

    for (let index = 0; index < commands_list.length; index++) {
        const name_data = table_row1_array[index];
        const descr_data = table_row2_array[index];
        const usage_data = table_row3_array[index];

        let tableRow = document.createElement("tr");
        if (mediaQuery.matches || bool) {
            let tableRow2 = document.createElement("tr");
            let tableRow3 = document.createElement("tr");
            tableRow.appendChild(name_data);
            commands_dom.appendChild(tableRow);

            tableRow2.appendChild(descr_data);
            commands_dom.appendChild(tableRow2);

            tableRow3.appendChild(usage_data);
            commands_dom.appendChild(tableRow3);
        } else {
            tableRow.appendChild(name_data);
            tableRow.appendChild(descr_data);
            tableRow.appendChild(usage_data);

            commands_dom.appendChild(tableRow);
        }
    }
    commands_dom.style.border = "2px solid rgb(140, 138, 138)"
    mediaQuery.addEventListener("change", toggleTableRows);
}

formatTableData();

function toggleTableRows(event) {
    formatTableData(event.matches);
}
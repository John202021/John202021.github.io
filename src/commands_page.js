import { commands_list } from "./commands_list.js";

const mediaQuery = window.matchMedia("(max-width: 900px)");
let commands_dom = document.getElementById("commands").querySelector("tbody");
const categories_dom = document.getElementById("categories").querySelector("ul");
let lastLiElem = document.getElementById("all-choice");

let current_category;
let categories_list = [];
commands_list.forEach(c => {
    if (!categories_list.includes(c.category)) return categories_list.push(c.category);
    return;
})

let table_row1_obj = {};
let table_row2_obj = {};
let table_row3_obj = {};

let commands_categories_obj = {};
categories_list.forEach(category => {
    commands_categories_obj[category] = [];
    table_row1_obj[category] = [];
    table_row2_obj[category] = [];
    table_row3_obj[category] = [];
});

commands_list.forEach(command => {
    commands_categories_obj[command.category].push(command);

    let td = document.createElement("td");
    td.innerHTML = command.name;
    td.setAttribute("class", "name-col");
    table_row1_obj[command.category].push(td);

    let td2 = document.createElement("td");
    td2.innerHTML = command.description + ".";
    td2.setAttribute("class", "descr-col");
    table_row2_obj[command.category].push(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = "=" + command.usage;
    td3.setAttribute("class", "usage-col");
    table_row3_obj[command.category].push(td3);
})

Object.keys(commands_categories_obj).forEach(category => {
    let li = document.createElement("li");

    let lowerCaseCat = category.toLocaleLowerCase();
    let firstLetter = lowerCaseCat.charAt(0).toLocaleUpperCase();
    let formatted_categ = firstLetter + lowerCaseCat.slice(1);

    li.innerHTML = formatted_categ;
    li.setAttribute("class", "category");
    categories_dom.appendChild(li);
})

console.log(categories_dom);
categories_dom.addEventListener("click", handleCategoryClick);

function formatTableData(categoryChoice, bool = false) {
    mediaQuery.addEventListener("change", toggleTableRows);

    while(commands_dom.rows.length > 0) {
        commands_dom.deleteRow(0);
      }

    if ((categoryChoice || current_category) && categoryChoice !== "All") {
        const category = categoryChoice?.toLocaleUpperCase() || current_category;
        console.log("Category " + category);
            outputCommandTable(category, bool);
        current_category = category;
        console.log("Current category " + current_category);
        return;
    }
    Object.keys(commands_categories_obj).forEach(category => {
        outputCommandTable(category, bool);
    })
}
formatTableData();

function toggleTableRows(event) {
    formatTableData("", event.matches);
}

function outputCommandTable(category, bool) {

    for (let index = 0; index < commands_categories_obj[category].length; index++) {
        const name_data = table_row1_obj[category][index];
        const descr_data = table_row2_obj[category][index];
        const usage_data = table_row3_obj[category][index];

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

}

function handleCategoryClick(event) {
    if (event.target.tagName === "LI") {
        event.target.style.background = "rgb(160, 27, 69)";
        if (lastLiElem && lastLiElem.innerText !== event.target.innerText) lastLiElem.style.background = "transparent";

        formatTableData(event.target.innerText);
        lastLiElem = event.target;
    }
    return;
}
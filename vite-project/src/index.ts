import "./mystyles.css";

const user = "John Doe";

console.log(`Hello, ${user}! Welcome to the Vite project.`);

const title = document.createElement("h1");
title.textContent = `Hello, ${user}! Welcome to the Vite project.`;

document.body.appendChild(title);

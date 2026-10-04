// const user = "John Doe";

// console.log(`Hello, ${user}! Welcome to the Vite project.`);

// const title = document.createElement("h1");
// title.textContent = `Hello, ${user}! Welcome to the Vite project.`;

// document.body.appendChild(title);
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";

const root = createRoot(document.getElementById("root")!);

root.render(<HelloComponent />);

import { createLoginForm } from "./M-001-Lab-Login";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");
app!.innerHTML = "<p>Hello World!</p>";

createLoginForm(app!);

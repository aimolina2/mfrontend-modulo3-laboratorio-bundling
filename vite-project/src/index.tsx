import config from "./config";
import styles from "./mystyles.module.css";

(console.log(`Api server is ${config.API_BASE}`),
  console.log(
    `Feature A is ${config.IS_FEATURE_A_ENABLED ? "enabled" : "disabled"}`,
  ));

const title = document.createElement("h1");
title.textContent = `Hello, this is a h1 element create with css module`;
title.classList.add(styles.title);
document.body.appendChild(title);

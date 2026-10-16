import { type FC } from "react";
import config from "./config";

export const HelloComponent: FC = () => {
  (console.log(`Api server is ${config.API_BASE}`),
    console.log(
      `Feature A is ${config.IS_FEATURE_A_ENABLED ? "enabled" : "disabled"}`,
    ));
  return (
    <>
      <h2>Hello from React and Vite!</h2>
      <p>Api server is {config.API_BASE}</p>
      <p>Feature A is {config.IS_FEATURE_A_ENABLED ? "enabled" : "disabled"}</p>
    </>
  );
};

import { type FC } from "react";
import config from "./config";

export const HelloComponent: FC = () => {
  return (
    <>
      <h2>Hello from React and Vite!</h2>
      <p>Api server is {config.API_BASE}</p>
      <p>Feature A is {config.IS_FEATURE_A_ENABLED ? "enabled" : "disabled"}</p>
    </>
  );
};

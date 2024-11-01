/* @refresh reload */
import { render } from "solid-js/web";
import AppWrapper from "./App";
import "./index.css";

const root = document.getElementById("root");

render(() => <AppWrapper />, root!);

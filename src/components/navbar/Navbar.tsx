import React, { type JSX } from "react";
import Row from "./components/Row";
import Logo from "../ui/Logo";
import "./css/navbar.css";
import { ArrowDownToLine, Clipboard, FileCode, Save } from "lucide-react";
import Button from "../ui/Button/Button";
export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <Row>
        <Logo />
        <div
          style={{ height: "40px", background: "#6c6d72", width: "2px" }}
        ></div>
        <ArrowDownToLine color={"#6c6d72"} />
        <FileCode color={"#6c6d72"} />
      </Row>
      <Row>
        <Clipboard color={"#6c6d72"} />
        <Button className="save_changes_btn">
          <Save color="#fff" size={"1rem"} />
          Save Changes
        </Button>
      </Row>
    </nav>
  );
}

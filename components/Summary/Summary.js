import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import classes from "./Summary.module.css";

const Summary = ({ summary }) => {
    return (
        <ReactMarkdown className={classes["summary-description"]}>
            {summary}
        </ReactMarkdown>
    );
};

export default Summary;

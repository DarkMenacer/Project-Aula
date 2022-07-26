import React from "react";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import TextEntry from "../../Components/Pranav/Text Entry/TextEntry";
import Button from "../../Components/Pranav/Button/Button";
import "./CreateEvents.css"

const CreateEvents = () => {

    /* Strings */
    const inputName = "Enter Event Name";
    const inputParticipant = "Enter Participant Name";
    const btnText = "Create Event";
    const informative = "Enter the details of event";

    return (
        <div className="parent_cre_eve">
            <div className="content_cre_eve">
                <Wordmark prompt={informative} variation={"direction"}/>
                <div className="input_list">
                    <TextEntry prompt={inputName} type={"text"} name={"inputName"}/>
                    <TextEntry prompt={inputParticipant} type={"text"} name={"inputParticipant"}/>
                </div>
                <Button prompt={btnText} variation={"solid_btn"}/>
            </div>
        </div>
    );
}

export default CreateEvents;
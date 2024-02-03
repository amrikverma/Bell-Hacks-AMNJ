import React, { useState } from "react";

const EmgBtn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        // Handle emergency button click event here (e.g., send email)
        // You can use the email and password state variables if needed
        console.log("Emergency button clicked!");
    };

    return (
        <div style={{ position: "fixed", bottom: "10px", left: "10px", zIndex: "1000" }}>
            <button onClick={handleClick} style={{ padding: "0", border: "none", background: "none" }}>
                <img 
                    src="https://th.bing.com/th/id/R.5e6d8788a6cdc41aae6d7a4b131ec2f8?rik=TPPufOG2LggJxA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdcr%2f6yG%2fdcr6yGrKi.jpg&ehk=ze5MszvAz9lfvLBE4oIcWjNfk7GHGz2YkPJGsMOcyPY%3d&risl=&pid=ImgRaw&r=0" 
                    alt="Emergency Button"
                    style={{ width: "30px", height: "30px" }} // Adjust the width and height as needed
                />
            </button>
        </div>
    );
};

export default EmgBtn;

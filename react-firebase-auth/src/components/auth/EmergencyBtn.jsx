import React, { useState } from "react";
import emailjs from '@emailjs/browser'

const EmgBtn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8rvo9b9', 'template_k8qolbg', e.target, 'c_2qCBvKJ3ocqXu5x')
    };

    return (
        <div id="emergencybutton" style={{ position: "fixed", bottom: "10px", left: "10px", zIndex: "1000"}}>
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

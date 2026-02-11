import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./ExperienceTimeline.css";

const ExperienceTimeline = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const experienceData = [
        {
            role: "Senior Frontend Developer",
            company: "Deloitte",
            date: "2024 - Present",
            description: "Leading frontend development for enterprise applications using React and TypeScript. Integrated 3rd party API's and developed new features for the application.",
            tech: ["ReactJs", "TypeScript", "Redux", "Material UI"],
        },
        {
            role: "Software Engineer",
            company: "Tata Consultancy Services",
            date: "2020 - 2024",
            description: "Developed responsive web applications and collaborated with UX designers to improve user engagement.",
            tech: ["JavaScript", "ReactJs", "ReactNative", "Firebase"],
        },
    ];

    return (
        <div className="timeline-wrapper" id="experience">
            <div className="timeline-heading">
                <span style={{ color: darkMode ? "white" : "" }}>My Work</span>
                <span>Experience</span>
            </div>

            <div className="timeline-container">
                {experienceData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot" style={{ borderColor: darkMode ? "var(--orange)" : "" }}></div>
                        <div className="timeline-content" style={{
                            background: darkMode ? "rgba(255, 255, 255, 0.1)" : "",
                            color: darkMode ? "white" : ""
                        }}>
                            <div className="timeline-header">
                                <h3>{item.role}</h3>
                                <span className="company">{item.company}</span>
                                <span className="date">{item.date}</span>
                            </div>
                            <p className="description">{item.description}</p>
                            <div className="tech-stack">
                                {item.tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;

import React, { useContext } from "react";
import "./PortfolioModal.css";
import { themeContext } from "../../Context";
import CloseIcon from '@mui/icons-material/Close';

interface ProjectData {
    img: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
}

interface PortfolioModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

const PortfolioModal = ({ project, onClose }: PortfolioModalProps) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: darkMode ? "var(--black)" : "",
                    color: darkMode ? "white" : ""
                }}
            >
                <button className="modal-close" onClick={onClose} style={{ color: darkMode ? "white" : "" }}>
                    <CloseIcon />
                </button>

                <img src={project.img} alt={project.title} className="modal-img" />

                <div className="modal-body">
                    <h2 className="modal-title">{project.title}</h2>
                    <p className="modal-desc">{project.description}</p>

                    <div className="modal-tech">
                        {project.tech.map((t, i) => (
                            <span key={i} className="tech-tag">{t}</span>
                        ))}
                    </div>

                    <div className="modal-actions">
                        <a href={project.link} target="_blank" rel="noreferrer" className="button i-button">
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;

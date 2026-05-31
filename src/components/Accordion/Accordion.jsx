import "./Accordion.css";
import { useState } from "react";

export default function Accordion({
    title,
    subtitle,
    isOpen,
    returnPointer,
    onToggle,
    children,
}) {
    const handleAccordionButton = (e) => {
        onToggle();
        const element = document.getElementById(returnPointer);
        if (!element) return;

        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id={title} className={`accordion ${isOpen ? "open" : ""}`}>
            <button
                className="accordion-header"
                onClick={handleAccordionButton}
                aria-expanded={isOpen}
            >
                <div className="accordion-text">
                    <h2>{title}</h2>

                    {subtitle && (
                        <p>{subtitle}</p>
                    )}
                </div>

                <span className="accordion-icon">
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            <div
                className={`accordion-content ${
                    isOpen ? "open" : ""
                }`}
            >
                <div className="accordion-inner">
                    {children}
                </div>
            </div>
        </div>
    );
}
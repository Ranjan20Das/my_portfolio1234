import React from 'react';
import IBM_Certificate from "../assets/IBM_Certificate.pdf";
import NIELT_Certificate from "../assets/NIELT_Certificate.pdf";
import AWS_Certificates from "../assets/AWS_Certificates.pdf";
import Cisco_redhat from "../assets/Cisco_redhat.pdf";
import Euphoria_Certificate from "../assets/Euphoria_Certificate.pdf";
import INFOSYS_Certificate from "../assets/INFOSYS_Certificate.pdf";

export default function Certifications() {

    const certifications = [
        {
            id: 1,
            title: "IBM Certification ON AI & ML",
            organization: "IBM",
            year: "2025",
            certificate: IBM_Certificate,
        },
        {
            id: 2,
            title: "NIELT Certificate On Blockchain",
            organization: "NIELT",
            year: "2025",
            certificate: NIELT_Certificate,
        },
        {
            id: 3,
            title: "Euphoria Genx Certificate",
            organization: "Euphoria Genx",
            year: "2025",
            certificate: Euphoria_Certificate,
        },
        {
            id: 4,
            title: "Cisco_Red Hat Certificate",
            organization: "Cisco_Red Hat",
            year: "2025",
            certificate: Cisco_redhat,
        },
        {
            id: 5,
            title: "AWS_certificates",
            organization: "Amazon Web Services",
            year: "2025",
            certificate: AWS_Certificates,
        },
        {
            id: 6,
            title: "INFOSYS Certificate",
            organization: "INFOSYS",
            year: "2025",
            certificate: INFOSYS_Certificate,
        },
        
    ];

    return (
        <section id="certifications" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Certifi<span className="text-primary">cations</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="card-hover bg-card border border-border rounded-lg p-4 text-left"
                        >

                            <h3 className="text-lg font-semibold mb-1">
                                {cert.title}
                            </h3>

                            <p className="text-primary text-sm">
                                {cert.organization}
                            </p>

                            <p className="text-xs text-gray-400 mb-3">
                                {cert.year}
                            </p>

                            <a
                                href={cert.certificate}
                                target="_blank"
                                className="cosmic-button text-xs px-3 py-1"
                            >
                                View Certificate
                            </a>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

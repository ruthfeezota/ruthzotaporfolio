import React from 'react'

function Resume() {
    const onButtonClick = () => {
        const pdfUrl = "PowerAppsDeveloperRuthZotaResume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "PowerAppsDeveloperRuthZotaResume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <>
            <center >
                <button onClick={onButtonClick}>
                Download Resume
                </button>
            </center>
        </>
    );
};


export default Resume

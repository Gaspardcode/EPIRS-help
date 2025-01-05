import React from 'react';

const GitLabLinkButton = ({ repo }) => {
    return (
        <a
            href={`https://gitlab.cri.epita.fr/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "inline-block",
                margin: "10px 0",
                padding: "10px 20px",
                backgroundColor: "#24292e",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
            }}
        >
            View on GitLab
        </a>
    );
};

export default GitLabLinkButton;
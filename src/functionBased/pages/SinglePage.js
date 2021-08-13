import React from "react";
import { useParams } from "react-router-dom"

const SinglePage = () => {
    const aboutData = [
        {
            slug: "about-app",
            title: "About the App",
            description:
                "In this app, you can add, delete, submit, and edit items. " +
                "To edit items, simply double click on it. To resubmit, " +
                "press the 'enter' key. This app will save your data in the " +
                "browser's local storage. Reloading/closing/reopening will " +
                "still grant you access to your to-do items."
        },
        {
            slug: "about-author",
            title: "About the Author",
            description:
                "This app was developed by Brian Chen, a data scientist " +
                "working for Chirality Research. "
        }
    ];

    const { slug } = useParams();
    const aboutContent = aboutData.find(item => item.slug === slug);
    const { title, description } = aboutContent;

    return (
        <div className="main_content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default SinglePage;

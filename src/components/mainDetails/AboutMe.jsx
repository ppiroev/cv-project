/* eslint-disable react/prop-types */
import { useState } from "react"

export default function AboutMe({viewMode, editMode}){
    const [aboutMe, setAboutMe] = useState(" ")
    
    return (
        <div className="about-me">
            <h2>About me </h2>
            <hr />
            <p style={viewMode}>{aboutMe}</p>
            <textarea style={editMode}value={aboutMe} onChange={e => setAboutMe(e.target.value)} cols="35" rows="10"></textarea>
        </div>
    )
}
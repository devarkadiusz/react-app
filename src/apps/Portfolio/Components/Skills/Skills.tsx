import React, { FunctionComponent } from "react";
import { SkillItems } from "./SkillItems";
import "./Skills.sass";

const Skills: FunctionComponent = () => {
    return(<section className="Skills">
        <div className="max-website-width">
            {SkillItems.map((value, index) => {
                return <article key={index}>
                    <span className="title">{value.title}</span>
                    <div className="content">
                        {value.content.map((v, i) => {
                            return <span key={i}>
                                <img alt="" src={v.img} />
                                <p>{v.title}</p>
                            </span>
                        })}
                    </div>
                </article>
            })}
        </div>
    </section>);
}

export default Skills;
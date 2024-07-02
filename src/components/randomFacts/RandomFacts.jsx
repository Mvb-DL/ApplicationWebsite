import React, { useState, useEffect, useRef } from 'react';
import Title from "../common/Title";
import { useGlobalState } from "../../components/changeLang/ChangeLang";

const RandomFacts = () => {

    const { data } = useGlobalState();

    return (

        <div className="random_facts_sc resume-block">

            <div className="container fact-container">

                <div className='dotted-border-left'>

                    <Title titleText={data.titles.title_two} />

                    <div className='fact-box ' style={{ border: "solid 2px white", borderRadius: "15px"}}>

                        <div className="fact-one flex items-center">

                            <ul>
                                <li>Entweder</li>
                                <br></br>
                                <li>Oder</li>
                                <br></br>
                                <li>Entweder</li>
                                <br></br>
                                <li>Oder</li>
                            </ul>
                              
                        </div>

                        <div className="fact-two flex items-center">

                        <ul>
                                <li>Entweder</li>
                                <br></br>
                                <li>Oder</li>
                                <br></br>
                                <li>Entweder</li>
                                <br></br>
                                <li>Oder</li>
                            </ul>
                              
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )

}



export default RandomFacts;
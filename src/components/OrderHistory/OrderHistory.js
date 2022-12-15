import { themeDefault } from '../Authentication/Login';
import axios from "axios";
import React, { useState, useEffect } from "react";
function OrderHistory(props) {

var i =0;
    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/cart/?token=${themeDefault}`
            )
            .then((response) => {
                // console.log(response.data);
             
            });
    }, []);

    
    return (
        <div className='container'>

            <div class="accordion accordion-flush" id={i}>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent={"#"+{i}}>
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderHistory;
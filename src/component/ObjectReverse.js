import React from "react";

function ObjectReverse() {
    // Please write a function to reverse the following nested input value into output value

    // Input:
    let inputValue = {
        hired: {
            be: {
                to: {
                    deserve: "I",
                },
            },
        },
    };

    // Output:
    let outputValue = {
        I: {
            deserve: {
                to: {
                    be: "hired",
                },
            },
        },
    };

    const test = (i) => {
        let reversed;
        let rest = i;

        while (typeof rest === "object") {
            const key = Object.keys(rest)[0];
            const value = Object.values(rest)[0];

            if (reversed) {
                reversed = { [key]: reversed };
            } else {
                reversed = key;
            }

            if (typeof value === "string") {
                reversed = { [value]: reversed };
            }
            rest = value;
        }
        return reversed;
    };
}

export default ObjectReverse;

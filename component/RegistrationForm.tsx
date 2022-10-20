import React, { useState } from "react";

const RegistrationForm = ({data}) => {
    const [inputField, setInputField] = useState(data);

    const handleChange = (index: number, event: any) => {
        event.preventDefault();
        const result = [...inputField];

        const inputItem: any = inputField.find(
            (item) => item.id == event.target.getAttribute("data-index")
        );
        const attribute = event.target.getAttribute("data-type");
        inputItem[attribute] = event.target.value;

        setInputField([...result]);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        console.log([...inputField]);
        console.log("submited the form");
    };
    return (
        <div>
            <h1> Registration </h1>
            <form>
                {data.map((ele, i) => {
                    return (
                        <div key={i}>
                            <label htmlFor={ele.label} className="form-label">
                                {ele.label}
                            </label>
                            <input
                                type={ele.type}
                                onChange={(event) => handleChange(ele.id, event)}
                                data-type={ele.label}
                                data-index={ele.id}
                                className="form-control"
                            ></input>
                        </div>
                    );
                })}
                <button type="submit" onClick={submitHandler}>
                    submit
                </button>
            </form>
        </div>
    );
};


export default RegistrationForm
import React from 'react'
import RegistrationForm from '../component/RegistrationForm'

const data = [
    {
        id: 1,
        label: "Customer Name",
        type: "text",
        isRequired: true,
        validation: null,
        value: null,
    },
    {
        id: 2,
        label: "Customer Email",
        type: "text",
        isRequired: true,
        validation: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}",
        value: null,
    },
    {
        id: 3,
        label: "AWS ID",
        type: "text",
        isRequired: true,
        validation: null,
        value: null,
    },
    {
        id: 4,
        label: "AWS Secrets key",
        type: "password",
        isRequired: true,
        validation: null,
        value: null,
    },
];


const registration = () => {
  return (
    <div>
        <RegistrationForm data={data}/>
    </div>
  )
}

export default registration
import React, { useState } from 'react'
import Display from '../component/Display'




const data = [
  {
    "id": 0,
    "plaginName": "git0",
    "configrationValues": [{ name: "face", value: "551" }, { name: "face1", value: "552" }, { name: "face2", value: "553" }, { name: "face4", value: "5534" }, { name: "face5", value: "5535" }, { name: "face6", value: "553" }]
  }, {
    "id": 1,
    "plaginName": "git1",
    "configrationValues": [{ name: "face", value: "551" }, { name: "face1", value: "552" }, { name: "face2", value: "553" }, { name: "face3", value: "551" }, { name: "face4", value: "551" }, { name: "face5", value: "551" }, { name: "face6", value: "551" }, { name: "face7", value: "551" }, { name: "face8", value: "551" }, { name: "face9", value: "551" }]
  }, {
    "id": 2,
    "plaginName": "git2",
    "configrationValues": [{ name: "face", value: "551" }, { name: "face1", value: "552" }, { name: "face2", value: "553" }]
  }, {
    "id": 3,
    "plaginName": "git3",
    "configrationValues": [{ name: "face", value: "551" }, { name: "face1", value: "552" }, { name: "face2", value: "553" }]
  }, {
    "id": 4,
    "plaginName": "git4",
    "configrationValues": [{ name: "face", value: "551" }, { name: "face1", value: "552" }, { name: "face2", value: "553" }]
  }, {
    "id": 5,
    "plaginName": "git5",
    "configrationValues": [{ name: "face", value: "551" }, { name: "face1", value: "552" }, { name: "face2", value: "553" }]
  }, {
    "id": 6,
    "plaginName ": "git6",
    "configrationValues": [{ name: "face", value: "551" }, { name: "face1", value: "552" }, { name: "face2", value: "553" }]
  }

]

const Manage = () => {
  const [configparamData, setConfiparamData] = useState(data)
  return (
    <div>
      <Display configData={configparamData}></Display>
    </div>
  )
}
export default Manage;


//fetching data

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3001/api/postConfiParameter`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
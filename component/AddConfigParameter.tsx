import React, { useState } from 'react'

const AddConfigParameter = () => {
  const [configName, setConfigName] = useState("");
  const [configVal, setConfigVal] = useState([{ id: 1, name: "", value: "" }]);

  const handleChange = (event: any) => {
    // console.log(event);
    const data = [...configVal];
    const configItem: any = configVal.find((item) => item.id == event.target.getAttribute("data-index"));
    const attribute: string = event.target.getAttribute("data-type");
    configItem[attribute] = event.target.value;
    setConfigVal([...data]);

   

  }

  const addNewIConfiguration = (event: any) => {
    if (configVal.length < 10)
      setConfigVal([...configVal, { id: configVal.length + 1, name: "", value: "" }]);
  }

  const removeIConfiguration = (event: any) => {
    if (configVal.length > 1) {
      const data = [...configVal];
      data.pop();
      setConfigVal([...data]);
    }
  }

  const SaveConfig = (event: any) => {
    event.preventDefault();
    console.log(configName, configVal)

    //posting data ;
    //urls--->
    //http://localhost:3001/api/postConfiParameter
    // https://webhook.site/55398195-389d-4586-a38d-0b3c297630f7
    const sampleData = { configName, configVal }
    fetch('https://webhook.site/55398195-389d-4586-a38d-0b3c297630f7', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sampleData),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <form>
        <div >
          <label className="form-label" htmlFor="ConfigurationName">Configuration:Enter Plugin Name</label>
          <input type="text" className="form-control" id="ConfigurationName" value={configName} onChange={(event) => setConfigName(event.target.value)}></input>
        </div>
        <button type="button" onClick={addNewIConfiguration} disabled={configVal.length > 9}>+</button>
       <p> {configVal.length}</p>
        <button type="button" onClick={removeIConfiguration} disabled={configVal.length < 2}>-</button>

        {configVal.map((element, i) => {
          return (

            <div key={i} style={{ display: 'flex' }}>
              <label htmlFor={i.toString()} className="form-label">Configuration Name{i + 1}</label>
              <input type="text" className="form-control" data-type="name" data-index={i + 1} value={element.name} onChange={handleChange} id={"name" + i.toString()}></input>
              <label htmlFor={i.toString()} className="form-label">Configuration Value{i + 1}</label>
              <input type="text" className="form-control" data-type="value" data-index={i + 1} value={element.value} onChange={handleChange} id={"value" + i.toString()}></input>
            </div>

          );
        })}

        <button type="submit" onClick={SaveConfig}>Submit to Save Config</button>

      </form>

      
    </>
  );
}

export default AddConfigParameter;
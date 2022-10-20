import React, { useState } from 'react'
import styles from "../styles/ColorTheme.module.css";



const ColorTheme = () => {
    const [themeColor, setthemeColor] = useState('#F9CEEE')
    const [font, setFont] = useState('serif')

   
    // ----dropdown------------
    const colorSelectHandler=(e:any)=>{
          const color=e.target.value;
        if (color === 'Blue') {
            setthemeColor('#525E75')
            setFont('Sans-serif')
        }
        else if (color === 'LightGreen') {
            setthemeColor('#B4FF9F')
            setFont('Cursive')
        }
        else if (color === 'Green') {
            setthemeColor('green')
            setFont('Calibri')


        }
        else if (color === 'White') {
            setthemeColor('white')
            setFont('Monaco')

        }
        else if (color === 'Orange') {
            setthemeColor('orange')
            setFont('Brush Script')


        }
        else if (color === 'Yellow') {
            setthemeColor('#F6FFA4')
            setFont('Courier New')


        } else {
            setthemeColor('#FFE59D')
            setFont('Fantasy')

        }



    }

    return (
        <div className={styles.red} style={{
            marginLeft: '1200px',
        }}>
            <style jsx global>{`
        
                  body {
                        background:${themeColor};
                         font-family:${font};
                      }
       
            `}</style>
            {/* -----------------------------dropdown-------------------------- */}
            <select onChange={colorSelectHandler}  >
                      <option value={'Blue'}>blue </option>
                       <option value={"Yellow"}>yellow</option>
                     <option value={"Green"}>Green</option>
                <option value={"LightGreen"}>LightGreen</option>

                     <option value={"Orange"}>orange</option>
                      <option value={"Pink"}>Pink</option>
                <option value={"White"}>White</option>



                  </select>

           {/* -------------------------------------------------------------------------- */}

           

        </div>
    )
}

export default ColorTheme;
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Display.module.css'
import Pagination from './Pagination';
import { configration, configrationValues } from "../models/configration";



const Display: React.FC<{ configData: [configration] }> = ({ configData }) => {
    const [selectPlugin, setSelectPlugin] = useState('');
    const [postsPerPage, setPostsPerPage] = useState(5)
    const [selectedConfigParam, setSelectedConfigParam] = useState([configData[0].configrationValues])
    const [currentPage, setCurrentPage] = useState(1);
    // console.log( selectedConfigParam)

    const pluginClickHandler = (e: any) => {
        setSelectPlugin(e.target.value)
        let updateRes = configData.find((ele: any) => {
            return ele.plaginName === e.target.value
        })
        setSelectedConfigParam(updateRes.configrationValues)
    }

    // Get current posts-------------------------------->
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = selectedConfigParam.slice(indexOfFirstPost, indexOfLastPost);

    
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    //delete post--------------------------------------->
    const deleteHandler = (id: number) => {
        setSelectedConfigParam((oldItems) => {
            return oldItems.filter((ele: any, index: number) => {
                return index !== id
            })
        })

    }


    return (
        <>
            <div className={styles.container} >
                <select onChange={pluginClickHandler}  >
                    {configData.map((ele: any, index: number) => {
                        return <option key={ele.id} value={ele.plaginName} >{ele.plaginName}</option>
                    })}
                </select>

                <select id='postsPerPage' onChange={e => setPostsPerPage(Number.parseInt(e.target.value))}>
                    <option value="5" >5</option>
                    <option value="10">10</option>

                </select>
            </div>

            {/* posts---------  */}
            <ul>
                {
                    currentPosts.map((ele: any, i: number) => {
                        return <> <li key={i}>{ele.name}  {ele.value}
                            <button onClick={() => deleteHandler(i)} disabled={false}>-</button>
                        </li>
                        </>
                    })
                }
            </ul>

            {/* pagiation------- */}
            <Pagination postsPerPage={postsPerPage} totalPosts={selectedConfigParam.length} paginate={paginate} />
            {/* <button onClick={deleteAll}>DeleteAll</button> */}
            <button><Link href={`/Add`}>move to Add Page  </Link></button>

        </>
    )
}

export default Display;
import React,{ useEffect, useState } from 'react'
import Navbar from '../components/Global/Navbar';
import Loader from '../components/Global/Loader/index';
import BreadCrumb from '../components/Global/BreadCrumb/index';
import ScanningInfo from '../components/ScanningDetail/ScanningInfo/index';
import NewTable from '../components/Global/NewTable/';
import axios from 'axios';

const ScanningDetail = (props) => {
    const [scanningInfo, setScanningInfo] = useState({});
    const [scanningFiles, setScanningFiles] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
        document.body.style.backgroundColor = "#FAFAFA";
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/ScanningDetails?scanID=${props.match.params.id}`,
            headers: {
                'Authorization': `Token ${token}`
        }
          })
          .then((res) => {
              setScanningInfo(...res.data[1]);
              setScanningFiles(res.data[2]);
          })
    },[])

    const containerStyle = {
        marginTop: '100px'
    }
    
    let fileData = [];
    scanningFiles.forEach((file) => {
        fileData.push([file.id,file.score,file.file_path])
    })
    
    return (
        scanningFiles.length? (
            <div style={containerStyle}>
                <Navbar />
                <BreadCrumb 
                    currentLayer2={true}/>
                <ScanningInfo 
                    score={scanningInfo.score}
                    scanId={scanningInfo.scan_id}
                    startTime={scanningInfo.start_time}
                    endTime={scanningInfo.end_time}
                    normalOption={scanningInfo.normal_option}
                    advanceOption={scanningInfo.advance_option}
                    customizedOption={scanningInfo.customized_option}/>
                <div style={{margin:'10px 5px 15px 10px'}}>
                    <NewTable 
                        title=""
                        data={fileData}
                        columns={["File ID","Score","File Path"]}
                        nextUrl="/fileDetail/"/>
                </div>
            </div>
        ) : (
            <div style={containerStyle}>
                <Navbar />
                <Loader />
            </div>
        )
    )
}

export default ScanningDetail;

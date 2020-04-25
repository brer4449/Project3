import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
// import { Icon } from 'antd';
import Axios from 'axios';


function FileUpload(props) {

    const [Images, setImages] = useState([])

    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])
        console.log(formData)
        //save the Image we chose inside the Node Server 
        Axios.post('/api/items/uploadImage', formData, config)
            .then(response => {
                console.log(response.data)
                if (response.data.success) {

                    setImages(response.data.image)
                    props.refreshFunction(response.data.image)

                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }


    // const onDelete = (image) => {
    //     const currentIndex = Images.indexOf(image);

    //     let newImages = [...Images]
    //     newImages.splice(currentIndex, 1)

    //     setImages(newImages)
    //     props.refreshFunction(newImages)
    // }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div 
                    style={{
                        width: '150px', height: '120px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <p style={{textAlign:'center'}}>Your Image</p>
                        {/* <Icon type="plus" style={{ fontSize: '3rem' }} /> */}

                       

                     </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '150', height: '120px', overflowX: 'scroll' }}>

                {/* {Images.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))} */}


            </div>

        </div>
    )
}

export default FileUpload
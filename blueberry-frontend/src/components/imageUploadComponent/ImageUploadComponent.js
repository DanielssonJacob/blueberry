import React, { useState, useEffect } from 'react'

export const ImageUploadComponent = (props) => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const sendFile = (cId) => {

        let formData = new FormData();
        formData.append('file', selectedFile);
        

        fetch("http://localhost:8080/changeimage/"+cId,
            {
                body: formData,
                method: "post"
            });
        
    }

    return (
        <div>
            <input type='file' onChange={onSelectFile} />
            {selectedFile && <img style={{ width: "100px" }} src={preview} />}
            {selectedFile && <button onClick={() => sendFile(props.cId)}>Submit</button>}


        </div>
    )
}

import React, {useState} from 'react'
import {Upload, message, Button} from 'antd'
import { InboxOutlined } from '@ant-design/icons';


function DragDrop(props) {

    const {onSelectedImage} = props
    const [files, setFiles] = useState([])
    
    const onChange = (info) => {
        const { status } = info.file;
        switch (status) {
            case 'uploading':
                setFiles([info.file]);
                break;
            case 'done':
                message.success(`${info.file.name} file uploaded successfully.`);
                setFiles([info.file]);
                return [info.file]
                break;
            case 'error':
                message.error(`${info.file.name} file upload failed.`);
                setFiles([]);
                break;
            default:
                setFiles([]);
        }
    }

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
    };
    return (
        <Upload 
            {...props} 
            fileList={files}
            customRequest={dummyRequest}
            onChange={onChange}
            >
            <Button icon={<InboxOutlined/>} ></Button>
        </Upload>
    )
}

export default DragDrop

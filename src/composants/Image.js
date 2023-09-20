import '../App.css';
import React, { useEffect, useState } from "react";

export default function Image() {

    const { REACT_APP_REST } = process.env;

    const [file, setFile] = useState([]);

    const handleFile = event => {
        setFile(
            URL.createObjectURL(event.target.files[0])
        );
        const formData = new FormData();
        formData.append("fileupload", event.target.files[0]);

        fetch("", {
            method: 'POST',

            body: formData,
            dataType: "jsonp"
        })
    };
    return (
        <>
            <div className="card-user">
                <img src={file} />
                    <div>
                        <label>IMAGE</label>
                        <form
                            type="file"
                            required="required"
                            onChange={handleFile}
                        ></form>
                    </div>
                <hr></hr>

            </div>

        </>
    );
}


import React from "react";

const Modal = () => {

    const [file, setFile] = React.useState(null);
    const [error, setError] = React.useState(null);

    const types =  ["image/jpg", "image/png"];
    
    const fileUp = (e) => {
            let chus = e.target.files[0];

            if(chus){
              setFile(chus);
              

            }else{
                    setError("No files Selected");
            }
            
    }

    return (

        <div className="container">
            <input type="file" onChange={fileUp} />
            <fileUp />
            <div>
                {error && {error}}
                {file}
            </div>
        </div>
    )
}

export default Modal;
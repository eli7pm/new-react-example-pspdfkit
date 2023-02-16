const FileUploadButton=({handleDocumentUpload})=>{
  return(
    <>
      <div>
        <label htmlFor={"files"} className={"drop-container"}>
          <input aria-label={"files"} type={"file"} accept={"application/pdf"} onChange={handleDocumentUpload}/>
        </label>
      </div>
    </>
  )
}

export default FileUploadButton

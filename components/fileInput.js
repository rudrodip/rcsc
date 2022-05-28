import React from 'react'

export const FileInputButton = (props) => {
  const fileInputRef = React.useRef();
  const formRef = React.useRef();

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }
    let image = event.target.files[0]
    props.onChange(image);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <button
        type="button"
        onClick={onClickHandler}
        className="bg-blue-500 hover:scale-105 transition ease-in-out duration-150 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
        disabled={props.loading}
      >
        {props.label}
      </button>
      <input
        accept={props.acceptedFileTypes}
        multiple={props.allowMultipleFiles}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        type="file"
        className='hidden'
      />
    </form>
  );
};

FileInputButton.defaultProps = {
  acceptedFileTypes: '',
  allowMultipleFiles: false,
};
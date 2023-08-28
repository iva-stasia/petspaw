import Icon from "@src/components/Icon";
import { TEMP_USER_ID } from "@src/utils/constants";
import uploadPhoto from "@src/utils/uploadPhoto";
import Image from "next/image";
import { useRef, useState } from "react";

const FileInput = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      await uploadPhoto(file, TEMP_USER_ID);
      setFile(null);
      setUploaded(true);
      console.log("done");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {file ? (
        <div className="mb-5 relative flex flex-col items-center justify-center w-full aspect-[1.9] border-2 border-dashed border-reg-light rounded-[20px] bg-white">
          <Image
            src={URL.createObjectURL(file)}
            fill
            alt="Cat photo"
            className={`${
              error ? "br-red-light" : "bg-white"
            } object-contain p-5 bg-red-light rounded-[20px]`}
          />
        </div>
      ) : (
        <form
          onDragEnter={handleDrag}
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full mb-5"
        >
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            onChange={handleChange}
            className="hidden"
            accept="image/png, image/jpeg"
          />
          <label
            htmlFor="input-file-upload"
            className="relative flex flex-col items-center justify-center w-full aspect-[1.9] bg-white border-2 border-dashed border-reg-light rounded-[20px] cursor-pointer bg-[url('/upload-bg.svg')] bg-no-repeat bg-center bg-[length:60%_60%]"
          >
            <p className="text-xl text-grey z-10">
              <span className="text-black font-medium">Drag here</span> your
              file or <span className="text-black font-medium">Click here</span>{" "}
              to upload
            </p>
          </label>
          {dragActive && (
            <div
              className="absolute h-full w-full rounded-[20px] top-0 right-0 left-0 bottom-0"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </form>
      )}

      {file ? (
        <div className="flex flex-col items-center">
          <p className="mb-5 text-xl text-grey">Image File Name: {file.name}</p>
          <button
            onClick={handleUpload}
            className="btn mb-5 flex items-center gap-2.5 py-3 px-8 text-xs text-red bg-red-light hover:text-white hover:bg-red hover:cursor-pointer transition-colors"
          >
            UPLOAD PHOTO
          </button>
        </div>
      ) : (
        <p className="text-xl text-grey">No file selected</p>
      )}

      {uploaded && (
        <div className="w-full p-5 bg-white rounded-[10px] flex gap-2.5 items-center">
          <Icon icon="success" size={20} className="text-green" />
          <span className="text-grey">Thanks for the Upload - Cat found!</span>
        </div>
      )}

      {error && (
        <div className="w-full p-5 bg-white rounded-[10px] flex gap-2.5 items-center">
          <Icon icon="error" size={20} className="text-red" />
          <span className="text-grey">No Cat found - try a different one</span>
        </div>
      )}
    </div>
  );
};

export default FileInput;

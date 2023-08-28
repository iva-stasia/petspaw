import IconBtn from "@src/components/IconBtn";
import Link from "next/link";
import FileInput from "./FileInput";

interface UploadDialogProps {
  setUploadOpen: (uploadOpen: boolean) => void;
}

const UploadDialog = ({ setUploadOpen }: UploadDialogProps) => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full p-[30px] overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-black/60">
      <div className="relative right-0 h-full flex justify-end">
        <div className="relative p-5 w-[calc(50%-20px)] flex flex-col items-center bg-grey-light rounded-[20px]">
          <div className="mb-10 w-full flex justify-end">
            <div className="text-red bg-white rounded-[10px]">
              <IconBtn icon="close" onClick={() => setUploadOpen(false)} />
            </div>
          </div>

          <div className="mb-10 text-center">
            <p className="pb-2.5 text-4xl font-medium">
              Upload a .jpg or .png Cat Image
            </p>
            <p className="text-xl text-grey">
              Any uploads must comply with the{" "}
              <Link href="https://thecatapi.com/privacy" className="text-red">
                upload guidelines
              </Link>{" "}
              or face deletion.
            </p>
          </div>

          <FileInput />
        </div>
      </div>
    </div>
  );
};

export default UploadDialog;

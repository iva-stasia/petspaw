"use client";

import BackNav from "@src/components/BackNav";
import Icon from "@src/components/Icon";
import Filters from "./Filters";
import CatGrid from "@src/components/CatGrid";
import { useState } from "react";
import UploadDialog from "./UploadDialog";

const Gallery = () => {
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <div className="h-full overflow-hidden flex flex-col gap-5">
      <div className="flex gap-2.5 items-center justify-between">
        <BackNav pageTitle="gallery" />
        <button
          onClick={() => setUploadOpen(true)}
          className="btn flex items-center gap-2.5 py-3 px-8 text-xs text-red bg-red-light hover:text-white hover:bg-red hover:cursor-pointer transition-colors"
        >
          <Icon icon="upload" size={16} />
          <span>Upload</span>
        </button>
      </div>
      <div className="">
        <Filters />
      </div>
      <div className="overflow-auto flex-1">
        <CatGrid page="gallery" />
      </div>
      {uploadOpen && <UploadDialog setUploadOpen={setUploadOpen} />}
    </div>
  );
};

export default Gallery;

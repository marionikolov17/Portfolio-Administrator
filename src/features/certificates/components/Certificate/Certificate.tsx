import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Models } from "appwrite";
import { IoArrowDownOutline, IoArrowUpOutline, IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import { ICertificate } from "../../../../entities/certificates/interfaces/certificate.interface";
import { deleteCertificate, moveCertificate } from "../../../../entities/certificates/services/certificate.service";

interface MoveMutationData {
  id: string,
  isUp: boolean
}

export default function Certificate({ certificate, index, maxIndex }: { certificate: ICertificate | Models.Document, index: number, maxIndex: number }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const queryClient = useQueryClient();
  
  const moveMutation = useMutation({
    mutationFn: (data: MoveMutationData) => moveCertificate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["certificates"] })
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteCertificate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["certificates"] })
    }
  })

  const handleClickUp = () => {
    if (index == 0) {
      return;
    }

    moveMutation.mutate({ id: certificate.$id, isUp: true });
  }

  const handleClickDown = () => {
    if (index === maxIndex) return;

    moveMutation.mutate({ id: certificate.$id, isUp: false });
  }

  const handleDelete = () => {
    deleteMutation.mutate(certificate.$id);
  }

  const displayCertificateName = () => {
    if (certificate.title.length <= 26) return certificate.title;

    return certificate.title.substring(0, 22) + "...";
  }

  return (
    <>
      <div className="w-full flex flex-wrap items-center overflow-hidden min-h-14 bg-primary-900 rounded-lg shadow">
        {/* Certificate image */}
        <div className="shrink-0 w-max h-full flex justify-center overflow-hidden relative">
          <img
            className="object-cover w-20 max-h-14"
            src={certificate.imageUrl}
            alt="certificate image"
            onLoad={() => setIsImageLoaded(true)}
          />
          {!isImageLoaded && 
            <div className="h-full w-20 skeleton-loading absolute"></div>
          }
        </div>
        <div className="grow shrink-0 flex items-center">
          <h3 className="ms-4 text-white font-bold xl:hidden">{displayCertificateName()}</h3>
          <h3 className="ms-4 text-white font-bold hidden xl:inline-block">{certificate.title}</h3>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center px-4 w-full grow py-4 border-t border-t-primary-800 sm:border-none sm:py-0 sm:grow-0 sm:w-auto">
          <Link to={`/certificates/edit/${certificate.$id}`}><IoCreateOutline className="text-brand-600 hover:text-brand-700 text-2xl cursor-pointer mx-1.5"/></Link>
          <IoTrashOutline 
            className="text-red-600 hover:text-red-700 text-2xl cursor-pointer mx-1.5"
            onClick={handleDelete}
          />
          <IoArrowUpOutline 
            className="text-white hover:text-brand-600 text-2xl cursor-pointer mx-1.5"
            onClick={handleClickUp}
          />
          <IoArrowDownOutline
           className="text-white hover:text-brand-600 text-2xl cursor-pointer mx-1.5"
           onClick={handleClickDown}
           />
        </div>
      </div>
    </>
  );
}

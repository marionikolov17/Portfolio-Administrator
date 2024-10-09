import { MdOutlineNoteAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Certificate from "../../features/certificates/components/Certificate/Certificate";
import { useQuery } from "@tanstack/react-query";
import { getCertificates } from "../../entities/certificates/services/certificate.service";
import Loader from "../../shared/components/Loader/Loader";

export default function Certificates() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["certificates"],
        queryFn: getCertificates
    });

    const certificates = data?.documents;

    return (
        <>
            <section className="w-full flex justify-center py-10 px-4 no-scrollbar">
                <div className="w-full 2xl:w-[70%] h-max overflow-x-hidden py-1 px-1">
                    <h1 className="text-white font-bold text-2xl">Certificates</h1>
                    <Link to="/certificates/create" className="mt-4 w-max text-sm flex justify-center items-center px-4 py-2 text-white rounded-lg border border-primary-800 hover:ring-2 hover:ring-blue-900 transition duration-300">
                        <MdOutlineNoteAdd  className="me-2 text-xl"/>
                        Add Certificate
                    </Link>
                    {isPending &&
                        <div className="w-full flex justify-center items-center mt-6">
                            <Loader />
                        </div>
                    }
                    {isError && <p className="text-red-600">{error.message}</p>}
                    {/* Fetched certificates here */}
                    {data && <div className="w-full mt-6 flex flex-col gap-y-4">
                        {certificates?.map(certificate => (
                            <Certificate key={certificate.$id} certificate={certificate}/>
                        ))}
                    </div>}
                    {data?.total === 0 && <p className="mt-6 text-white">There are no certificates</p>}
                </div>
            </section>
        </>
    )
}
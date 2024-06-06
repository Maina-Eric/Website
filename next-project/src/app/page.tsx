import AppraisalForm from "@/components/appraisalform/AppraisalForm";
import AppraisalForm2 from "@/components/appraisalform/AppraisalForm2";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mt-6 ml-10 flex flex-col justify-between w-full overflow-x-auto ">
      <h1 className="text-4xl font-bold ">Performance Appraisal Form</h1>
      <AppraisalForm/>
    </main>
  )
}

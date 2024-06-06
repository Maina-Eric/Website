import React from 'react'

const AppraisalForm2 = () => {
  return (
    <>
      <h2 className="font-medium mt-6 text-2xl">A. KPI TARGETS MET IN PAST 1 YEAR</h2>
      <table className="table table-zebra mt-9">
          <thead>
            <p className="text-[#1488F3] text-lg font-medium">Note: This area covers 75% of your annual performance score</p>
            <tr className="text-lg text-black ">
              <th>Assesment of KPI's (As Outlined for your Role)</th>
              <th>Annual Target</th>
              <th>State Performance met <br/> First 6 Months</th>
              <th><br/>Last 6 months</th>
              <th>Rating (Line Manager) <br/>First 6 months   Last 6 months</th>
            </tr>
          </thead>
          <tbody className="text-lg font-medium">
            <tr>
              <td>Defects Found in UAT</td>
              <td>  20% of total bugs... </td>
              <td className='flex flex-row justify-between'>
                <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
                <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
              </td>
              <td></td>
              <td className="flex flex-row justify-between">
                <button className="btn bg-[#00FF00] w-40 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-40 hover:bg-[#FF0000] ml-4">Failed to meet expectations</button>
              </td>
            </tr>
            <tr>
              <td>UI/UX Convinience</td>
              <td>Above 90% rating</td>
              <td className='flex flex-row justify-between'>
                <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
                <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
              </td>
              <td></td>
              <td className="flex flex-row justify-between">
                <button className="btn bg-[#00FF00] w-40 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-40 hover:bg-[#FF0000] ml-4">Failed to meet expectations</button>
              </td>
            </tr>
            <tr>
              <td>Number of Performance Review</td>
              <td>2/year</td>
              <td className='flex flex-row justify-between'>
                <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
                <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
              </td>
              <td></td>
              <td className="flex flex-row justify-between">
                <button className="btn bg-[#00FF00] w-40 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-40 hover:bg-[#FF0000] ml-4">Failed to meet expectations</button>
              </td>
            </tr>
            <tr>
              <td>Number of test request Assign..</td>
              <td>4</td>
              <td className='flex flex-row justify-between'>
                <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
                <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
              </td>
              <td></td>
              <td className="flex flex-row justify-between">
                <button className="btn bg-[#00FF00] w-40 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-40 hover:bg-[#FF0000] ml-4">Failed to meet expectations</button>
              </td>
            </tr>
            <tr>
              <td>Passed Requirements</td>
              <td>90% per requirement</td>
              <td className="flex flex-row justify-between">
                <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
                <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
              </td>
              <td></td>
              <td className="flex flex-row justify-between">
                <button className="btn bg-[#00FF00] w-40 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-40 hover:bg-[#FF0000] ml-4">Failed to meet expectations</button>
              </td>
            </tr>
          </tbody>
        </table>
    </>
  )
}

export default AppraisalForm2

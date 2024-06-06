"use client"
import React from 'react'

const AppraisalForm = () => {
  return (
    <>
      <h2 className="font-medium mt-6 text-2xl">A. KPI TARGETS MET IN PAST 1 YEAR</h2>
      <table className="table table-zebra mt-9 table-fixed">
          <thead>
            <p className="text-[#1488F3] text-base font-medium">Note: This area covers 75% of your annual performance score</p>
            <tr className=" text-black ">
              <th>Assesment of KPI's (As Outlined <br/>for your Role)</th>
              <th>Annual Target</th>
              <th>State Performance met <br/> First 6 Months</th>
              <th><br/>Last 6 months</th>
              <th>Rating (Line Manager) <br/>First 6 months   Last 6 months</th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            <tr>
              <td>Defects Found in UAT</td>
              <td>  20% of total bugs... </td>
              <td className='flex flex-row justify-between'>
                <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
                <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
              </td>
              <td></td>
              <td className="flex flex-row justify-between">
                <button className="btn bg-[#00FF00] w-24 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-24 hover:bg-[#FF0000]">Failed to meet expectations</button>
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
                <button className="btn bg-[#00FF00] w-24 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-24 hover:bg-[#FF0000]">Failed to meet expectations</button>
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
                <button className="btn bg-[#00FF00] w-24 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-24 hover:bg-[#FF0000]">Failed to meet expectations</button>
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
                <button className="btn bg-[#00FF00] w-24 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-24 hover:bg-[#FF0000]">Failed to meet expectations</button>
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
                <button className="btn bg-[#00FF00] w-24 hover:bg-[#00FF00]">Greatly exceeded expectations</button>
                <button className="btn bg-[#FF0000] w-24 hover:bg-[#FF0000]">Failed to meet expectations</button>
              </td>
            </tr>
          </tbody>
        </table>
      <form action="" className="mt-10">
        <h1 className="font-semibold text-3xl">Self Assesment and Development</h1>
        <div className="mt-10 mb-10 font-medium">
          <p>What Challenges are you experiencing in your role?</p>
          <input type="text" className="border rounded-md w-full h-24 shadow-lg mt-2"/>
        </div>
        <div className="mt-10 mb-10 font-medium">
          <p>Which goals did you meet? Which goals fell short?</p>
          <input type="text" className="border rounded-md w-full h-24 shadow-lg mt-2"/>
        </div>
        <div className="mt-10 mb-10 font-medium">
          <p>What steps can be taken to enhance your level of performance</p>
          <input type="text" className="border rounded-md w-full h-24 shadow-lg mt-2"/>
        </div>
        <div className="mt-10 mb-10 font-medium">
          <p>Please state growth or other career interests you may have besides your current role</p>
          <input type="text" className="border rounded-md w-full h-24 shadow-lg mt-2"/>
        </div>
        <div className="mt-10 mb-10 font-medium">
          <p>What kind of jobs would you like to do in the next 1-2 years</p>
          <input type="text" className="border rounded-md w-full h-24 shadow-lg mt-2"/>
        </div>
        <div className="flex flex-row-reverse">
          <button className="btn bg-[#34B6FF] hover:bg-[#34B6FF] text-white rounded-full w-20 h-8">Save</button>
        </div>
        <h1 className="mt-10 font-semibold text-3xl">Line Manager Section</h1>
        <div className="mt-10 mb-10 font-medium">
          <label>Line Managers Comments</label>
          <input type="text" className="border rounded-md w-full h-24 shadow-lg mt-2"/>
        </div>
        <div className="mt-10 mb-10 font-medium">
          <label>Line Managers Recommendations</label>
          <input type="text" className="border rounded-md w-full h-24 shadow-lg mt-2"/>
        </div>
      </form>
      <h1 className="font-medium mt-6 text-2xl">
        B. COMPLIANCE AREAS, INITATIVES AND STRATEGIC AREAS MET
      </h1> 
      <table className="table table-zebra mt-9 table-fixed">
        <thead>
          <p className="text-[#1488F3] text-base font-medium">
            Note: This area covers 25% of your annual performance score
          </p>
          <tr className="text-black ">
            <th><p>Assesment of KPI's (As Outlined <br/>for your Role)</p></th>
            <th>Annual Target</th>
            <th>State Performance met <br/> First 6 Months</th>
            <th><br/>Last 6 months</th>
            <th>Rating (Line Manager) <br/>First 6 months   Last 6 months</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          <tr>
            <td>Leave Days</td>
            <td>  20% of total bugs... </td>
            <td className='flex flex-row justify-between'>
              <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
              <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
            </td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
          <tr>
            <td>Learning and Development</td>
            <td>  Above 90% rating </td>
            <td className='flex flex-row justify-between'>
              <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
              <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
            </td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
          <tr>
            <td>Reporting</td>
            <td> 2/year </td>
            <td className='flex flex-row justify-between'>
              <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
              <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
            </td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
          <tr>
            <td>Attendance of Events</td>
            <td>  4 </td>
            <td className='flex flex-row justify-between'>
              <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
              <button className="btn btn-square ml-2 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-4xl font-light">+</button>
            </td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
          <tr>
            <td>Average</td>
            <td></td>
            <td></td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-row-reverse">
        <button className="btn bg-[#34B6FF] hover:bg-[#34b6ff] text-white rounded-full w-20 h-8">Save</button>
      </div>
      <h1 className="font-medium mt-6 text-2xl">
        C. LEARNING HOURS UNDERTAKEN IN THE PAST 6-12 MONTHS
      </h1>
      <table className="table table-zebra mt-9 table-fixed">
        <thead>
          <p className="text-[#1488F3] text-lg font-medium">
            One is to undertake 20 Hours of Training per Month
          </p>
          <tr className="text-black ">
            <th><p>Assesment of KPI's (As Outlined <br/>for your Role)</p></th>
            <th>Annual Target</th>
            <th>State Tranings Done <br/> First 6 Months</th>
            <th><br/>Last 6 months</th>
            <th>Rating (Line Manager) <br/>First 6 months   Last 6 months</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          <tr>
            <td>Technical</td>
            <td> ... </td>
            <td>
              <input type="text" name="text" className="border h-11 rounded-md"/>
            </td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
          <tr>
            <td>Technical</td>
            <td> ... </td>
            <td>
              <input type="text" name="text" className="border h-11 rounded-md"/>
            </td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
          <tr>
            <td>Generic</td>
            <td> ... </td>
            <td>
              <input type="text" name="text" className="border h-11 rounded-md"/>
            </td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
          <tr>
            <td>Generic</td>
            <td> ... </td>
            <td>
              <input type="text" name="text" className="border h-11 rounded-md"/>
            </td>
            <td></td>
            <td className='flex flex-row justify-between'>
              <input type="text" className="border w-20 h-9 rounded-md"/>
              <input type="text" className="border w-20 h-9 rounded-md ml-4"/>
            </td>
          </tr>
        </tbody>
        <div className="mt-3">
          <button className="btn bg-[#A8D5FF] hover:bg-[#A8D5FF]" >+ Add Training</button>
        </div>
      </table>
      <div className="flex flex-row-reverse">
        <button className="btn bg-[#34B6FF] hover:bg-[#34b6ff] text-white rounded-full w-20 h-8">Save</button>
      </div>
      <h1 className="font-medium mt-6 text-2xl">
        D. LEARNING & DEVELOPMENT TO BE UNDERTAKEN IN THE NEXT PERFORMANCE
      </h1>
      <table className="table table-zebra table-fixed">
        <thead>
            <tr className=" text-black ">
            <th>Nature of Learning and Development to <br/>be undertaken in th next Annual year <br/>(As Outlined for your role)</th>
            <th className="ml-5 pl-7">State areas of Learning & <br/> Development (To be <br/> completed by the line manager)</th>
            <th>List Courses to be undertaken</th>
            <th>Line Manager Remarks</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          <tr>
            <td>Technical</td>
            <td>...</td>
            <td>
              <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
              <button className="btn m-1 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-xl">V</button>
            </td>
            <td>......</td>
          </tr>
          <tr>
            <td>Technical</td>
            <td>...</td>
            <td>
              <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
              <button className="btn m-1 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-xl">V</button>
            </td>
            <td>......</td>
          </tr>
          <tr>
            <td>Generic</td>
            <td>...</td>
            <td>
              <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
              <button className="btn m-1 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-xl">V</button>
            </td>
            <td>......</td>
          </tr>
          <tr>
            <td>Generic</td>
            <td>...</td>
            <td>
              <input type="text" name="text" className="border w-40 h-12 rounded-md"/>
              <button className="btn m-1 bg-[#A8D5FF] hover:bg-[#A8D5FF] text-xl">V</button>
            </td>
            <td>......</td> 
          </tr>
        </tbody>
        <button className="btn bg-[#A8D5FF] hover:bg-[#A8D5FF] text-lg mt-3" >+ Add </button>
      </table>
      <div className="flex flex-row-reverse">
        <button className="btn bg-[#34B6FF] hover:bg-[#34b6ff] text-white rounded-full w-20 h-8">Save</button>
      </div>
      <h1 className="font-medium mt-6 text-2xl">Upload Supporting Documents</h1>
      <div className="flex flex-row mt-4">
            <button className="btn bg-[#34B6FF] hover:bg-[#34b6ff] text-white rounded-md">Upload Documents</button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="flex flex-row-reverse">
            <button className="btn bg-[#34B6FF] hover:bg-[#34b6ff] text-white rounded-full w-20 h-8">Save</button>
        </div>
        <br/>
        <br/>
        <div className="flex ">
            <input type="checkbox" className="checkbox shadow-inner"/>
            <p className="ml-2 font-semibold">My Line Manager and I have discussed this report and have agreed upon for execution and review at the end of each period</p>
        </div>
        <button className="btn btn-active rounded-full text-base mt-4 text-white w-28">Submit</button>

    </>
  )
}

export default AppraisalForm

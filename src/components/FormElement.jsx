import React, { useState } from 'react'
import Button from './Button'

const FormElement = ({ data }) => {
 const [selectedOption, setSelectedOption] = useState("");

const handleCheckboxChange = (value) => {
  setSelectedOption(prev => (prev === value ? "" : value));
};
  return (
    <form>

      <div className='w-3/5 mx-auto flex flex-col  gap-5'>
        <div>
          <p className='text-xl text=[#060237]'>1. {data.brand}</p>
          <input className='h-12 p-4 mt-2 w-full  border-2 border-[#060337] rounded-full' type="text" />
        </div>
        <div>
          <p className='text-xl text=[#060237]'>2. {data.name}</p>
          <input className='h-12 p-4 mt-2 w-full  border-2 border-[#060337] rounded-full' type="text" />
        </div>
        <div>
          <p className='text-xl text=[#060237]'>3. {data.webUrl}</p>
          <input className='h-12 p-4 mt-2 w-full  border-2 border-[#060337] rounded-full' type="text" />
        </div>
        <div>
          <p className='text-xl text=[#060237]'>4. {data.email}</p>
          <input className='h-12 p-4 mt-2 w-full  border-2 border-[#060337] rounded-full' type="email" />
        </div>
        <div>
          <p className='text-xl text=[#060237]'>5. {data.phoneNo}</p>
          <div>
            <input className='h-12 p-4 mt-2 w-34  border-2 border-[#060337] rounded-full' type="text" />
            <input className='h-12 p-4 mt-2 ml-2 w-4/5   border-2 border-[#060337] rounded-full' type="number" maxLength={10} />
          </div>
        </div>
        <div>
          <div>
            <p className='text-xl text=[#060237] mt-5'>6. {data.salary}</p>
            <div className='grid grid-flow-col grid-rows-2 mt-2'>
              {data.salaryOptions.map((option) => (
                <div key={option.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={option.content}
                      checked={selectedOption===option.content}
                      onChange={() => handleCheckboxChange(option.content)}
                    />
                    {" "}{option.content}
                  </label>
                </div>
              ))}
            </div>

            <div className='mt-5'>
              <p className='text-xl text=[#060237]'>7. {data.issue}</p>
              <p className='text-gray-500 text-xl my-3 ml-4'>select all that apply</p>
              <select className='w-3/5  h-28 border border-[#060237] rounded-lg  p-2 flex flex-col gap-4' name="" id="" >
                {
                  data.options.map((opt) => {
                    return (
                      <option key={opt.id} className='mt-1' value={opt.content}>{opt.content}  </option>
                    )
                  })
                }
              </select>

            </div>
          </div>
          <div className='mt-3'>
            <p className='text-xl my-2   text=[#060237]'>8. {data.overview}</p>
            <p className='mb-3 ml-2'>{data.overviewDes}</p>
            <textarea className='border border-[#060237] rounded-lg mt-2 w-full' name="overview" id="overview" rows={4} ></textarea>
          </div>
        </div>
        <div className='w-auto flex justify-center'>
          <Button data={{ href: "#", label: "submit", isPrimary: true }} />
        </div>
      </div>
    </form>
  )
}

export default FormElement

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import FormElement from './components/FormElement'
import Footer from './components/Footer'



const FormPage = ({ data }) => {
  const [formData, setFormData] = useState("");
  useEffect(() => {
    fetch("http://l0.241.65.202:1337/api/fomr-input").then((apiData) => apiData.json())
      .then((data) => setFormData(data.data))
      .catch((err) => console.error(err))
  }, []);


  return (
    <div className='font-myfont  flex justify-center'>
      {console.log(formData)}
      <div className='w-5/6'>
        <Navbar data={data.NavBar} />
        <div className=' h-96 grid place-items-center'>
          <div className='text-center'>
            <p className='text-5xl text-[#060237] font-bold'>{formData.heading}</p>
            <p className='text-3xl w-3/4 mt-10 mx-auto text-[#060237]'>{formData.subHeading}</p>
          </div>
        </div>
        {formData ? <FormElement data={formData} /> : <div>loading...</div>}
        <Footer data={data.Footer[0]} />
      </div>
    </div>
  )

}

export default FormPage

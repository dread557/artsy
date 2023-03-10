import React from 'react'

const Input = ({ type, name, placeholder, handleChange }) => {
  return (
    <input
      className='h-[62px] w-full pl-5 md:pl-[51px] text-base rounded-[10px] text-[#747474] bg-[#F2F2F2] border-[.5px] border-[#747474]'
      type={type}
      name={name}
      placeholder={placeholder}
      required
      onChange={handleChange}
    />
  )
}

export default Input
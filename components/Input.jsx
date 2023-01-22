import React from 'react'

const Input = ({ type, name, placeholder }) => {
  return (
    <input
      className='h-[76px] w-full pl-[51px] rounded-[10px] text-[#747474] bg-[#F2F2F2] border-[.5px] border-[#747474]'
      type={type}
      name={name}
      placeholder={placeholder}
      required
    />
  )
}

export default Input
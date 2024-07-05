import React, { useId } from 'react'

function Input({
    label,
    type ='text',
    className = "",
    ...props
},ref) {
    const id = useId()
    // className='px-3 bg-gray-300 py-3 rounded-md'
  return (
    <div > 
        {
            label && <label
            htmlFor={id}
            className='text-xl text-emerald-700 font-bold'
            >
                {label}
            </label>
        }
        <br/>
        <input
            type={type}
            className={`
             placeholder:text-gray-500 
              w-80 border-teal-700 border-x-4 border-y-2 px-2 py-2 rounded-lg
             
            ${className}`}
            ref = {ref}
            id = {id}
            {...props}
        />
            
        
    </div>
  )
}

export default React.forwardRef(Input)
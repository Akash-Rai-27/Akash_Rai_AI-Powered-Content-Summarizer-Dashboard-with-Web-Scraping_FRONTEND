import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-teal-700",
    textColor = "text-white",
    className = '',
    ...props
}) {
  return (
    <button 
        className={`px-2 py-1 rounded-lg hover:bg-teal-600 ${bgColor} ${textColor} ${className}`}
        type = {type}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button
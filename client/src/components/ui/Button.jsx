import ArrowIcon from "../../assets/icons/arrow.svg?react";

export default function Button({ children, onClick, arrow = false, variant = 'primary', as: Tag = 'button', type = 'button', className = '', ...props }) {


  const base = 'flex items-center justify-center uppercase cursor-pointer gap-2 text-light'

  const variants = {
    primary: 'w-full font-bold bg-secondary text-2xl p-8 rounded-4xl',
    connect: 'text-xs bg-primary text-white py-1 px-3 rounded-sm'
  }

  return (
    <Tag type={Tag === 'button' ? type : undefined} className={`${base} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
      {arrow && (

        <ArrowIcon className="fill-light"/>
      )}
    </Tag>
  )
}

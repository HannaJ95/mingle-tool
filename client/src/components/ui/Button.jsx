import ArrowIcon from "../../assets/icons/arrow.svg?react";

export default function Button({ children, onClick, arrow = false, variant = 'primary', as: Tag = 'button', type = 'button', className = '', ...props }) {


  const base = 'flex items-center justify-center uppercase cursor-pointer gap-2 text-light'

  const variants = {
    primary: 'w-full font-bold bg-secondary text-2xl p-8 rounded-4xl',
    connect: 'text-xs leading-none bg-primary text-white py-2 px-3 rounded-sm',
    glass: 'bg-white/15 backdrop-blur-md border border-white/35 shadow-[inset_0_0_15px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.2)] text-white rounded-full aspect-square flex items-center justify-center',
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

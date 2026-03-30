
export default function Button({ children, onClick, arrow = false, variant = 'primary', as: Tag = 'button', type = 'button', ...props }) {


  const base = 'w-full flex items-center justify-center p-8 rounded-lg text-2xl uppercase cursor-pointer gap-2 bg-black text-white'

  const variants = {
    primary: 'font-bold',
    secondary: 'font-medium',
    connect: 'w-auto px-3 py-1 text-xs bg-gray-300 text-black rounded-none border border-black'
  }

  return (
    <Tag type={Tag === 'button' ? type : undefined} className={`${base} ${variants[variant]}`} onClick={onClick} {...props}>
      {children}
      {arrow && (
        <svg aria-hidden="true" width="73" height="15" viewBox="0 0 73 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M72.7071 8.07136C73.0976 7.68084 73.0976 7.04768 72.7071 6.65715L66.3431 0.29319C65.9526 -0.0973344 65.3195 -0.0973344 64.9289 0.29319C64.5384 0.683714 64.5384 1.31688 64.9289 1.7074L70.5858 7.36426L64.9289 13.0211C64.5384 13.4116 64.5384 14.0448 64.9289 14.4353C65.3195 14.8259 65.9526 14.8259 66.3431 14.4353L72.7071 8.07136ZM0 7.36426V8.36426H72V7.36426V6.36426H0V7.36426Z" fill="currentColor"/>
        </svg>
      )}
    </Tag>
  )
}

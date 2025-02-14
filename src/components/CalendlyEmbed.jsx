import { useEffect } from 'react'

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    head.appendChild(script)

    return () => {
      head.removeChild(script)
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget w-full h-full" 
      data-url={url}
      style={{ 
        minWidth: '320px', 
        height: 'calc(90vh - 90px)',
        border: 'none',
      }} 
    />
  )
}

export default CalendlyEmbed 
import type { IIconsProps } from '../Icon.props'

export const IconAnalytics = ({ className, ...props }: IIconsProps) => {
  return (
    <svg
      className={className}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M7.66668 0.666626L1.33334 3.99996V5.33329H14V3.99996M10.6667 6.66663V11.3333H12.6667V6.66663M1.33334 14.6666H14V12.6666H1.33334M6.66668 6.66663V11.3333H8.66668V6.66663M2.66668 6.66663V11.3333H4.66668V6.66663H2.66668Z' />
    </svg>
  )
}

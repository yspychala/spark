import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeliveryFastFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M5.6834 12.3367C5.11285 11.8476 4.62382 11.277 4.3793 10.6249C4.05327 9.9728 3.97177 9.23919 3.97177 8.50558C3.97177 7.77196 4.21628 7.03835 4.62382 6.46776C4.94984 5.81566 5.43888 5.24507 6.09093 4.83751C6.66147 4.42995 7.39503 4.18541 8.12858 4.1039C8.86214 4.02238 9.5957 4.1039 10.2477 4.42995C10.8998 4.67448 11.5518 5.16356 12.0409 5.65264C12.5299 6.22322 12.8559 6.87533 13.019 7.52743C13.182 8.0165 13.671 8.34255 14.2415 8.26104C14.7306 8.09801 15.0566 7.60894 14.9751 7.03835C14.7306 6.0602 14.2415 5.08205 13.5895 4.34843C12.9375 3.53331 12.0409 2.96272 11.0628 2.55516C10.0032 2.22911 8.94365 2.14759 7.96557 2.22911C6.90599 2.31062 5.92792 2.63667 5.03135 3.20726C4.13478 3.77785 3.40122 4.51146 2.91219 5.4081C2.42315 6.30474 2.09712 7.28289 2.01562 8.34255C1.93411 9.40222 2.17863 10.3804 2.58616 11.3585C2.99369 12.3367 3.64574 13.1518 4.4608 13.8039C4.62382 13.9669 4.86833 14.0484 5.03135 14.0484C5.35737 14.0484 5.60189 13.8854 5.7649 13.6409C6.17243 13.2333 6.09093 12.6627 5.6834 12.3367Z"/><path d="M9.92188 5.9787 7.88423 8.01652C7.4767 8.42408 7.4767 8.99467 7.88423 9.40223 8.04724 9.64677 8.29176 9.72828 8.53628 9.72828 8.7808 9.72828 9.02531 9.64677 9.18833 9.40223L11.3075 7.2829C11.715 6.87534 11.715 6.30475 11.3075 5.89719 10.9815 5.57114 10.3294 5.57114 9.92188 5.9787ZM21.3325 11.1955C20.925 10.7879 20.2729 10.4619 19.6209 10.4619H12.6928C12.0408 10.4619 11.4703 10.7064 10.9812 11.1955 10.6552 11.5216 10.4107 12.0106 10.3292 12.4997 10.3292 12.4997 10.3292 12.4997 10.3292 12.5812V16.6568C10.3292 16.7384 10.3292 16.7384 10.2477 16.8199 10.1662 16.9014 10.0846 16.9829 10.0031 17.0644H9.92163C9.67711 17.0644 9.5141 16.9014 9.5141 16.6568V13.3148H9.26958C8.29151 13.3148 7.31343 13.7224 6.57988 14.456 5.92783 15.1081 5.5203 16.0863 5.5203 17.0644V19.8358C5.5203 20.4064 5.92783 20.814 6.49837 20.814H8.53603C8.94356 21.6291 9.75862 22.1997 10.6552 22.1997 11.6333 22.1997 12.4483 21.6291 12.7744 20.814H14.7305C15.138 21.6291 15.9531 22.1997 16.8497 22.1997 17.8277 22.1997 18.6428 21.6291 18.9688 20.814H21.0065C21.577 20.814 21.9846 20.4064 21.9846 19.8358V12.9073C22.0661 12.2552 21.8215 11.6846 21.3325 11.1955ZM10.4108 12.4997C10.4108 12.5812 10.4108 12.7442 10.4108 12.8257V13.2333 12.4997C10.4108 12.5812 10.4108 12.5812 10.4108 12.4997Z"/>',
      }}
    />
  )
)

export const tags = ['delivery-fast-fill', 'delivery']

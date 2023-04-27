import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Available = React.forwardRef(
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
          '<path d="M15.3313 10.9453C15.474 10.7953 15.4681 10.5579 15.318 10.4152C15.168 10.2724 14.9306 10.2784 14.7879 10.4284L11.3946 13.9957L9.50909 12.0836C9.36367 11.9361 9.12624 11.9345 8.97877 12.0799C8.8313 12.2253 8.82964 12.4627 8.97505 12.6102L11.4042 15.0737L15.3313 10.9453Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.8288 10.1968C20.0785 9.83088 19.914 9.32776 19.4965 9.17997L17.2397 8.38127L17.1704 5.9883C17.1576 5.54554 16.729 5.23492 16.3042 5.36055L14.0012 6.04173L12.5368 4.14999C12.2663 3.80055 11.7385 3.80099 11.4686 4.15088L9.99959 6.05502L7.69569 5.38774C7.27185 5.26498 6.84613 5.57524 6.8332 6.01631L6.76292 8.41387L4.50042 9.22921C4.08468 9.37903 3.92265 9.8813 4.17247 10.2458L5.52489 12.2192L4.17121 14.203C3.92154 14.5689 4.08599 15.072 4.50356 15.2198L6.76036 16.0185L6.82962 18.4114C6.84244 18.8542 7.27103 19.1648 7.69579 19.0392L9.99879 18.358L11.4632 20.2498C11.7337 20.5992 12.2615 20.5988 12.5314 20.2489L14.0004 18.3447L16.3043 19.012C16.7282 19.1348 17.1539 18.8245 17.1668 18.3834L17.2371 15.9859L19.4996 15.1705C19.9153 15.0207 20.0774 14.5184 19.8276 14.1539L18.4751 12.1805L19.8288 10.1968ZM16.941 9.07115L19.1544 9.8545L17.8267 11.8002C17.6698 12.03 17.6702 12.3326 17.8275 12.5622L19.154 14.4979L16.9348 15.2976C16.6739 15.3916 16.497 15.6357 16.4889 15.9129L16.42 18.2647L14.16 17.6101C13.8937 17.533 13.6072 17.6266 13.4378 17.8462L11.9969 19.7139L10.5605 17.8583C10.3901 17.6383 10.1021 17.5453 9.83524 17.6243L7.57649 18.2924L7.50856 15.9454C7.5005 15.6667 7.3219 15.4216 7.05905 15.3286L4.84563 14.5452L6.17331 12.5996C6.33018 12.3697 6.32987 12.0671 6.17254 11.8375L4.84599 9.90189L7.06524 9.10214C7.32613 9.00812 7.50298 8.76409 7.5111 8.48689L7.58004 6.13506L9.84 6.78962C10.1064 6.86677 10.3928 6.77314 10.5622 6.55357L12.0031 4.68584L13.4396 6.5414C13.6099 6.76147 13.8979 6.85442 14.1648 6.77548L16.4235 6.10738L16.4915 8.45435C16.4995 8.73306 16.6781 8.97812 16.941 9.07115Z"/>',
      }}
    />
  )
)

export const tags = ['available', 'criteria', 'generic']

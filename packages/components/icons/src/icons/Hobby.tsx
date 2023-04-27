import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Hobby = React.forwardRef(
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
          '<path d="M23.9899 12C23.9899 8.8 22.7443 5.78228 20.4759 3.51392C18.2076 1.24557 15.2 0 12 0C8.8 0 5.78228 1.24557 3.51392 3.51392C3.09873 3.92911 2.73418 4.37468 2.38987 4.83038C2.37975 4.85063 2.34937 4.87089 2.33924 4.90127C0.83038 6.94684 0 9.4076 0 12C0 15.2 1.24557 18.2177 3.51392 20.4861C5.78228 22.7544 8.78987 24 12 24C14.9772 24 17.7823 22.9063 19.9797 20.9418C20.0101 20.9316 20.0506 20.9215 20.081 20.9013C20.2734 20.7899 20.4152 20.6278 20.5165 20.4456C22.7646 18.1873 24 15.1899 24 12H23.9899ZM15.2709 15.2506C15.9291 16.1418 16.5468 17.0633 17.0937 18.0456L17.9139 19.5139C16.2734 20.8 14.319 21.4785 12.3342 21.5494C12.3949 20.9316 12.4861 20.3139 12.6582 19.7165C13.1241 18.0354 14.0253 16.4962 15.2608 15.2608H15.2709V15.2506ZM19.2203 16.8506C18.6127 15.7671 17.9241 14.7443 17.1949 13.7519C17.9848 13.2759 18.8253 12.9013 19.7165 12.6481C20.3241 12.4759 20.9418 12.3747 21.5494 12.3241C21.4785 14.2785 20.8304 16.1215 19.6861 17.6709L19.2304 16.8506H19.2203ZM21.3266 9.91392C20.557 9.98481 19.7975 10.1063 19.0582 10.3089C17.8532 10.643 16.719 11.1797 15.6658 11.8582C14.5722 10.6127 13.3671 9.45823 12.0709 8.41519C12.7696 7.34177 13.3266 6.17722 13.681 4.93165C13.8835 4.20253 14.0051 3.44304 14.0759 2.66329C15.7975 3.03797 17.4278 3.88861 18.7646 5.22532C20.0709 6.53165 20.9418 8.1519 21.3367 9.91392H21.3266ZM4.17215 6.51139H4.22278C5.76203 7.14937 7.21013 7.94937 8.58734 8.86076C7.38228 10.0253 5.89367 10.8861 4.28354 11.3316C3.67595 11.5038 3.05823 11.5949 2.45063 11.6557C2.51139 9.78228 3.10886 8.01013 4.17215 6.51139ZM5.92405 4.61772C7.59494 3.24051 9.62025 2.52152 11.6658 2.45063C11.6051 3.06835 11.5139 3.68608 11.3519 4.28354C11.0886 5.23544 10.6633 6.14684 10.1367 6.97722C8.81013 6.07595 7.40253 5.28608 5.93418 4.61772H5.92405ZM2.66329 14.0759C3.43291 14.0051 4.1924 13.8937 4.93165 13.681C7.00759 13.0937 8.92152 11.9797 10.4506 10.4506C10.4911 10.4101 10.5215 10.3595 10.562 10.319C11.7063 11.2405 12.7696 12.2532 13.7418 13.357C13.6709 13.4177 13.6 13.4785 13.5392 13.5392C12.0101 15.0684 10.8962 16.9722 10.3089 19.0582C10.1063 19.7873 9.98481 20.5468 9.91392 21.3266C8.19241 20.9519 6.56203 20.1013 5.22532 18.7646C3.91899 17.4582 3.0481 15.838 2.65316 14.0759H2.66329Z"/>',
      }}
    />
  )
)

export const tags = ['hobby', 'categories']

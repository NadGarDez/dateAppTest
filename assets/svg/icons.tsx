import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const MenuIcon = ():JSX.Element=>{
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 17v2H10v-2h12zM22 11v2H2v-2h20zM14 5v2H2V5h12z"
        fill="#fff"
      />
    </Svg>
  )
}

export const FilterIcon = ():JSX.Element => {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <Path
          d="M19.332 2H3.668C3.289 2 3 2.307 3 2.709v3c0 .165.067.354.178.472l5.941 6.921v9.19c0 .26.134.495.334.613a.6.6 0 00.334.095.6.6 0 00.333-.095l3.427-2.078a.714.714 0 00.334-.614v-7.087l5.941-6.921A.777.777 0 0020 5.732V2.71c0-.402-.29-.709-.668-.709zm-.667 3.425l-5.941 6.945a.777.777 0 00-.178.473v6.992l-2.092 1.275v-8.268a.726.726 0 00-.178-.472l-5.94-6.945V3.417h14.329v2.008z"
          fill="#fff"
        />
      </Svg>
    )
}
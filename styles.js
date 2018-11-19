/* styles.js */
import css from 'styled-jsx/css'

// Scoped styles
export const button = css`button { color: hotpink; }`

// Global styles
export const body = css.global`
            body {  margin: 0;padding:0;border-top: 3px solid #c05b4d;
                    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                    line-height:1.5;
                    color: #34495e;
                    font-weight: normal;} 
                a{ color: #34495e;text-decoration: none;}
                a:hover {
                    border-bottom: 1px solid #c05b4d;
                }
                `

// Resolved styles
export const link = css.resolve`a { color: green; }`
// link.className -> scoped className to apply to `a` elements e.g. jsx-123
// link.styles -> styles element to render inside of your component

// Works also with default exports
export default css`div {box-sizing:border-box }`

import styled from "styled-components";

const LayoutStyles = styled.div`
    display: grid;

    grid-template-columns: [left-start] minmax(13rem, auto) [left-end 
                            center-start] repeat(10, [col-start] minmax(13rem, auto) [col-end]) [center-end 
                            right-start] minmax(13rem, auto) [right-end]; 
`

export default LayoutStyles;

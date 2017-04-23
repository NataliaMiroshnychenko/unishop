import styled from 'styled-components';

export default styled.div`
    max-width: 20%;
    padding: 10px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &:hover {
        &:before {
            content: "";
            position: absolute;
            top: -10px;
            right: -10px;
            bottom: -10px;
            left: -10px;
            display: block;
            box-shadow: rgba(57, 93, 132, 0.0980392) 0px 3px 10px;
            border-width: 1px 1px 0px;
            border-style: solid solid solid;
            border-color: rgb(223, 228, 235) rgb(223, 228, 235) rgb(223, 228, 235);
            border-image: initial;
            border-bottom: 0px;
            pointer-events: none;
        }
    }
`;
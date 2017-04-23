import styled from 'styled-components';

export default styled.div`
    color: #fff;
    flex-grow: 1;
    a {
        display: block;
        color: #fff;
        padding: 20px 20px;
        background-color: #5280b2;
        text-decoration: none;
        &:hover {
            background-color: #ff8001;
        }
    }
    a.active {
        background-color: #5b90ce;
    }
`;

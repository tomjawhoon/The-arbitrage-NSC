import styled from 'styled-components';

export const Container = styled.div`
    display : flex;
    width : 100vw ;
    box-sizing : border-box;
    align-items:center ;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.2);
    height:67px;
    padding: relative;

    @media (min-width : 768px){
        height:110px;
    }


`;

export const Box_header = styled.div`
    display : flex;
    justify-content:space-between;
    width: 100%;
`;

export const Box_logo = styled.div`
    display: flex;
    position:relative;
    align-items:center;

    a{
        position:absolute;
        top:18px;
        left:22px;
        margin-left:5px;
        font-weight:700;
        font-size:20px;
        color:#00377a;
    }
`;

export const Logo = styled.img`
    width: 50px;
    height:50px;
    padding-left:15px;
    opacity:0.8;
`;

export const Menu_isMobile = styled.div`
    display:flex;
    align-items:center;
    padding-right:15px;
    button{
        cursor: pointer;
        font-size:20px;
        border:none;
        outline:none;
        background:transparent;
        margin-left:15px;
        color:#1367ce;

    }

    @media (min-width:425px){
        button{
            font-size:25px;
        }
    }
    @media (min-width:1024px){
        display:none;
    }
    
`;


import styled from 'styled-components';

export const Container = styled.div`
    display : flex;
    width : 100vw ;
    box-sizing : border-box;
    align-items:center ;
    justify-content:center;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.2);
    height:67px;
    padding: relative;

    .pathname{
        font-size:20px;
        font-weight:700;
        color:#2671cc;
    }

    @media (min-width : 768px){
        height:110px;
    }


`;

export const Box_header = styled.div`
    display : flex;
    justify-content:space-between;
    width: 100%;

    @media (min-width:1024px){
        width: 80%;
    }
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
    @media (min-width:1024px){
        a{
            top:35px;
            left:28px;
            font-size:25px;
        }
    }
`;

export const Logo = styled.img`
    width: 50px;
    height:50px;
    padding-left:15px;
    opacity:0.8;
    @media (min-width:1024px){
        width: 80px;
        height:80px;
    }
`;

export const Menu_isDesktop = styled.div`
    display:none;
    @media (min-width:1024px){
        display:flex;
        align-items:center;
        ul{
            a{
                text-decoration:none;
                outline:none;
                color:black;
            }
            
            li{
                font-size:20px;
                font-weight:500;
                display: inline;
                outline:none;
                text-decoration:none;
                list-style-type: none;
                margin-left:15px;
                cursor: pointer;
            }
            padding-right:15px;
        }
    }
    
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


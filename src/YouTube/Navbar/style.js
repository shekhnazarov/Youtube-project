import styled from "styled-components";
import {ReactComponent as burger} from "../../assets/icons/burger.svg"
import {ReactComponent as search} from "../../assets/icons/search.svg"
import {ReactComponent as video} from "../../assets/icons/video.svg"
import {ReactComponent as gridMenu} from "../../assets/icons/grid-menu.svg"
import {ReactComponent as bell} from "../../assets/icons/bell.svg"

export const Container = styled.div`
display: flex;
width: 100%;
height: 60px;
flex: 1;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
background: var(--blackthema-light-opacity, rgba(33, 33, 33, 0.99));
`;

export const Category = styled.div`
display: flex;
cursor: pointer;
`

export const Icons = styled.div`
`
Icons.Burger = styled(burger)`
width: 24px;
height: 24px;
`

Icons.Logo = styled.img`
margin-left: 25px;
`

export const SearchInput = styled.input`
height: 35px;
width: 450px;
border-radius: 2px 0px 0px 2px;
border: 1.18px solid var(--bordor-color, #424242);
background: var(--blacktheme-dark, #181818);
color: #999;
padding-left: 15px;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
&:focus {
  outline: none;
}
`

export const Span = styled.div`
height: 35px;
width: 55px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0px 2px 2px 0px;
border: 1.18px solid var(--bordor-color, #424242);
background: var(--bordor-color, #424242);
`
Icons.Search = styled(search)`
width: 25px;
height: 25px;
`

Icons.Video = styled(video)`
width: 35px;
height: 35px;
margin-left: 10px;
`

Icons.Bell = styled(bell)`
width: 36px;
height: 36px;
margin-left: 10px
`

Icons.GridMenu = styled(gridMenu)`
width: 36px;
height: 36px;
margin-left: 10px;
`
export const AccountImg = styled.img`
width: 32px;
height: 32px;
margin-left: 15px;
`
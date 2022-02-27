import styled from "styled-components"
import {FaChessQueen, FaBell} from "react-icons/fa"

export const Heade = styled.header`
    width: 100%;
    height: 70px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 1px 1px 3px 0px #ccc;
    background: #fff;

    .logotipo{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
    }
    .icons{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
    }
`

export const IconLogo = styled(FaChessQueen)`
    font-size: 20px;
    background: #fff;
`
export const BellIcon = styled(FaBell)`
    font-size: 18px;
    cursor: pointer;
    background: #fff;
`

export const NameLogo = styled.span`
    font-size: 25px;
    margin-left: 10px;
    background: #fff;
`

export const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
    background: #fff;
`
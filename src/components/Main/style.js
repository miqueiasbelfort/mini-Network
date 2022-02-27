import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 10px;
`
export const MainBox = styled.div`
    width: 80%;
    border-radius: 10px;
`
export const AddANewPost = styled.div`
    width: 100%;
    background: #f1f1f1;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;

    .infoPerfil{
        display: flex;
        align-items: center;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }

    .addNewPost{
        width: 100%;
        margin: 10px 0;
        border-radius: 5px;
        resize: none;
        height: 50px;
        border: none;
        background: #fff;
        outline: none;
        padding: 10px;
    }

    .buttonBox{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .btnPostAdd{
        width: 100px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background: #0080c9;
        color: #fff;
        cursor: pointer;
        transition: all ease .2s;

        &:hover{
            background: #147eb7;
        }
    }
`
export const Publication = styled.div`
    width: 100%;
`

export const Post = styled.div`
    width: 100%;
    background: #f1f1f1;
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;

    .namaAndImgUserInfo{
        display: flex;
        align-items: center;
        img{
            width: 30px;
            border-radius: 50%;
            height: 30px;
            object-fit: cover;
            margin-right: 10px;
        }
    }

    .MainPost{
        padding: 0 10px;
        margin-top: 10px;
    }

    .iconsOfPost{
        margin: 10px 0;
        padding: 0 10px;
        display: flex;
        align-items: center;
        gap: 10px;

        .likes{
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 20px;
        }
    }
`

export const Like = styled(AiOutlineLike)`
    font-size: 25px;
    cursor: pointer;
`
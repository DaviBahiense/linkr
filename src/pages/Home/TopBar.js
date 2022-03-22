import styled from "styled-components"

export default function TopBar(){

    function Menu() {
        alert("menu")
    }
    return (
        <Box> 
            <h1>linkr</h1>
            <User>
            <ion-icon name="chevron-down-outline" onClick={() => Menu()}></ion-icon>
                <img src="https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg" alt="gato" />
            </User>

        </ Box> 
    )
}

const Box = styled.div`
    width: 100%;
    height: 72px;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        margin-left: 21px;
        font-family: Passion One;
        font-size: 49px;
        font-style: normal;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: 0.05em;
        text-align: left;
        color: #FFFFFF;

    }
    
`
const User = styled.div`
    display: flex;
    img{
        width: 53px;
        height: 53px;
        margin-right: 21px;
        border-radius: 50%;
    }
    ion-icon{
        width: 40px;
        height: 40px;
        font-size: 40px;
        color: #FFFFFF;
    }
`

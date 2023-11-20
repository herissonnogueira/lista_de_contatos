import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #16181d;
    color: #f6f7f9;
    list-style: none;
    font-family: Roboto, sans-serif;

    input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

    }
    input[type=number] {
      -moz-appearance: textfield;
      appearance: textfield;

    }
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 288px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Input = styled.input`
  color: #000;
  padding: 8px 8px 8px 20px;
  width: 100%;
  height: 38px;
  border: none;
  border-radius: 50px;
  background-color: #fff;
`

export const Title = styled.h1`
  display: block;
  color: #f6f7f9;
  font-size: 40px;
  margin-top: 30px;
  margin-left: 74px;
  margin-bottom: 30px;
`
export const Info = styled.p`
  display: flex;
  background-color: #23272f;
  align-items: center;
  font-size: 23px;
  padding: 5px;
`

export const EditButton = styled.button`
  margin: 10px;
  padding: 8px 28px;
  border-radius: 50px;
  border: none;
  background-color: #087ea4;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`
export const SaveButton = styled(EditButton)`
  background-color: #30a14e;
  color: 23272f;
`

export const DeleteCancelButton = styled(EditButton)`
  background-color: #953645;
`

export default EstiloGlobal

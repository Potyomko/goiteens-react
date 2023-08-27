import styled from 'styled-components';

export const ColorContainer = styled.div`
  padding: 10px;
`
export const ColorTitle = styled.h2`
  line-height: 1.3;
`
export const ColorSpan = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  margin: 8px;
  border: none;
  background-color: ${({backgroundColor})=>backgroundColor};
  transition: transform 250ms linear;
  border: ${({currentIdx, idx})=>idx === currentIdx ? '3px solid black' : 'none'}

  &:hover{
    transform: scale(1.1);
  }
`
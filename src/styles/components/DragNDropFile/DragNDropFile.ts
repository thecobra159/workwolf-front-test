import styled from 'styled-components'
import { Theme } from '../../Theme'

export const DragNDropFileWrapper = styled.div`
  width: 95%;
`

export const DragNDropFileTitle = styled.h2`
  font-size: ${Theme.sizes.md};
  font-weight: ${Theme.weights.bold};
  margin-top: 25px;
  width: 95%;
`

export const DragNDropFileBox = styled.div`
  align-items: center;
  border: 2px solid ${Theme.colors.Gray};
  border-style: dotted;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 30px 15px;
  width: 100%;

  svg {
    fill: ${Theme.colors.WorkwolfColors};
    width: 112px;
  }
`

export const DragNDropFileBoxText = styled.p`
  color: ${Theme.colors.Black};
  font-size: ${Theme.sizes.md};
  font-weight: ${Theme.weights.regular};
  margin-top: 15px;

  &.description {
    color: ${Theme.colors.Gray};
    font-size: ${Theme.sizes.sm};
    font-weight: ${Theme.weights.light};
  }
`

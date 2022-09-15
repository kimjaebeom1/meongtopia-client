import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div``;
export const UploadImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 80px;
    text-align: center;
  }
`;

export const UploadBtn = styled.button`
  width: 120px;
  height: 120px;
  border: 1px solid #808080;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 1.2rem;
  color: #808080;

  @media ${breakPoints.mobile} {
    width: 70px;
    height: 80px;

    text-align: center;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

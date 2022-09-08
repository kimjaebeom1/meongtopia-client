import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const UploadImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
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
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

import styled from "@emotion/styled";
import { MdOutlineCancel } from "react-icons/md";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div``;

export const DogProfileWrapper = styled.div`
  margin-top: 1rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-left: 0px;
  }
`;

export const Tag = styled.div`
  margin-top: 2em;
  font-size: 1.4rem;
`;

export const DogAddWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const DogCountWrapper = styled.div`
  font-size: 1.4rem;
  margin-top: 1.7em;
  display: flex;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DogCount = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
    width: 50%;
  }
`;

export const BigDogCount = styled.input`
  padding-left: 0.5rem;
  border-radius: 0.8rem;
  margin-left: 10px;
  margin-right: 50px;
  width: 50%;
  border: 1px solid #808080;

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const SmallDogCount = styled.input`
  padding-left: 0.5rem;
  border-radius: 0.8rem;
  margin-left: 10px;
  margin-right: 50px;
  width: 50%;
  border: 1px solid #808080;

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;
export const DogName = styled.textarea`
  padding-left: 15px;
  background: #ebebeb;
  border: none;
  border-radius: 0.8rem;
  height: 20%;
  resize: none;
  padding-top: 0.64rem;

  @media ${breakPoints.mobile} {
    line-height: 100%;
    padding-top: 1rem;
  }
`;

export const DogAge = styled.textarea`
  height: 20%;
  margin-top: 0.8rem;
  padding-left: 15px;
  background: #ebebeb;
  border: none;
  border-radius: 0.8rem;
  resize: none;
  padding-top: 0.64rem;

  @media ${breakPoints.mobile} {
    line-height: 100%;
    padding-top: 1rem;
  }
`;

export const DogBreed = styled.textarea`
  margin-top: 0.8rem;
  height: 20%;
  padding-left: 15px;
  background: #ebebeb;
  border: none;
  border-radius: 0.8rem;
  resize: none;
  padding-top: 0.64rem;

  @media ${breakPoints.mobile} {
    line-height: 100%;
    padding-top: 1rem;
  }
`;

export const DogDesc = styled.textarea`
  margin-top: 0.8rem;
  padding-left: 15px;
  height: 40%;
  background: #ebebeb;
  border: none;
  border-radius: 1rem;
  resize: none;
  padding-top: 0.64rem;

  @media ${breakPoints.mobile} {
    padding-top: 1rem;

    line-height: 100%;
    border-radius: 0.8rem;
  }
`;

export const AddDogBtn = styled.button`
  margin-top: 1.5em;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 3em;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  font-size: 17px;

  :hover {
    background: #f5cf1f;
    color: #ffffff;
    img {
      filter: brightness(0) invert(1);
    }
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DogListWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
    margin-top: 3rem;
  }
`;

export const DogListColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  & > div {
    height: 20%;
    margin-left: 35px;
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    & > div {
      height: 20%;
      margin-left: 5px;
      font-size: 20px;
    }
  }
`;

export const DogListImg = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 259px;
  background: #ebebeb;
  border-radius: 2rem;
  transition: all 0.5s ease;
  cursor: pointer;
  object-fit: cover;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  position: absolute;
  padding: 0.3rem;
  border: none;
  border-radius: 50%;
  background: #999;
  margin-left: 1.2rem;
  margin-top: 0.7rem;

  transform: translate(-50%, -50%);
  :hover {
    background: orange;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MobileDeleteBtn = styled.button`
  display: none;
  font-size: 25px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    display: flex;
    position: absolute;
    padding: 0.3rem;
    border: none;
    border-radius: 50%;
    background: #999;
    transform: translate(-50%, -50%);
    margin-top: 3.5rem;
    margin-left: 1.2rem;
    :hover {
      background: orange;
    }
  }
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-size: 36px;
  font-weight: 400;
  line-height: 51.73px;
  width: 100%;
`;

export const Line = styled.div`
  margin-top: 20px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
`;

export const DogListWrapper = styled.div`
  padding: 2rem;

  .slick-list {
    width: 100%;
    border-radius: 1rem;
  }
  .slick-dots {
    bottom: 20px;

    & > li {
      color: white;
    }

    & li > div > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

export const StoreNameTag = styled.div``;

export const Contents = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #cacaca;
  border-radius: 1rem;
  padding: 2rem;
`;

export const SliderItem = styled.div`
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 2rem;
    padding: 0.5rem;
  }
`;
export const CafeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  font-size: 36px;
`;

export const DogCount = styled.div`
  flex-direction: row;
  font-size: 20px;
`;

export const NextArrow = styled.div`
  display: block;
  margin-right: 50px;
`;

export const PrevArrow = styled.div`
  display: block;
  z-index: 2;
  margin-left: 50px;
`;

export const Img = styled.img`
  width: 770px;
  object-fit: cover;
  border-radius: 1rem;
`;

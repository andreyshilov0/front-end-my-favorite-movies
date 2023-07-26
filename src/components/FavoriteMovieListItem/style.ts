import styled from "@emotion/styled";

export const WrapperListItem = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 10px;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 10px
`;


export const MovieWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperTitle = styled.header`
  font-size: 20px;
  margin-top: 5px;
  margin-right: 10px; 
  flex: 1;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

export const ImageWrapper = styled.img`
  width: 70px;
  height: 120px;
  margin: 1px 5px 1px 1px; 
`;

export const WrapperOverview = styled.div`
  display: flex;
  font-size: 16px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

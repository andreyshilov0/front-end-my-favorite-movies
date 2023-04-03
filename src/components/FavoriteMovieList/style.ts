import { Container } from "@mui/system";
import styled from "@emotion/styled";

export const ListWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const ListWrapperListHeader = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: space-between;
`;

export const ListWrapperBody = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  max-height: 500px;
`;

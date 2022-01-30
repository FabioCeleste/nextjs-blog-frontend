import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    .post-cover {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      max-width: 100%;
      height: 480px;
    }

    h1 {
      font-size: ${theme.font.sizes.huge};
      color: ${theme.colors.darkText};
    }

    h2 {
      font-size: ${theme.font.sizes.medium};
      font-weight: normal;
      color: ${theme.colors.darkerGray};
    }

    .separator-header {
      width: 80%;
      height: 1px;
      background-color: ${theme.colors.mediumGray};
    }
  `}
`;

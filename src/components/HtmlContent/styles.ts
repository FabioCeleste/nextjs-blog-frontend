import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 35px;

    p {
      font-size: 16px;
      font-weight: 600;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondaryColor};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    pre {
      background: ${theme.colors.primaryColor};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.xlarge} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
    }
    table td,
    table th {
      padding: ${theme.spacings.small};
    }

    ul,
    ol {
      margin: ${theme.spacings.xlarge};
    }

    @media ${theme.media.lteMedium} {
      font-size: 1.8rem;

      .image-style-side {
        max-width: 100%;
        float: none;
        margin: 0;
      }
    }
  `}
`;

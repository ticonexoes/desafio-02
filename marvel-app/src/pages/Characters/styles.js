import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: 90%;
  margin: 50px auto;

  h1 {
    font-size: 3em;
    margin-bottom: 10px;
  }
`;

export const ContainerInfosGeneral = styled.div`
  background: #202024;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0 0.1);
  padding: 50px 40px;
  display: flex;
  ${media.lessThan('medium')`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `}

  .imagem {
    width: 400px;
    margin-right: 50px;
    ${media.lessThan('medium')`
    width: 200px;
    margin-right: 0px;
    margin-bottom: 15px;
  `}

    img {
      max-width: 100%;
      border-radius: 10px;
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
    }
  }
  .content {
    h1 {
      font-size: 2.2em;
      color: #e63c29;
    }

    .description {
      margin: 5px 0 15px;
      p {
        font-size: 1em;
      }
      span {
        font-size: 1.5em;
      }
    }

    .characters {
      margin: 5px 0 15px;

      p {
        font-size: 1em;
      }

      li {
        list-style: none;

        font-size: 1.5em;
        text-decoration: none;
      }
    }
  }
`;

export const ContainerSeries = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;

export const LoadingPagee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  svg {
    animation: ${rotate} linear 0.3s;
  }
`;

export const Footer = styled.div`
  background: #202024;
  min-width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px 50px 0 0;
`;

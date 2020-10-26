import styled, { keyframes, css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: 90%;
  background: #202024;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0 0.1);
  margin: 20px auto;
  padding: 50px 40px;
  ${media.lessThan('medium')`
  box-shadow: 0 0 20px rgba(0, 0, 0 0.1);
  margin: 20px auto;
  padding: 20px 20px;
  `}
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;

export const Form = styled.form`
  display: flex;
  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;

  `}
  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #eee;
    font-size: 1em;
    border-radius: 4px;
    margin: 0 5px;
    ${media.lessThan('medium')`
    margin:  5px;

  `}
  }
`;
export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  span {
    color: #fff;
    text-transform: uppercase;
  }

  background: #e63c29;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all linear 0.3s;
  ${media.lessThan('medium')`
  padding: 10px 15px;
  margin-top: 10px;
  margin-left: 0;
  flex: 1;
  font-size: 1.4em;
  `}
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.Loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
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

export const ListComics = styled.div`
  max-width: 90%;
  margin: 64px auto 0;

  h1 {
    font-size: 3em;
    text-align: center;
  }

  .listContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 300px;
    margin: 30px;
    border-radius: 10px;
    background: #202024;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      max-width: 100%;
      height: 200px;
      border-radius: 10px 10px 0 0;
    }

    .info {
      padding: 10px;
      strong {
        font-size: 1.5em;
        text-align: center;
      }
    }

    a {
      display: flex;
      text-decoration: none;

      button {
        align-self: flex-end;
        flex: 1;
        background: red;
        border: 0;
        font-size: 1.3em;
        border-radius: 0 0 10px 10px;
        padding: 10px;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
`;

export const Navigation = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 30px;
    margin-bottom: 100px;
    padding: 10px 30px;
    border-radius: 5px;
    border: 0;
    font-size: 1.5em;
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

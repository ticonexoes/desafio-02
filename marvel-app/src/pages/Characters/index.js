import React from 'react';

import PropTypes from 'prop-types';
import { FaSpinner as Loading } from 'react-icons/fa';
import api from '../../services/api';

import {
  Container,
  LoadingPagee,
  ContainerInfosGeneral,
  Footer,
} from './styles';

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      loadingPage: false,
      copy: {},
    };
  }

  componentDidMount() {
    this.loadComics();
  }

  loadComics = async () => {
    this.setState({
      loadingPage: true,
    });

    const { match } = this.props;

    const { id } = match.params;
    const comicId = Number(id);
    const response = await api.get(`/v1/public/comics/${comicId}`);

    const { data, ...copyInfo } = response.data;
    const comics = response.data.data.results;

    this.setState({
      comics,
      copy: copyInfo,
      loadingPage: false,
    });
  };

  render() {
    const { comics, loadingPage, copy } = this.state;

    return (
      <>
        {loadingPage ? (
          <LoadingPagee>
            <Loading size={40} color="#fff" />
          </LoadingPagee>
        ) : (
          <Container>
            <h1>General information</h1>
            {comics.map((comic) => (
              <>
                <ContainerInfosGeneral>
                  <div className="imagem">
                    <img
                      src={`${comic.images[0].path}.${comic.images[0].extension}`}
                      alt={comic.title}
                    />
                  </div>

                  <div className="content">
                    <h1> {comic.title}</h1>

                    <div className="description">
                      {comic.description && (
                        <p>
                          Description: <span>{comic.description}</span>
                        </p>
                      )}
                      <p>Format: </p>
                      <span>{comic.format}</span>
                    </div>

                    {comic.characters.items.length > 0 && (
                      <div className="characters">
                        <p>Characters: </p>

                        {comic.characters.items.map((character) => (
                          <li>{character.name}</li>
                        ))}
                      </div>
                    )}
                    {comic.creators.items.length > 0 && (
                      <div className="characters">
                        <p> Creators: </p>
                        {comic.creators.items.map((creator) => (
                          <li>
                            {creator.name}- {creator.role}
                          </li>
                        ))}
                      </div>
                    )}
                  </div>
                </ContainerInfosGeneral>
              </>
            ))}
          </Container>
        )}

        <Footer>
          <p>{copy.attributionText}</p>
        </Footer>
      </>
    );
  }
}

export default Characters;

Characters.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

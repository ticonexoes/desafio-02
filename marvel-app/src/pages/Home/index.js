import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner as Loading } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import getYear from 'date-fns/getYear';
import api from '../../services/api';

import 'react-datepicker/dist/react-datepicker.css';

import {
  Container,
  Form,
  SubmitButton,
  LoadingPagee,
  ListComics,
  Navigation,
  Footer,
} from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      loading: false,
      loadingPage: false,
      copy: {},
      data: {},
      newSearch: '',
      titleStartsWith: 'Avengers',
      limit: 9,
      endDate: new Date('2021'),
      startDate: new Date('1991'),
    };
  }

  componentDidMount() {
    this.loadComics();
  }

  loadComics = async (newSearch = 'Avengers') => {
    this.setState({
      loadingPage: true,
    });

    const { limit, endDate, startDate } = this.state;
    const data1 = getYear(startDate);
    const data2 = getYear(endDate);

    const date1 = `${data1}-01-01`;
    const date2 = `${data2}-01-01`;
    console.log(date1);

    const response = await api.get(
      `/v1/public/comics?titleStartsWith=${newSearch}&dateRange=${date1},${date2}&limit=${limit}`,
      {
        params: {
          format: 'comic',
          formatType: 'comic',
        },
      }
    );

    const { data, ...copyInfo } = response.data;
    const comics = response.data.data.results;

    this.setState({
      comics,
      data,
      copy: copyInfo,
      loadingPage: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({ newSearch: e.target.value });
  };

  handleDateStart = (date) => {
    this.setState({ startDate: date });
  };

  handleDateEnd = (date) => {
    this.setState({ endDate: date });
    console.log(date);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newSearch, endDate, startDate } = this.state;

    this.setState({
      titleStartsWith: newSearch,
      loading: false,
    });

    this.loadComics(newSearch);
  };

  loadMore = () => {
    const { limit, data, titleStartsWith } = this.state;

    if (limit > data.total) {
      return;
    }

    const limitNew = limit + 9;

    this.setState({ limit: limitNew });
    this.loadComics(titleStartsWith);
  };

  render() {
    const {
      loading,
      loadingPage,
      titleStartsWith,
      comics,
      copy,
      data,
      newSearch,
      startDate,
      endDate,
    } = this.state;

    return (
      <>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="what is your hero?"
              value={newSearch}
              required
              onChange={this.handleInputChange}
            />
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => this.handleDateStart(date)}
                showYearPicker
                value={startDate}
                dateFormat="yyyy"
                yearItemNumber={7}
              />
            </div>

            <DatePicker
              selected={endDate}
              onChange={(date) => this.handleDateEnd(date)}
              showYearPicker
              value={endDate}
              dateFormat="yyyy"
              yearItemNumber={7}
            />
            <SubmitButton type="submit" Loading={loading}>
              {loading ? (
                <Loading color="#fff" size={14} />
              ) : (
                <span>Search Hero</span>
              )}
            </SubmitButton>
          </Form>
        </Container>
        <h1
          style={{
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          Total: {data.total}
        </h1>

        {loadingPage ? (
          <LoadingPagee>
            <Loading size={40} color="#fff" />
          </LoadingPagee>
        ) : (
          <ListComics>
            <h1> Comics </h1>

            <div className="listContainer">
              {comics.map((result) => (
                <div className="card" key={result.id}>
                  <img
                    src={`${result.thumbnail.path}/landscape_xlarge.${result.thumbnail.extension}`}
                    alt=""
                  />
                  <div className="info">
                    <strong>{result.title}</strong>
                    {/* <p>{result.description}</p> */}
                  </div>
                  <Link to={`/characters/${result.id}`}>
                    <button type="button">details</button>
                  </Link>
                </div>
              ))}
            </div>
          </ListComics>
        )}

        <Navigation>
          <button type="button" onClick={this.loadMore}>
            load More
          </button>
        </Navigation>

        <Footer>
          <p>{copy.attributionText}</p>
        </Footer>
      </>
    );
  }
}

export default Home;

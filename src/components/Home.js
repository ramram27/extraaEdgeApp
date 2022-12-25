import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import User from "./User";
import Header from "./Header";


class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }
  //Each user's profile contains an avatar picture, name, email, phone, address, website and company name
  render() {
    const { loading, items, error } = this.props;
    if (loading) return <span>loading...</span>;
    if (error) return <span>error!</span>;

    return (
      <>
     <Header />
      <div>
        {items.map(val => (
          <User name={val.name} email={val.email} username={val.username}
          phone={val.phone} address={val.address} website={val.website} 
          company={val.company.name}
          />
        ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { userData } = state;
  return {
    loading: userData.loading,
    items: userData.data,
    error: userData.error
  };
};

export default connect(mapStateToProps)(Home);
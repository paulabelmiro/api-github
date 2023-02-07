import React from "react";
import PropTypes from 'prop-types'

import { MdGroup, MdLocationCity, MdWork, MdLink, MdNavigateBefore } from 'react-icons/md'

import { Container, Header, Login, Name, Avatar, Inner, Data, Back } from "./styles";

const Profile = ({user}) => (
  <Container>
    <Header>
      <Back to={`/`} ><MdNavigateBefore size={20}/> Voltar</Back>
      <Avatar src={user.avatar_url}/>
      <Login>{user.login}</Login>
      <Name> {user.name} </Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20}/>
         {user.followers} &nbsp;<i> seguidores &nbsp;</i> &middot; {user.following} &nbsp;<i> seguindo</i>
      </Data>
      {user.company && (
        <Data>
        <MdWork size={20}/>
         {user.company}
      </Data>
      )}
      {user.location && (
        <Data>
        <MdLocationCity size={20}/>
         {user.location}
      </Data>
      )}
      {user.blog && (
        <Data>
        <MdLink size={20}/>&nbsp;
        <a href={user.blog} target="_blanc">{user.blog}</a>
      </Data>
      )}
    </Inner>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    blog: PropTypes.string,
  }).isRequired,
};

export default Profile;

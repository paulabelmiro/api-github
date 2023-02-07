import React, { useState } from 'react';
import {MdSearch} from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';
import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');

  document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        var btn = document.querySelector("#submit");
        btn.click();
    }
  });

  return(
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder='usuário'
          value={login}
          onChange={(event) => setLogin(event.target.value)}

          />
        <Button id="submit" to={`/${login}/repositories`} >
          <MdSearch size={42}/>
        </Button>
      </Form>
    </Container>
  )
}

export default MainPage;

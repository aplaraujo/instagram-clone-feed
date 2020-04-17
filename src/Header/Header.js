import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import instagramLogo from '../img/instagram-logo.svg';
import Button from '../GeneralStyles/Button';
import Container from '../GeneralStyles/Container';
import styled from 'styled-components';

const Header = () => {
    return (
        <Topbar>
            <TopbarFlex>
                <Container> 
                    <ContainerFlex>
                        <TopbarLogo href="/"><TopbarLogoImage src={instagramLogo} alt="Instagram"/></TopbarLogo>
                        <Button><FontAwesomeIcon icon={faPaperPlane} /></Button>
                    </ContainerFlex>
                </Container>
            </TopbarFlex>
        </Topbar>
    )
}

export default Header;

const Topbar = styled.header `
    backface-visibility: hidden;
	background-color: white;
	left: 0;
	padding: 8px 16px;
	position: fixed;
	top: 0;
	width: 100%;
	box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
`;

const TopbarFlex = styled(Topbar)`
    display: flex;
    justify-content: space-between;
`;

const ContainerFlex = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

const TopbarLogo = styled.a `
    display: inline-block;
    height: 40px;
`;

const TopbarLogoImage = styled.img `
    height: 100%;
`;


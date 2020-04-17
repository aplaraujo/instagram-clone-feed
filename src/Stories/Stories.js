import React from 'react';
import yodaProfile from '../img/profiles/yoda/yoda-profile.jpg';
import gamoraProfile from '../img/profiles/gamora/gamora-profile.jpg';
import blackPantherProfile from '../img/profiles/black-panther/black-panther-profile.jpg';
import styled from 'styled-components';
import Container from '../GeneralStyles/Container';


const Stories = () => {
    return (
        <Container>
            <StoriesStyle>
                
                <StoriesStyleContainer>
                    <UserThumb href="/">
                        <UserThumbWrapper>
                            <UserThumbImage src={yodaProfile} alt="Yoda"/>
                        </UserThumbWrapper>
                    </UserThumb>
                    
                        <UserThumb href="/" inputBackground="linear-gradient(45deg, rgba(245,160,77,1) 0%, rgba(160,15,139,1) 100%)">
                            <UserThumbWrapper>
                                <UserThumbImage src={gamoraProfile} alt="Gamora"/>
                            </UserThumbWrapper>
                        </UserThumb>

                    <UserThumb href="/">
                        <UserThumbWrapper>
                            <UserThumbImage src={blackPantherProfile} alt="Black Panther"/>
                        </UserThumbWrapper>
                    </UserThumb>
                </StoriesStyleContainer>
                
            </StoriesStyle>
        </Container>
    )
}

export default Stories;

const UserThumb = styled.a `
    display: flex;
	border-radius: 100%;
	overflow: hidden;
    width: 78px;
	height: 78px;
	margin: 0 8px;
	justify-content: center;
	align-items: center;
    background: ${props => props.inputBackground}
`;

const UserThumbWrapper = styled.span `
    border-radius: 100%;
	border: 2px solid white;
	display: inline-block;
	overflow: hidden;
    height: 72px;
	width: 72px;
`;

const UserThumbImage = styled.img `
    height: 100%;
	width: 100%;
`;

const StoriesStyle = styled.section `
    overflow-x: hidden;
	overflow-y: auto;
	width: 100%;
	padding: 16px 0;
`;

const StoriesStyleContainer = styled.div `
    align-items: center;
	display: flex;
	justify-content: flex-start;
	width: 100%;
`;


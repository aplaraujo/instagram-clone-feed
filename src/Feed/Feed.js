import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons';
import yodaProfile from '../img/profiles/yoda/yoda-profile.jpg';
import dominoProfile from '../img/profiles/domino/domino-profile.jpg';
import gamoraProfile from '../img/profiles/gamora/gamora-profile.jpg';
import carolProfile from '../img/profiles/carol/carol-profile.jpg';
import blackPantherProfile from '../img/profiles/black-panther/black-panther-profile.jpg';
import bruceWayneProfile from  '../img/profiles/bruce/bruce-profile.jpg';
import yoda1 from '../img/profiles/yoda/yoda-1.jpg';
import gamora1 from '../img/profiles/gamora/gamora-1.jpg';
import blackPanther1 from '../img/profiles/black-panther/black-panther-1.jpg';
import bruce1 from '../img/profiles/bruce/bruce-1.jpg';
import carol1 from '../img/profiles/carol/carol-1.jpg';
import domino1 from '../img/profiles/domino/domino-1.jpg';
import Button from '../GeneralStyles/Button';
import styled from 'styled-components';
import Container from '../GeneralStyles/Container';
import Bold from '../GeneralStyles/Bold';

const Feed = () => {
    return (
        <Container>
           <FeedStyle>
               <Post>
                   <PostHeader>
                       <PostHeaderUser>
                           <PostHeaderUserThumb href="/">
                               <PostHeaderUserThumbImage src={yodaProfile} alt="Yoda"/>
                            </PostHeaderUserThumb>
                           <PostHeaderUserName href="/">Mestre Yoda</PostHeaderUserName>
                       </PostHeaderUser>
                        <Button><FontAwesomeIcon icon={faEllipsisH}/></Button>
                   </PostHeader>
                   <PostFigure>
                        <PostFigureImage src={yoda1} alt="Yoda"/>
                   </PostFigure>
                   <PostControls>
                       <PostControl><FontAwesomeIcon icon={faHeart}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faComment}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faBookmark}/></PostControl>
                   </PostControls>
                   <PostStatus>
                       <PostStatusUser>
                           <PostStatusUserThumb href="/">
                               <PostStatusUserThumbImage src={dominoProfile} alt="Domino"/>
                            </PostStatusUserThumb>
                           <PostStatusUserSpan>
                               curtido por <Bold href="/">Domino</Bold> e outras <Bold href="/">7 pessoas</Bold>
                           </PostStatusUserSpan>
                       </PostStatusUser>
                   </PostStatus>
               </Post>

               <Post>
                   <PostHeader>
                       <PostHeaderUser>
                           <PostHeaderUserThumb href="/">
                               <PostHeaderUserThumbImage src={gamoraProfile} alt="Gamora"/>
                            </PostHeaderUserThumb>
                           <PostHeaderUserName href="/">Gamora Zen</PostHeaderUserName>
                       </PostHeaderUser>
                        <Button><FontAwesomeIcon icon={faEllipsisH}/></Button>
                   </PostHeader>
                   <PostFigure>
                        <PostFigureImage src={gamora1} alt="Gamora"/>
                   </PostFigure>
                   <PostControls>
                       <PostControl><FontAwesomeIcon icon={faHeart}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faComment}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faBookmark}/></PostControl>
                   </PostControls>
                   <PostStatus>
                       <PostStatusUser>
                           <PostStatusUserThumb href="/">
                               <PostStatusUserThumbImage src={carolProfile} alt="Carol"/>
                            </PostStatusUserThumb>
                           <PostStatusUserSpan>
                               curtido por <Bold href="/">Carol Danvers</Bold> e outras <Bold href="/">7 pessoas</Bold>
                           </PostStatusUserSpan>
                       </PostStatusUser>
                   </PostStatus>
               </Post>

               <Post>
                   <PostHeader>
                       <PostHeaderUser>
                           <PostHeaderUserThumb href="/">
                               <PostHeaderUserThumbImage src={blackPantherProfile} alt="T'Challa"/>
                               </PostHeaderUserThumb>
                           <PostHeaderUserName href="/">T'Challa</PostHeaderUserName>
                       </PostHeaderUser>
                        <Button><FontAwesomeIcon icon={faEllipsisH}/></Button>
                   </PostHeader>
                   <PostFigure>
                        <PostFigureImage src={blackPanther1} alt="T'Challa"/>
                   </PostFigure>
                   <PostControls>
                       <PostControl><FontAwesomeIcon icon={faHeart}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faComment}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faBookmark}/></PostControl>
                   </PostControls>
                   <PostStatus>
                       <PostStatusUser>
                           <PostStatusUserThumb href="/">
                               <PostStatusUserThumbImage src={bruceWayneProfile} alt="Bruce"/>
                           </PostStatusUserThumb>
                           <PostStatusUserSpan>
                               curtido por <Bold href="/">Bruce Wayne</Bold> e outras <Bold href="/">5 pessoas</Bold>
                           </PostStatusUserSpan>
                       </PostStatusUser>
                   </PostStatus>
               </Post>

               <Post>
                   <PostHeader>
                       <PostHeaderUser>
                           <PostHeaderUserThumb href="/">
                               <PostHeaderUserThumbImage src={carolProfile} alt="Carol"/>
                           </PostHeaderUserThumb>
                           <PostHeaderUserName href="/">Carol Danvers</PostHeaderUserName>
                       </PostHeaderUser>
                        <Button><FontAwesomeIcon icon={faEllipsisH}/></Button>
                   </PostHeader>
                   <PostFigure>
                        <PostFigureImage src={carol1} alt="Carol"/>
                   </PostFigure>
                   <PostControls>
                       <PostControl><FontAwesomeIcon icon={faHeart}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faComment}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faBookmark}/></PostControl>
                   </PostControls>
                   <PostStatus>
                       <PostStatusUser>
                           <PostStatusUserThumb href="/">
                               <PostStatusUserThumbImage src={yodaProfile} alt="Yoda"/></PostStatusUserThumb>
                           <PostStatusUserSpan>
                               curtido por <Bold href="/">Mestre Yoda</Bold> e outras <Bold href="/">7 pessoas</Bold>
                           </PostStatusUserSpan>
                       </PostStatusUser>
                   </PostStatus>
               </Post>

               <Post>
                   <PostHeader>
                       <PostHeaderUser>
                           <PostHeaderUserThumb href="/">
                               <PostHeaderUserThumbImage src={dominoProfile} alt="Domino"/>
                        </PostHeaderUserThumb>
                           <PostHeaderUserName href="/">Domino</PostHeaderUserName>
                       </PostHeaderUser>
                        <Button><FontAwesomeIcon icon={faEllipsisH}/></Button>
                   </PostHeader>
                   <PostFigure>
                        <PostFigureImage src={domino1} alt="Domino"/>
                   </PostFigure>
                   <PostControls>
                       <PostControl><FontAwesomeIcon icon={faHeart}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faComment}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faBookmark}/></PostControl>
                   </PostControls>
                   <PostStatus>
                       <PostStatusUser>
                           <PostStatusUserThumb href="/"> 
                               <PostStatusUserThumbImage src={blackPantherProfile} alt="Bruce"/>
                            </PostStatusUserThumb>
                           <PostStatusUserSpan>
                               curtido por <Bold href="/">T'Challa</Bold> e outras <Bold href="/">3 pessoas</Bold>
                           </PostStatusUserSpan>
                       </PostStatusUser>
                   </PostStatus>
               </Post>

               <Post>
                   <PostHeader>
                       <PostHeaderUser>
                           <PostHeaderUserThumb href="/">
                               <PostHeaderUserThumbImage src={bruceWayneProfile} alt="Bruce"/>
                           </PostHeaderUserThumb>
                           <PostHeaderUserName href="/">Bruce Wayne</PostHeaderUserName>
                       </PostHeaderUser>
                        <Button><FontAwesomeIcon icon={faEllipsisH}/></Button>
                   </PostHeader>
                   <PostFigure>
                        <PostFigureImage src={bruce1} alt="Bruce"/>
                   </PostFigure>
                   <PostControls>
                       <PostControl><FontAwesomeIcon icon={faHeart}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faComment}/></PostControl>
                       <PostControl><FontAwesomeIcon icon={faBookmark}/></PostControl>
                   </PostControls>
                   <PostStatus>
                       <PostStatusUser>
                           <PostStatusUserThumb href="/">
                               <PostStatusUserThumbImage src={gamoraProfile} alt="Gamora"/>
                               </PostStatusUserThumb>
                           <PostStatusUserSpan>
                               curtido por <Bold href="/">Gamora Zen</Bold> e outras <Bold href="/">2 pessoas</Bold>
                           </PostStatusUserSpan>
                       </PostStatusUser>
                   </PostStatus>
               </Post>
               
           </FeedStyle>
        </Container>
    )
}
export default Feed;

const FeedStyle = styled.section `
    width: 100%;
	display: flex;
	flex-direction: column;
    padding: 16px;
    @media (min-width: 728px) {
        padding: 16px 0;
    }
`;

const Post = styled.article `
    background-color: white;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 30px;
`;

const PostHeader = styled.header `
    align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 8px;
`;

const PostHeaderUser = styled.div `
    display: flex;
	align-items: center;
`;

const PostHeaderUserThumb = styled.a `
    height: 40px;
	margin-right: 8px;
    width: 40px;
`;

const PostHeaderUserThumbImage = styled.img `
    height: 100%;
    width: 100%;
    border-radius: 100%;
`;

const PostHeaderUserName = styled.a `
    color: black;
	font-size: 0.75rem;
	font-weight: bold;
	text-decoration: none;
`;

const PostFigure = styled.figure `
    overflow: hidden;
	margin: 0;
	height: auto;
	width: 100%;
`;

const PostFigureImage = styled.img `
    width: 100%;
`;

const PostControls = styled.nav `
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4px 0;
`;

const PostControl = styled.button `
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
    font-size: 1.55rem;
	margin: 0 8px;

    &:last-of-type {
	    justify-self: flex-end;
	    margin-left: auto;
    }
`;

const PostStatus = styled.div `
    display: flex;
	padding: 8px;
	background-color: rgba(0, 0, 0, 0.05);
`;

const PostStatusUser = styled.div `
    display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const PostStatusUserSpan = styled.div `
    font-size: 0.8rem;
`;

const PostStatusUserThumb = styled.a `
    height: 40px;
	margin-right: 8px;
    width: 40px;
`;

const PostStatusUserThumbImage = styled.img `
    height: 100%;
    width: 100%;
    border-radius: 100%;
`;
import React, { Component } from "react";
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    PocketIcon,
    InstapaperIcon,
    EmailIcon,
} from 'react-share';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    youtubeShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
   
    LineShareButton,
    PocketShareButton,
    InstapaperShareButton,
    EmailShareButton,
} from 'react-share';
import "./DetailsCard.css";
// import { Collection, CollectionItem, Button } from 'react-materialize'
import { Row, Col, Card, CardTitle, Button } from 'react-materialize'


class DetailsCard extends Component {

    delPlace = (citiesId, detailsId) => {
        this.props.onClick(citiesId, detailsId)
    }

    delCity = (userToken, citiesId) => {
        this.props.deleteCity(userToken, citiesId)
    }

    render() {
        console.log(this.props)
        return (
            <div id="outer-container">
                <Card id="place-container">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                    {this.props.data < 1 ? null : <h4 id="card-header"> Carnet de voyage de {this.props.username}</h4>}
                    {this.props.data.map(result => (
                        <Row>
                            <Col s={12} key={result._id}>
                                <Card>
                                    <h5>
                                        <span id='placeTitle'>
                                            {result.location}
                                        </span>
                                        {result.details.length < 1 ? (<span className='cityBtns'><Button onClick={() => this.delCity(this.props.token, result._id)} floating className='red detailBtn deleteBtn' waves='light' icon='delete' /></span>) : ""}
                                    </h5>
                                    <div className="row">
                                    <div className="center">
                                        <FacebookShareButton url={"https://www.facebook.com"}>
                                            < FacebookIcon></FacebookIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </FacebookShareButton>
                                        
                                    <LinkedinShareButton url={"https://www.linkedin.com"}>
                                            < LinkedinIcon></LinkedinIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </LinkedinShareButton>
                                        <TwitterShareButton url={"https://twitter.com"}>
                                            < TwitterIcon></TwitterIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </TwitterShareButton>
                                        
                                        
                                        <TelegramShareButton url={"https://web.telegram.org"}>
                                            < TelegramIcon></TelegramIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                        </TelegramShareButton>
                                        <WhatsappShareButton url={"https://www.whatsapp.com"}>
                                            < WhatsappIcon></WhatsappIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </WhatsappShareButton>
                                        <InstapaperShareButton url={"https://www.instapaper.com/"}>
                                        < InstapaperIcon></InstapaperIcon>
                                        {shareCount => (
                                            <span className="myShareCountWrapper">{shareCount}</span>
                                        )}
                                    </InstapaperShareButton>
                                        <PinterestShareButton url={"https://www.pinterest.fr"}>
                                            < PinterestIcon></PinterestIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </PinterestShareButton>
                                        <VKShareButton url={"https://vk.com"}>
                                            < VKIcon></VKIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </VKShareButton>
                                        <OKShareButton url={"https://ok.ru"}>
                                            < TwitterShareButton></TwitterShareButton>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </OKShareButton>
                                        <RedditShareButton url={"https://www.reddit.com"}>
                                            < RedditIcon></RedditIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </RedditShareButton>
                                        <TumblrShareButton url={"https://www.tumblr.com"}>
                                            < TumblrIcon></TumblrIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </TumblrShareButton>
                                        <LivejournalShareButton url={"https://www.livejournal.com"}>
                                            < LivejournalIcon></LivejournalIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </LivejournalShareButton>
                                        <MailruShareButton url={"https://corp.mail.ru"}>
                                            < MailruIcon></MailruIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </MailruShareButton>
                                        <ViberShareButton url={"https://www.viber.com"}>
                                            < ViberIcon></ViberIcon>
                                            {shareCount => (
                                                <span className="myShareCountWrapper">{shareCount}</span>
                                            )}
                                        </ViberShareButton>
                                       
                                        <LineShareButton url={"https://line.me"}>
                                        < LineIcon></LineIcon>
                                        {shareCount => (
                                            <span className="myShareCountWrapper">{shareCount}</span>
                                        )}
                                    </LineShareButton>
                                    <PocketShareButton url={"https://getpocket.com"}>
                                    < PocketIcon></PocketIcon>
                                    {shareCount => (
                                        <span className="myShareCountWrapper">{shareCount}</span>
                                    )}
                                </PocketShareButton>
                               
                               
                            <EmailShareButton url={"https://www.facebook.com"}>
                                < EmailIcon></EmailIcon>
                                {shareCount => (
                                    <span className="myShareCountWrapper">{shareCount}</span>
                                )}
                            </EmailShareButton>
                            </div>
                                    </div>
                                    <Row>
                                        {result.details.map(details => (
                                            <Col s={4}>
                                                <Card
                                                    className='small'
                                                    key={details._id}
                                                    header={<CardTitle image={details.image}>{details.name}</CardTitle>}
                                                >
                                                    <p className="description">{details.description}</p>
                                                    <div className='detailBtns'>

                                                        <Button onClick={() => this.delPlace(result._id, details._id)} floating className='red detailBtn' waves='light' icon='delete' />
                                                    </div>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Card>
            </div>
        );
    }
}

export default DetailsCard;

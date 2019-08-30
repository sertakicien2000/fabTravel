import React, { Component } from "react";
import "./Landing.css";
import { Button, Row, Card, Col, CardPanel, Modal, Input, Navbar } from "react-materialize";
import NavBar2 from "../NavBar2";
import { Link } from "react-router-dom";
import randtoken from "rand-token";
import API from "../../utils/API";
import NavItem from "react-materialize/lib/NavItem";


const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            username: "",
            password: "",
            userId: ""
        }
    }

    scrollLearn = () => {
        document.getElementById("learnSection").scrollIntoView()
    }

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name

        this.setState({
            [name]: value
        });
    };

    handleSubmitSignUp = (e) => {
        e.preventDefault();
        const { name, email, username, password } = this.state;
        let formData = new FormData();

        formData.append('name', name)
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

        let token = randtoken.generate(16);

        let userData = {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            token: token
        }

        //console.log("userdata", userData)

        API.saveUser({
            name: userData.name,
            email: userData.email,
            username: userData.username,
            password: userData.password,
            token: userData.token
        }).then((result) => {
            //console.log("result: ", result)
            window.localStorage.setItem("token", result.data.token)
            window.localStorage.setItem("name", result.data.name)
            window.location = "/create"
        })
    }

    handleSubmitLogin = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        let loginData = new FormData();

        loginData.append('username', username);
        loginData.append('password', password);

        //console.log("logindata", loginData)



        API.getUser(this.state.username)
            .then((result) => {
                //console.log(result.data)

                if (this.state.password == result.data.password) {
                    let token = randtoken.generate(16);
                    window.localStorage.setItem("token", token)
                    window.localStorage.setItem("name", result.data.name)

                    let userInfo = {
                        username: this.state.username,
                        token: token
                    }

                    API.updateUserToken({ userInfo })



                    window.location = "/create"



                }
                else {
                    alert("Invalid Username/Password")
                }

            })




        // API.saveUser({
        //     name: loginData.name,
        //     email: loginData.email,
        //     username: loginData.username,
        //     password: loginData.password,
        // }).then((result) => {
        //     console.log("result: ", result)
        // })

        console.log("username:", this.state.username)
    }


    render() {


        return (
            <div>
                <div className="hero">
                <div id="sar">sary</div>
                    <Navbar brand={<img id="logo" src="uploads/logo.png" />} id="navbar2" right>
                        <NavItem>
                            <Modal
                                header="S'identifier"
                                trigger={<Button waves='light'>S'identifier</Button>}>
                                <Row>
                                    <Input onChange={this.handleInputChange} s={12} name="username" type="text" label="Nom d'utilisateur" />
                                    <Input onChange={this.handleInputChange} s={12} name="password" type="password" label="mot de passe"  />
                                    <Button onClick={this.handleSubmitLogin}>S'identifier</Button>
                                </Row>
                            </Modal>
                        </NavItem>
                    </Navbar>
                    <Row className="filler2" />
                    <Row className="filler3">
                        <Col s={12} m={1} />

                        <Col s={12} m={5}>
                            <h2><strong>FabTravel</strong></h2>
                            <h4>Revivez toutes vos vacances préférées et partagez-les avec vos amis!</h4>
                        </Col>
                        <Col s={12} m={6} />
                    </Row>
                    <Row className="filler2" >
                        <Col s={12} m={1}>
                        </Col>
                        <Col s={12} m={5}>
                            <Col s={12} m={6}>
                                <Button onClick={this.scrollLearn} className="orange" waves='light'> apprendre encore plus</Button>
                            </Col>
                            <Col s={12} m={6}>
                                <Modal
                                    header="S'inscrire"
                                    trigger={<Button className="orange" waves='light'>S'inscrire </Button>}>
                                    <Row>
                                        <Input onChange={this.handleInputChange} s={12} name="name" label="Nom" />
                                        <Input onChange={this.handleInputChange} name="email" type="email" label="Email" s={12} />
                                        <Input onChange={this.handleInputChange} s={12} name="username" label="Nom d'utilistaeur" />
                                        <Input onChange={this.handleInputChange} name="password" type="password" label="Mot de passe" s={12} />
                                        <Button onClick={this.handleSubmitSignUp} className="modal-action modal-close"><Link to={"/create"}>Créer</Link></Button>
                                    </Row>
                                </Modal>
                            </Col>
                        </Col>
                        <Col s={12} m={6}>

                        </Col>
                    </Row>
                </div>
                <div id="learnSection">
                    <Row className="learnFiller" />
                    <Row className="learn">
                        <Col s={12} m={1} />
                        <Col s={12} m={10}>
                            <h2>Voici comment ça fonctionne</h2>
                        </Col>
                        <Col s={12} m={1} />
                    </Row>
                    <Row>
                        <Col s={12} m={6} />
                        <Col className="learnList" s={12} m={6}>
                            <div>
                                <h4 className="bulletHeader"> Le passeport en ligne que vous pouvez partager avec vos amis!</h4>
                            </div>
                            <h5 className="bullets"> ☼   Tapez le nom d'une ville que vous avez visitée et cliquez sur sélectionner la ville pour commencer</h5 >
                            <h5 className="bullets"> ☼   Commencez à ajouter des lieux ou des événements visités dans cette ville</h5>
                            <h5 className="bullets"> ☼   Une fois que vous avez terminé une ville, recherchez et sélectionnez une autre ville.</h5>
                            <h5 className="bullets"> ☼   Accédez à la page de visualisation pour voir tous vos trajets et autres trajets d'utilisateurs.</h5>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Landing;
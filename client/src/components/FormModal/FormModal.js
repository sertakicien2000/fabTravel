import React, { Component } from "react";
import "./FormModal";
import API from "../../utils/API";


const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};
  
class FormModal extends Component {
constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
    toggle: false,
    name: "",
    description: "",
    saved: [],
    selectedFile: ""
    }
}

toggle(event) {
    this.setState(prevState => ({
    toggle: !prevState.toggle
    }));
}

handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name

    this.setState({
        [name]: value
    });
};

onChange = (e) => {
    const state = this.state;

    switch (e.target.name) {
    case 'selectedFile':
        state.selectedFile = e.target.files[0];
        break;
    default:
        state[e.target.name] = e.target.value;
    }

    this.setState(state);
}
  
handleSubmitForm = (e) => {
    e.preventDefault();
    this.toggle();
    const { name, description, selectedFile } = this.state;
    let formData = new FormData();

    formData.append('name', name)
    formData.append('description', description);
    formData.append('selectedFile', selectedFile);

    API.saveDetails(formData).then((result) => {

    })
}

render() {
    var modal = [];
    modal.push(
        <div className="modal" style={this.state.toggle ? display : hide}>
            <div className="modal-content">
                <h4>Titre du lieu</h4>
                <p>Entrez les détails </p>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    onChange={this.handleInputChange}
                                    name="name"
                                    id="name" 
                                    type="text" 
                                    className="validate"
                                />
                                <label for="name">Nom</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    onChange={this.handleInputChange}
                                    name="description"
                                    id="=description" 
                                    type="text" 
                                    className="validate"
                                />
                                <label for="description">Description</label>
                            </div>
                        </div>
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Fichier</span>
                                <input 
                                    type="file"
                                    onChange={this.onChange}
                                    name="selectedFile"
                                />
                            </div>
                            <div className="file-path-wrapper">
                                <input 
                                    type="text"
                                    className="file-path validate" 
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a className="btn" onClick={this.handleSubmitForm}>Enregistrer</a>
            </div>
        </div>
    );

    return (
    <div>
        <a className="btn" onClick={this.toggle}>Ajouter un lieu</a>
        {modal}
    </div>
    );
}
}

export default FormModal;
import React, { Component } from 'react';

class FormMovies extends Component {

    constructor(props) {

        super(props);

        this.state = {
            moviename: '',
            image: '',
            commentaire: '',
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        const url = "https://post-a-form.herokuapp.com/api/movies/";


        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Film ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
                alert("Erreur lors de l'ajout d'un film");
            });

    }



    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitForm(e) {
        e.preventDefault();
    };



    render() {
        return (
            <div className="FormMovie">
                <h1>Saisie d'un film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="moviename">Nom</label>
                            <input
                                type="text"
                                id="moviename"
                                name="moviename"
                                onChange={this.onChange}
                                value={this.state.moviename}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="image">Poster</label>
                            <input
                                type="url"
                                id="image"
                                name="image"
                                onChange={this.onChange}
                                value={this.state.image}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="commentaire">Commentaire</label>
                            <textarea
                                type="commentaire"
                                id="commentaire"
                                name="commentaire"
                                onChange={this.onChange}
                                value={this.state.commentaire} rows="5" cols="25">
                                pourquoi tu aimes ce film? qu'est-ce qui t'a marqué?
                                </textarea>
                        </div>

                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>

        )
    }
}


export default FormMovies;
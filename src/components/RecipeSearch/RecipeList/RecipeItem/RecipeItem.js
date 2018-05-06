import React, { Component } from 'react';
import Dialog, { DialogContent, DialogTitle} from 'material-ui/Dialog';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../RecipeSearch.css';
import SelectedRecipe from '../../SelectedRecipe/SelectedRecipe';


// This component references a specific recipe found via our Yummly API recipe search
// This was created in the parent component (RecipeList) via the Map funtion and passed it's unique data

class RecipeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Boolean value to determine if UI Dialogue is displayed or not
            open: false,
        }
    }

    // Toggle local state "open" value to open or close the pop-up UI Dialog
    handleClickOpen = () => {
        console.log('hello');
        
        this.setState({ open: true });
        this.props.dispatch({
            type: 'GET_SELECTED_RECIPE',
            payload: this.props.recipe.id
        })
    };
    handleClose = () => {
        console.log('closing');
        this.setState({ open: false });
    };

    render() {
        // Alias recipe url as "recipePic" for code clarity
        let recipePic = this.props.recipe.smallImageUrls[0];
        // Use split() function to splice the '90' from the image url (stands for 90px which is too small), creates splitPic array
        let splitPic = recipePic.split('90');
        // Concatenate a larger number to splitPic url to return a larger image, store url in 'biggerPic' variable
        let biggerPic = splitPic[0] + '200';

        if (this.state.open) {
            return(
                <div>
                    <div className="resultDiv" onClick={this.handleClickOpen} >
                        <p>{this.props.recipe.recipeName}</p>
                        <img src={biggerPic} alt="Recipe" className="recipeImage"/>
                    </div>
                    <Dialog open={this.state.open} onClose={this.handleClose}>
                        {/* <DialogTitle>Hello</DialogTitle> */}
                        <DialogContent>
                            Hello
                            {/* <SelectedRecipe handleClose={this.handleClose}/> */}
                        </DialogContent>
                    </Dialog>
                </div>
            )
        } else {
            return(
            <div className="resultDiv" onClick={this.handleClickOpen} >
                <p>{this.props.recipe.recipeName}</p>
                <img src={biggerPic} alt="Recipe" className="recipeImage"/>
            </div>
            )
        }
    }
}

// connect component to Redux in order to dispatch this recipe's unique id to the yummlySaga to use in API request
const mapReduxStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState
});

export default connect(mapReduxStateToProps)(RecipeItem);
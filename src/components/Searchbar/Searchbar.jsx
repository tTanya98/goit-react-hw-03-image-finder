import { Component } from "react";
import { toast } from "react-hot-toast"; 
// import { BiSearch } from 'react-icons/bi'; 
import sty from './Searchbar.module.css' 

export class Searchbar extends Component {
  state = {
    search: '',
  };

    onChangeInput = (evt) => {
        const { name, value } = evt.currentTarget; 
        this.setState({ [name]: value }); 
  }

    resetForm = () => {
     this.setState({ search: '' });
    }

  render() {
    return (
      <header className={sty.searchbar}>
        <form

          onSubmit={evt => {
                    evt.preventDefault();

                    if (!this.state.search) {
                      return toast.error('Enter text for search.'); 
                    }

            this.props.handleSubmit(this.state.search);
            this.resetForm();
          }}
          className={sty.Form}
        >

          <button type="submit" className={sty.Button}>
            Search
          </button>

          <input
            value={this.state.search}
            onChange={this.onChangeInput} 
            className={sty.Input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus 
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
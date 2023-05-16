import { Component } from 'react'; 
import { createPortal } from 'react-dom'; 
import sty from './Modal.module.css'; 

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown); 
  }

  keyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal(); 
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  handleClose = (evt) => {

    if (evt.currentTarget === evt.target) {
      this.props.closeModal(); 
    }
  }

  render() {
    return createPortal(<div onClick={this.handleClose} className={sty.Overlay}>
      <div className={sty.Modal}>{this.props.children}</div> 
    </div>, modalRoot)
  }
}
import sty from './Button.module.css'; 

export const Button = ({ clickLoad }) => {
  return (
    <button onClick={clickLoad} className={sty.Button} type="button">
      Load more
    </button>
  );
};
import { useRef } from "react";
const SearchBar = (props) => {
  const nameRef = useRef(null);
  const onTrigger = (event) => {
    console.log(nameRef.current.value);
    event.preventDefault();
    props.onSearch(nameRef.current.value);
  };

  return (
    // <form onSubmit={onTrigger}>
    <input
      type="text"
      ref={nameRef}
      onChange={onTrigger}
      placeholder="Search by Name"
    />
    //   {/* <br></br>
    //   <br></br>
    //   <input type="submit" value="Submit" />
    //   <br></br>
    //   <br></br>
    // </form> */}
  );
};
export default SearchBar;

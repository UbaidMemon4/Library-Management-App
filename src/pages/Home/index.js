import Login from "./login-page/login";
import Books from "./book-page/book";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((s) => s.user);
 return( 
    <>
    {user ? <Books /> : <Login />}

    </> ) 

};
export default Home;

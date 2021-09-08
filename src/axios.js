import axios from "axios";

// to prevent writing axios.get()... again and again we did this now if we write inst.get("/foo") it will be same as inst.get(https://api.movue......)

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//you can have only one default export in a file
//if you want to export multiple functions you can just export it normally (export func_name and then call it ->
//using destructuring (import{func_name} from file_name) but when we have default export we call it simply and ->
//the name we call it through can be anything )

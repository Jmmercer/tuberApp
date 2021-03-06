import Types from '../actionTypes';
import axios from 'axios';
import store from '../tuberStore';

const loadHome = () => {
  return {
    type: Types.LOAD_HOME,
    payload: axios.get("http://localhost:3000/")
  }
}

const login = (email, password) => {
  return {
    type: Types.LOG_IN,
    payload: {
      email,
      password
    }
  };
};

const logout = (session_token) => {
  return {
    type: Types.LOG_OUT,
    payload: { session_token }
  }
}

const registerStudent = (serializedData) => {


  return {
    type: Types.REGISTER_STUDENT,
    payload: serializedData
  }
}

const registerTutor = () => {
  return {
    type: Types.REGISTER_TUTOR,
    payload: false
  }
}

const search = (searchData) => {
  return {
    type: Types.SEARCH,
    payload: {
      searchTerm: searchData.searchTerm,
      filters: searchData.filters
    }
  }
}

const showHome = (tutors) => {
  return {
    type: Types.SHOW_HOME,
    payload: { tutors }
  }
}

const showRegisterTutorForm = () => {
  return {
    type: Types.REGISTER_TUTOR,
    payload: { page: "register_tutor" }
  }
}

export default {
  loadHome,
  login,
  logout,
  registerStudent,
  registerTutor,
  search,
  showHome,
  showRegisterTutorForm
}
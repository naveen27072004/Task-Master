const API_BASE_URL = "http://localhost:5000/api";

const apiEndpoints = {
  auth: {
    login: `${API_BASE_URL}/user/login`,
    register: `${API_BASE_URL}/user/newuser`,
    logout: `${API_BASE_URL}/auth/logout`,
  },
};

export default apiEndpoints;

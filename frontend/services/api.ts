import axios from 'axios'

const buildClient = () => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: `http://videos-app-backend-chart-backend-service`,
      withCredentials: true
    })
  } else {
    return axios.create({
      baseURL: `/api`,
      withCredentials: true
    })
  }
}

export default buildClient

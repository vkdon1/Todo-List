import axios from "axios";

const API_URL = "https://gd9z4z-5000.csb.app/tasks";

export const fetchTasks = () => axios.get(API_URL);
export const addTask = (title) => axios.post(API_URL, { title });
export const toggleTask = (id) => axios.put(`${API_URL}/${id}`);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL;

const userToken = sessionStorage.getItem("token");

const config = {
  headers: {
    Authorization: `Bearer ${userToken}`,
  },
};

export const useVoteStore = create((set) => ({
  candidates: [],
  success: false,
  error: null,
  loading: false,

  voteCandidate: async (id) => {
    try {
      set({
        success: false,
        error: null,
        loading: true,
      });

      const response = await axios.post(
        `${API_URL}/vote/cast/${id}`,
        {},
        config
      );
      set({
        loading: false,
        success: true,
      });
      toast.success(response.data.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      set({
        error: error,
        loading: false,
        success: false,
      });
      toast.error(error?.response?.data?.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },

  getMyVote: async () => {
    try {
      set({
        success: false,
        error: null,
        loading: true,
      });
      const response = await axios.get(`${API_URL}/vote/me`, config);
      set({
        candidate: response.data,
        loading: false,
        success: true,
      });
    } catch (error) {
      set({
        error: error,
        loading: false,
        success: false,
      });
    }
  },

  getVoteResult: async () => {
    try {
      set({
        success: false,
        error: null,
        loading: true,
      });
      const response = await axios.get(`${API_URL}/vote/result`);
      const candidates = response.data;
      set({
        candidates: candidates,
        loading: false,
        success: true,
      });
      toast.success(response.data.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      set({
        error: error,
        loading: false,
        success: false,
      });
      toast.error(error?.response?.data?.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },
}));

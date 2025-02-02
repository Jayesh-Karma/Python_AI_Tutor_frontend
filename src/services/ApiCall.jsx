import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const apiCall =async (message, tutor) => {
    try {
        const response = await axios.post(`${baseUrl}/ask-ai`, {
          message: message,
          tutor: tutor,
        });
    
        return response;
      } catch (error) {
        console.error("Error during API call:", error);
        throw error;
      }
}
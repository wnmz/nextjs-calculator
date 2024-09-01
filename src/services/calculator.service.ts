import axios from 'axios';
import { CalcHistory } from "@/app/components/calculator/history";
import { CalcMemory } from "@/app/components/calculator/memory";

export const calculatorService = {
  async fetchUserData() {
    try {
      const response = await axios.get('/api/user/me', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },

  async saveHistory(entry: CalcHistory) {
    try {
      const response = await axios.post('/api/calculation/history', entry, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error saving history:', error);
      throw error;
    }
  },

  async saveMemory(entry: CalcMemory) {
    try {
      const response = await axios.post('/api/calculation/memory', entry, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error saving memory:', error);
      throw error;
    }
  },

  async updateMemory(entry: CalcMemory) {
    try {
      const response = await axios.post('/api/calculation/memory', entry, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error updating memory:', error);
      throw error;
    }
  },

  async deleteMemory(entry: CalcMemory) {
    try {
      const response = await axios.delete('/api/calculation/memory', {
        headers: {
          'Content-Type': 'application/json',
        },
        data: entry, 
      });
      return response.data.data;
    } catch (error) {
      console.error('Error deleting memory:', error);
      throw error;
    }
  },
};

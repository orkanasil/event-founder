import { defineStore } from "pinia";
import axios from "axios";

export const useEventStore = defineStore("eventStore", {
  state: () => ({
    events: [],
    favEvents: [],
  }),
  getters: {
    getEvents: (state) => state.events,
    getFavEvents: (state) => state.favEvents,
  },
  actions: {
    async fetchEvents() {
      try {
        const response = await axios.get(
          "events?apikey=gN74Pt2ffefTpa8JGmepbOcixbOQ40OG&locale=*&page=3",
        );
        this.events = response.data._embedded.events;
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    },
    findEventsById(payload) {
      const { id } = payload
      const isExist = this.favEvents.includes((e) => e.id === id);
      console.log('isExist ', isExist);
      if (!isExist) {
        this.favEvents.push(payload);
      }
    },
  },
});

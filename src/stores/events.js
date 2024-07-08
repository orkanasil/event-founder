import { defineStore } from "pinia";
import axios from "axios";

export const useEventStore = defineStore("eventStore", {
  state: () => ({
    events: [],
  }),
  getters: {
    getEvents: (state) => state.events,
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
  },
});

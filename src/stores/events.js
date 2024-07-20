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
        this.events = response.data._embedded.events.map((event) => ({
          ...event,
          activeKey: false,
        }));
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    },
    findEventsById(payload) {
      const { id } = payload;
      const isExist = this.favEvents.some((e) => e.id === id);
      const isActive = this.events.find((e) => e.id === id);
      console.log("isExist ", isExist);
      if (isActive) {
        isActive.activeKey = !isActive.activeKey;
        if (!isExist) {
          this.favEvents.push(payload);
        } else {
          this.favEvents = this.favEvents.filter((e) => e.id !== id);
        }
      }
    },
    removeFavEvents(payload) {
      this.favEvents.splice(payload, 1);
    },
  },
});

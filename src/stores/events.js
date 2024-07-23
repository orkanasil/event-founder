import { defineStore } from "pinia";
import axios from "axios";

export const useEventStore = defineStore("eventStore", {
  state: () => ({
    events: [],
    favEvents: [],
  }),
  getters: {
    getEvents: (state) => state.events,
    getFavEvents: (state) => state.events.filter((event) => event.isFavorite),
  },
  actions: {
    async fetchEvents() {
      try {
        const response = await axios.get("events");
        this.events = response.data;
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    },
    async setFavEvent(payload) {
      const { id } = payload;
      payload.isFavorite = !payload.isFavorite;
      await axios.put(`events/${id}`, payload);
      if (payload.isFavorite) {
        this.favEvents.push(payload);
      } else {
        this.favEvents = this.favEvents.filter((e) => e.id !== id);
      }
    },
    removeFavEvents(payload) {
      const { id } = payload;
      this.favEvents = this.favEvents.filter((e) => e.id !== id);
      this.fetchEvents();
    },
    filterEvents(payload) {
      this.filteredEvents = this.events;
      if (payload === "all") {
        this.filteredEvents = this.events;
      } else {
        this.filteredEvents = this.events?.filter((event) =>
          event.classifications.some(
            (classifications) =>
              classifications.segment.name.toLowerCase() === payload,
          ),
        );
      }
    },
  },
});

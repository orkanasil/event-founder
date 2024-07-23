import { defineStore } from "pinia";
import axios from "axios";

export const useEventStore = defineStore("eventStore", {
  state: () => ({
    events: [],
    favEvents: [],
    filteredEvents: [],
  }),
  getters: {
    getEvents: (state) => state.events,
    getFavEvents: (state) => state.favEvents,
    getFilteredEvents: (state) => state.filteredEvents,
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

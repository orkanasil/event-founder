import OButton from "@/components/ui/CustomButton.vue";
import OModal from "@/components/ui/CustomModal.vue";

export default function installGlobalComponents(app) {
  app.component("OButton", OButton);
  app.component("OModal", OModal);
}

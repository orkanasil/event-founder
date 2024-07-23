import OButton from "@/components/ui/CustomButton.vue";
import OModal from "@/components/ui/CustomModal.vue";
import OPagination from "@/components/ui/CustomPagination.vue";

export default function installGlobalComponents(app) {
  app.component("OButton", OButton);
  app.component("OModal", OModal);
  app.component("OPagination", OPagination);
}

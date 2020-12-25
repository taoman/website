// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }

import Vue from "vue";
import {StoreType} from "@/store/store-entry"
declare module "vue/types/vue" {
  interface Vue {
    $stores : StoreType
  }
  // export default Vue;
}

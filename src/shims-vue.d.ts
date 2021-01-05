// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }

import Vue from "vue";
import {UserType} from "@/api"
import {StoreType} from "@/store/store-entry"
declare module "vue/types/vue" {
  interface Vue {
    $stores: StoreType
    $api:UserType
  }
  // export default Vue;
}

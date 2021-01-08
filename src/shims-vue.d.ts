// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }

import Vue from "vue";
import {UserApi} from "@/api"
import {StoreType} from "@/store/store-entry"
declare module "vue/types/vue" {
  interface Vue {
    $stores: StoreType
    $api:UserApi
  }
  // export default Vue;
}

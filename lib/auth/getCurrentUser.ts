import { getCurrentUserData } from "./server-actions";

export async function getCurrentUser() {
  return await getCurrentUserData();
}

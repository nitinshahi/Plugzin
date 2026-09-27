import type { User } from "@/types/user";

const MOCK_USER: User = {
  name: "Olivia Rhye",
  email: "olivia@untitledui.com",
  avatarUrl: null,
};

/**
 * There is no auth yet. Return `null` here to render the signed-out header
 * with its Sign In / Get Z-Tracker pair; return MOCK_USER for the signed-in
 * header with the avatar and user menu. Replace the body when real auth lands
 * and every caller keeps working.
 */
export function getSession(): User | null {
  return MOCK_USER;
}

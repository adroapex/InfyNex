import { createSafeActionClient } from "next-safe-action";

// Create the safe action client with sanitized error handling
export const actionClient = createSafeActionClient({
  handleServerError(e) {
    // Sanitize any server errors to prevent exposing internal emails, keys, or stack traces to the public UI
    if (e instanceof Error) {
      if (
        e.message.includes("@") ||
        e.message.includes("resend.com") ||
        e.message.includes("api_key") ||
        e.message.includes("RESEND_")
      ) {
        return "Unable to send message at this time. Please try again later or reach out to contact@infynex.org.";
      }
      return e.message;
    }
    return "An unexpected error occurred. Please try again later.";
  },
});

import { redirect } from "next/navigation";

export default async function CurrentMeetingRedirect() {
  redirect("/meetings/current/this-week");
}
